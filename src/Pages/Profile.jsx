import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize Firebase with your configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDJiIZKRvOhw2r1F3Xo1R0BRMn5DSfyaVM",
      authDomain: "learnovation-cff6b.firebaseapp.com",
      projectId: "learnovation-cff6b",
      storageBucket: "learnovation-cff6b.appspot.com",
      messagingSenderId: "898788655760",
      appId: "1:898788655760:web:9890c1dd4ea51bc17b0e15",
      measurementId: "G-SZJ33XSDS8",
    };
    const app = initializeApp(firebaseConfig);

    // Get authentication object after the app is initialized
    const auth = getAuth(app);

    if (!auth.currentUser) {
      // No authenticated user, handle accordingly (redirect to login, etc.)
      setLoading(false);
      return;
    }

    // Reference to the authenticated user's data in Firebase Realtime Database
    const dbRef = ref(getDatabase(app), `users/${auth.currentUser.uid}`);

    // Fetch data from Firebase Realtime Database
    const onData = (snapshot) => {
      try {
        const data = snapshot.val();

        if (data) {
          // Update state with the fetched data
          setUserData({
            name: data.name || "",
            phone: data.phoneNumber || "",
            email: data.email || "",
          });
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    onValue(dbRef, onData);

    return () => {
      // Clean up Firebase reference on component unmount
      off(dbRef, "value", onData);
    };
  }, []);

  return (
    <AuthenticatedHomeLayout>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg py-3">
            <div className="p-2">
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {!loading && !error && (
                <table className="text-L my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Name:</td>
                      <td className="px-2 py-2">{userData.name}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Phone:</td>
                      <td className="px-2 py-2">{userData.phone}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Email:</td>
                      <td className="px-2 py-2">{userData.email}</td>
                    </tr>
                  </tbody>
                </table>
              )}
              <div className="text-center my-3"></div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedHomeLayout>
  );
};

export default Profile;

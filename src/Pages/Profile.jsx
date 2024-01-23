import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

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

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);

    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          // Reference to the authenticated user's data in Firebase Realtime Database
          const dbRef = ref(getDatabase(app), `users/${user.uid}`);

          // Fetch data from Firebase Realtime Database using get() and once()
          const snapshot = await get(dbRef);

          if (snapshot.exists()) {
            const data = snapshot.val();
            setUserData({
              name: data.name || "",
              phone: data.phoneNumber || "",
              email: data.email || "",
            });
          } else {
            // Handle the case where the user data doesn't exist
            setError("User data not found");
          }
        } else {
          // No authenticated user, handle accordingly (redirect to login, etc.)
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []); // Pass an empty dependency array

  return (
    <AuthenticatedHomeLayout>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg py-3">
            <div className="p-2">
              {loading && (
                <div className="flex items-center justify-center mb-3">
                  {/* Include the loading spinner here */}
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 sr-only">Loading...</span>
                </div>
              )}
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

import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const JavascriptAkshay = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "JS Basics",
      link: "https://www.youtube.com/embed/pN6jk0uUrD8",
    },
    {
      id: 2,
      title: "Execution Context",
      link: "https://www.youtube.com/embed/ZvbzSrg0afE",
    },
    {
      id: 3,
      title: "Code Execution & Call Stack",
      link: "https://www.youtube.com/embed/iLWTnMzWtj4",
    },
    {
      id: 4,
      title: "Hoisting in JS",
      link: "https://www.youtube.com/embed/Fnlnw8uY6jo",
    },
    {
      id: 5,
      title: "Functions in JS",
      link: "https://www.youtube.com/embed/gSDncyuGw0s",
    },
    {
      id: 6,
      title: "Shortest JS Program",
      link: "https://www.youtube.com/embed/QCRpVw2KXf8",
    },
    {
      id: 7,
      title: "undefined vs not defined",
      link: "https://www.youtube.com/embed/B7iF6G3EyIk",
    },
    {
      id: 8,
      title: "Scope Chain & Environment",
      link: "https://www.youtube.com/embed/uH-tVP8MUs8",
    },
    {
      id: 9,
      title: "let & const in JS",
      link: "https://www.youtube.com/embed/BNC6slYCj50",
    },
    {
      id: 10,
      title: "Block Scope & Shadowing",
      link: "https://www.youtube.com/embed/lW_erSjyMeM",
    },
    {
      id: 11,
      title: "Diwali QnA",
      link: "https://www.youtube.com/embed/VIJxU2NYG-Y",
    },
    {
      id: 12,
      title: "Closures in JS",
      link: "https://www.youtube.com/embed/qikxEIxsXco",
    },
    {
      id: 13,
      title: "setTimeout + Closures",
      link: "https://www.youtube.com/embed/eBTBG4nda2A",
    },
    {
      id: 14,
      title: "CRAZY JS INTERVIEW ft. Closures",
      link: "https://www.youtube.com/embed/t1nFAMws5FI",
    },
    {
      id: 15,
      title: "50K Subscribers Party",
      link: "https://www.youtube.com/embed/OJfz6ZHxqZ8",
    },
    {
      id: 16,
      title: "FIRST CLASS FUNCTIONS",
      link: "https://www.youtube.com/embed/SHINoHxvTso",
    },
    {
      id: 17,
      title: "Callback Functions ",
      link: "https://www.youtube.com/embed/btj35dh3_U8",
    },
    {
      id: 18,
      title: "Async JS & EVENT LOOP",
      link: "https://www.youtube.com/embed/8zKuNo4ay8E",
    },
    {
      id: 19,
      title: "JS Engine EXPOSED",
      link: "https://www.youtube.com/embed/2WJL19wDH68",
    },
    {
      id: 20,
      title: "TRUST ISSUES setTimeout()",
      link: "https://www.youtube.com/embed/nqsPmuicJJc",
    },
    {
      id: 21,
      title: "Higher-Order Functions",
      link: "https://www.youtube.com/embed/HkWxvB1RJq0",
    },
    {
      id: 22,
      title: "map, filter & reduce",
      link: "https://www.youtube.com/embed/zdp0zrpKzIE",
    },
  ];

  // State to track the selected video ID
  const [selectedVideo, setSelectedVideo] = useState(lectures[0].id);

  // Function to update the iframe source based on the selected video
  const updateIframeSource = (videoId) => {
    const selectedLecture = lectures.find((lecture) => lecture.id === videoId);
    return selectedLecture ? selectedLecture.link : "";
  };

  return (
    <AuthenticatedHomeLayout>
      <h1 className={`mb-7 text-center my-3 text-2xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ${"sm:mb-4"}`}>

        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Akshay Saini
        </span>{" "}
        JavaScript Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="javascript"
              width="390"
              height="225"
              className="md:w-[960px] xl:w-[960px] 2xl:w-[960px] md:h-[400px] lg:h-[500px] xl:h-[555px] 2xl:h-[555px]"
              src={updateIframeSource(selectedVideo)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              playsInline // Add playsinline attribute for mobile devices
            ></iframe>
          </div>
        </div>

        <div className="w-full md:w-2/4 p-3 mt-4 hover:overflow-scroll overflow-auto max-h-[570px]">
          <div className="bg-slate-600 p-4 rounded">
            <ol className="list-none p-0">
              {lectures.map((lecture, index) => (
                <li key={lecture.id}>
                  <button
                    onClick={() => setSelectedVideo(lecture.id)}
                    className={`font-bold text-lg ${
                      selectedVideo === lecture.id ? "text-black" : ""
                    } ml-10`}
                  >
                    {index + 1}. {lecture.title}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </AuthenticatedHomeLayout>
  );
};

export default JavascriptAkshay;

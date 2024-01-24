import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const NextHitesh = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Next.js Full Stack Course",
      link: "https://www.youtube.com/embed/iPGXk-i-VYU",
    },
    {
      id: 2,
      title: "Signup and Login",
      link: "https://www.youtube.com/embed/2RxaJrltJKo",
    },
    {
      id: 3,
      title: "Middleware in Next.js",
      link: "https://www.youtube.com/embed/UgRw9lhhWDk",
    },
    {
      id: 4,
      title: "User Verification Email ",
      link: "https://www.youtube.com/embed/_BqkCRgCdng",
    },
    {
      id: 5,
      title: "Next.js Deployment",
      link: "https://www.youtube.com/embed/qJkey7UPyiw",
    },
    {
      id: 6,
      title: "Full Stack Authentication Course",
      link: "https://www.youtube.com/embed/eaQc7vbV4po",
    },
    {
      id: 7,
      title: "Next.js Meets Appwrite",
      link: "https://www.youtube.com/embed/n1edxEq8syI",
    },
    {
      id: 8,
      title: "Integrate Appwrite to Next.js",
      link: "https://www.youtube.com/embed/1SMO6kWb9Eo",
    },
    {
      id: 9,
      title: "Next.js Components to Talk ",
      link: "https://www.youtube.com/embed/fyEA1R4lFyQ",
    },
    {
      id: 10,
      title: "Appwrite Next.js and Context API",
      link: "https://www.youtube.com/embed/eSYvfCoWIzA",
    },
    {
      id: 11,
      title: "Full Stack Next.js Course ",
      link: "https://www.youtube.com/embed/7ahDnxnXheU",
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
      <h1
        className={`hidden md:block mb-7 text-center my-3 text-2xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl`}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Hitesh Chowdhary
        </span>{" "}
        NextJs Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="nextjs"
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

export default NextHitesh;

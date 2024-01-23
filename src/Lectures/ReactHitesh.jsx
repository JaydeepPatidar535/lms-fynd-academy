import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const ReactHitesh = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "React from Scratch",
      link: "https://www.youtube.com/embed/eCU7FfMl5WU",
    },
    {
      id: 2,
      title: "Learn React Roadmap",
      link: "https://www.youtube.com/embed/lHOb0BWu3-M",
    },
    {
      id: 3,
      title: "Create React Projects",
      link: "https://www.youtube.com/embed/lf8giXzuxVE",
    },
    {
      id: 4,
      title: "Understand React Flow",
      link: "https://www.youtube.com/embed/XGo8bz_j2ZY",
    },
    {
      id: 5,
      title: "Create React Library and JSX",
      link: "https://www.youtube.com/embed/2xz-ADKsKzA",
    },
    {
      id: 6,
      title: "Why You Need Hooks",
      link: "https://www.youtube.com/embed/4LI9sv8r6ss",
    },
    {
      id: 7,
      title: "Virtual DOM and Reconciliation",
      link: "https://www.youtube.com/embed/O1yXbmz409c",
    },
    {
      id: 8,
      title: "Tailwind and Props in React",
      link: "https://www.youtube.com/embed/gcOac4VFAvo",
    },
    {
      id: 9,
      title: "Build React Project: bgChanger",
      link: "https://www.youtube.com/embed/Tu9_vmzEK9w",
    },
    {
      id: 10,
      title: "useEffect, useRef, useCallback",
      link: "https://www.youtube.com/embed/NmSh-YpmDU4",
    },
    {
      id: 11,
      title: "Custom Hooks in React",
      link: "https://www.youtube.com/embed/0B6_GWvT2vs",
    },
    {
      id: 12,
      title: "React Router Crash Course",
      link: "https://www.youtube.com/embed/eLT2uiV7D8g",
    },
    {
      id: 13,
      title: "Context API in React",
      link: "https://www.youtube.com/embed/aAcI_FdfkA8",
    },
    {
      id: 14,
      title: "Build Dark Mode/Light Mode",
      link: "https://www.youtube.com/embed/Kduq5HxJdj4",
    },
    {
      id: 15,
      title: "Context API with Local Storage",
      link: "https://www.youtube.com/embed/EeOPyXwJiXk",
    },
    {
      id: 16,
      title: "Learn Redux Toolkit",
      link: "https://www.youtube.com/embed/pX0SBJF01EU",
    },
    {
      id: 17,
      title: "Full Stack Project with React ",
      link: "https://www.youtube.com/embed/SwviLVyaRKU",
    },
    {
      id: 18,
      title: "Setup Appwrite Web Project",
      link: "https://www.youtube.com/embed/vJLW3S_97aQ",
    },
    {
      id: 19,
      title: "Appwrite Auth",
      link: "https://www.youtube.com/embed/8hZg3Rw0X7w",
    },
    {
      id: 20,
      title: "Appwrite Databases,Query",
      link: "https://www.youtube.com/embed/4qoqhxlYI5w",
    },
    {
      id: 21,
      title: "Setup Redux Store",
      link: "https://www.youtube.com/embed/FVsnolBvRBc",
    },
    {
      id: 22,
      title: "Debugging for Protected Routes",
      link: "https://www.youtube.com/embed/ZG0_q4i8ADs",
    },
    {
      id: 23,
      title: "Create Production Components",
      link: "https://www.youtube.com/embed/tZqdubin95M",
    },
    {
      id: 24,
      title: "React Hook Form r",
      link: "https://www.youtube.com/embed/DGgeeY15X4k",
    },
    {
      id: 25,
      title: "Parsing HTML in React Components",
      link: "https://www.youtube.com/embed/e7llTS5U0dM",
    },
    {
      id: 26,
      title: "Prepare All Pages with Components",
      link: "https://www.youtube.com/embed/FM_GpaW3_Iw",
    },
    {
      id: 27,
      title: "Debugging the Mega Project",
      link: "https://www.youtube.com/embed/TtVMerlZtrE",
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
        Hitesh Chowdhary
        </span>{" "}
        ReactJs Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="reactjs"
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

export default ReactHitesh;

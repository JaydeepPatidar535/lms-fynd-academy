import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const ReduxCodevolution = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Redux Intro",
      link: "https://www.youtube.com/embed/9boMnm5X9ak",
    },
    {
      id: 2,
      title: "Getting Started",
      link: "https://www.youtube.com/embed/0eluxklOZVo",
    },
    {
      id: 3,
      title: "Core Concepts",
      link: "https://www.youtube.com/embed/3rlUADfuKhQ",
    },
    {
      id: 4,
      title: "Three Principles",
      link: "https://www.youtube.com/embed/_KhGdZEWC4c",
    },
    {
      id: 5,
      title: "Actions",
      link: "https://www.youtube.com/embed/2lxCaLJ2Rbk",
    },
    {
      id: 6,
      title: "Reducers",
      link: "https://www.youtube.com/embed/qdAThMLtF98",
    },
    {
      id: 7,
      title: "Redux Store",
      link: "https://www.youtube.com/embed/YAevAj6X6XU",
    },
    {
      id: 8,
      title: "Cakes & Ice Creams",
      link: "https://www.youtube.com/embed/q-SQRR-UjnY",
    },
    {
      id: 9,
      title: "Multiple Reducers",
      link: "https://www.youtube.com/embed/apcda524MJA",
    },
    {
      id: 10,
      title: "Combine Reducers",
      link: "https://www.youtube.com/embed/EKsoj96HQGY",
    },
    {
      id: 11,
      title: "Middleware",
      link: "https://www.youtube.com/embed/8zPyXAWS0L4",
    },
    {
      id: 12,
      title: "Async Actions",
      link: "https://www.youtube.com/embed/yGyj0mSfVuk",
    },
    {
      id: 13,
      title: "Redux Thunk Middleware",
      link: "https://www.youtube.com/embed/z2XCUu2wIl0",
    },
    {
      id: 14,
      title: "React Redux Setup",
      link: "https://www.youtube.com/embed/0bVP5cYhMuU",
    },
    {
      id: 15,
      title: "Actions",
      link: "https://www.youtube.com/embed/g5l8xu6i4XQ",
    },
    {
      id: 16,
      title: "Reducers",
      link: "https://www.youtube.com/embed/dm_2AANfdfA",
    },
    {
      id: 17,
      title: "Redux Store",
      link: "https://www.youtube.com/embed/271tQskDiCg",
    },
    {
      id: 18,
      title: "Connect",
      link: "https://www.youtube.com/embed/gFZiQnM3Is4",
    },
    {
      id: 19,
      title: "React Redux with Hooks",
      link: "https://www.youtube.com/embed/wc08G6g4yyA",
    },
    {
      id: 20,
      title: "useSelector Hook",
      link: "https://www.youtube.com/embed/oKvF8jcSwIg",
    },
    {
      id: 21,
      title: "useDispatch Hook",
      link: "https://www.youtube.com/embed/a3iV5d8Q2-8",
    },
    {
      id: 22,
      title: "Cakes & Ice Creams",
      link: "https://www.youtube.com/embed/fY-Wq0k_9P4",
    },
    {
      id: 23,
      title: "Logger Middleware",
      link: "https://www.youtube.com/embed/6AGdeO28UKY",
    },
    {
      id: 24,
      title: "Redux Devtool Extension",
      link: "https://www.youtube.com/embed/IlM7497j6LY",
    },
    {
      id: 25,
      title: "Action Payload",
      link: "https://www.youtube.com/embed/B-jNaEx1Xfc",
    },
    {
      id: 26,
      title: "mapStateToProps",
      link: "https://www.youtube.com/embed/prg6YzRcEvE",
    },
    {
      id: 27,
      title: "mapDispatchToProps",
      link: "https://www.youtube.com/embed/gdNitBetNWc",
    },
    {
      id: 28,
      title: "Async Actions",
      link: "https://www.youtube.com/embed/tQ80uAyqVyI",
    },
    {
      id: 29,
      title: "Redux Thunk Get Request",
      link: "https://www.youtube.com/embed/tcCS4mGAq7Q",
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
          Codevolution
        </span>{" "}
        React & Redux Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="reactjs"
              width="390"
              height="225"
              className="md:w-[960px] xl:w-[960px] 2xl:w-[960px] md:h-[400px] lg:h-[500px] xl:h-[555px] 2xl:h-[555px] mt-6 md:mt-0"
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
export default ReduxCodevolution;

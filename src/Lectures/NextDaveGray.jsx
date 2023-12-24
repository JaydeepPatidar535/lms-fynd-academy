import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const NextDaveGray = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Next.js Basics",
      link: "https://www.youtube.com/embed/6h649f2fB9Q",
    },
    {
      id: 2,
      title: "Layout & Links in Next.js",
      link: "https://www.youtube.com/embed/vuznUqirz5I",
    },
    {
      id: 3,
      title: "Data Fetching in Next.js",
      link: "https://www.youtube.com/embed/1n7slbDB1bQ",
    },
    {
      id: 4,
      title: "Next.js 13 SSG, SSR & ISR",
      link: "https://www.youtube.com/embed/E1HzFvXgrCs",
    },
    {
      id: 5,
      title: "Next.js Client Components",
      link: "https://www.youtube.com/embed/PcHY2Py6AQY",
    },
    {
      id: 6,
      title: "Build a Next.js Blog",
      link: "https://www.youtube.com/embed/puIQhnjOfbc",
    },
    {
      id: 7,
      title: "API Routes in Next.js",
      link: "https://www.youtube.com/embed/xirQ7AMyTM8",
    },
    {
      id: 8,
      title: "Build REST API with Next.js 13",
      link: "https://www.youtube.com/embed/-MFiza7ZRzs",
    },
    {
      id: 9,
      title: "Next.js Middleware & Cors",
      link: "https://www.youtube.com/embed/h4-2K7nFf7s",
    },
    {
      id: 10,
      title: "Revalidate with Next.js",
      link: "https://www.youtube.com/embed/Q3UP1Is8Pvw",
    },
    {
      id: 11,
      title: "Mutating Data in Next.js",
      link: "https://www.youtube.com/embed/v_HpVwCDAgU",
    },
    {
      id: 12,
      title: "Deploy Next.js Blog",
      link: "https://www.youtube.com/embed/6ih_3m_UPKg",
    },
    {
      id: 13,
      title: "Full Next.js Course",
      link: "https://www.youtube.com/embed/843nec-IvW0",
    },
    {
      id: 14,
      title: "Server Actions in Next.js",
      link: "https://www.youtube.com/embed/BmUsDuLO598",
    },
    {
      id: 15,
      title: "Upload Images in Next.js",
      link: "https://www.youtube.com/embed/OyxDGWgNJMc",
    },
    {
      id: 16,
      title: "Import Alias Usage",
      link: "https://www.youtube.com/embed/Lna5CjbxD4o",
    },
    {
      id: 17,
      title: "Random Quote Machine",
      link: "https://www.youtube.com/embed/d7XJjQesDtE",
    },
    {
      id: 18,
      title: "Next.js Cold Boot Duration",
      link: "https://www.youtube.com/embed/NWc7FU_qQ8g",
    },
    {
      id: 19,
      title: "Next-Auth Login Tutorial",
      link: "https://www.youtube.com/embed/w2h54xz6Ndw",
    },
    {
      id: 20,
      title: "Role-Based Authorization in Next.js",
      link: "https://www.youtube.com/embed/ay-atEUGIc4",
    },
    {
      id: 21,
      title: "Login & Registration Setup",
      link: "https://www.youtube.com/embed/WtHQGlKGUrU",
    },
    {
      id: 22,
      title: "Image Optimization in Next.js",
      link: "https://www.youtube.com/embed/gpJKj45AikY",
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
      <h1 class="mb-7 text-center my-3 text-2xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Dave Gray
        </span>{" "}
        Nextjs Course{" "}
      </h1>

      <div className="flex">
        <div className="w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="C++"
              width="960"
              height="555"
              src={updateIframeSource(selectedVideo)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-2/4 p-3 mt-4  hover:overflow-scroll overflow-auto max-h-[570px]">
          <div className="bg-slate-600 p-4 rounded">
            <ol className="list-none p-0">
              {lectures.map((lecture, index) => (
                <li key={lecture.id}>
                  <button
                    onClick={() => setSelectedVideo(lecture.id)}
                    className={` font-bold text-lg ${
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

export default NextDaveGray;

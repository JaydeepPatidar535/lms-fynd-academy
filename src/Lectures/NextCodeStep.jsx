import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const NextCodeStep = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction",
      link: "https://www.youtube.com/embed/YIqLzP0sVdc",
    },
    {
      id: 2,
      title: "Install and Setup",
      link: "https://www.youtube.com/embed/y0ecd_bGKb4",
    },
    {
      id: 3,
      title: "First Program",
      link: "https://www.youtube.com/embed/IEBTUhvRTwE",
    },
    {
      id: 4,
      title: "Events | Functions | State",
      link: "https://www.youtube.com/embed/JYLyxpNyMmw",
    },
    {
      id: 5,
      title: "File and Folder",
      link: "https://www.youtube.com/embed/ZrAjBtodMpA",
    },
    {
      id: 6,
      title: "Component Type",
      link: "https://www.youtube.com/embed/LVOwLzqfrkw",
    },
    {
      id: 7,
      title: "Basic Routing",
      link: "https://www.youtube.com/embed/8t37HK-ZQEc",
    },
    {
      id: 8,
      title: "Link and Navigation",
      link: "https://www.youtube.com/embed/skwq0Ymwya0",
    },
    {
      id: 9,
      title: "Nested Routing",
      link: "https://www.youtube.com/embed/2avQ3hVLQl8",
    },
    {
      id: 10,
      title: "Common Layout",
      link: "https://www.youtube.com/embed/d8-tQj1FUdk",
    },
    {
      id: 11,
      title: "Conditional Layout",
      link: "https://www.youtube.com/embed/TyIazu2lGGI",
    },
    {
      id: 12,
      title: "Dynamic Routing",
      link: "https://www.youtube.com/embed/Pobz2vLWXMw",
    },
    {
      id: 13,
      title: "Catch-all Segments",
      link: "https://www.youtube.com/embed/nCu9q9-r2uE",
    },
    {
      id: 14,
      title: "404 Page Not Found",
      link: "https://www.youtube.com/embed/T9fvMhgyRKg",
    },
    {
      id: 15,
      title: "Middleware",
      link: "https://www.youtube.com/embed/Oa0A-v_zkbk",
    },
    {
      id: 16,
      title: "Rendering",
      link: "https://www.youtube.com/embed/ZdvEOW7D8eM",
    },
    {
      id: 17,
      title: "Client Side vs PreRendering",
      link: "https://www.youtube.com/embed/m6_dnce29sE",
    },
    {
      id: 18,
      title: "Fetch API Data in Client Component",
      link: "https://www.youtube.com/embed/OgWerS5ntEw",
    },
    {
      id: 19,
      title: "Call API in Server Component",
      link: "https://www.youtube.com/embed/vTF0g6W8tCk",
    },
    {
      id: 20,
      title: "Use Client Component",
      link: "https://www.youtube.com/embed/wBSNIVd1_20",
    },
    {
      id: 21,
      title: "Style with Next.js",
      link: "https://www.youtube.com/embed/RC4jnIxx6BA",
    },
    {
      id: 22,
      title: "CSS Modules with Next.js",
      link: "https://www.youtube.com/embed/_29jIw4hS38",
    },
    {
      id: 23,
      title: "Conditional Style and CSS",
      link: "https://www.youtube.com/embed/fDd-onYJ0CY",
    },
    {
      id: 24,
      title: "Image Optimization",
      link: "https://www.youtube.com/embed/AnSftXHwBFw",
    },
    {
      id: 25,
      title: "Font Optimization",
      link: "https://www.youtube.com/embed/gDDf8L7jsUw",
    },
    {
      id: 26,
      title: "Generate Metadata ",
      link: "https://www.youtube.com/embed/VEEqXSeJnFU",
    },
    {
      id: 27,
      title: "Script Component",
      link: "https://www.youtube.com/embed/H97LBQOnlIQ",
    },
    {
      id: 28,
      title: "Loading Loader with API Data",
      link: "https://www.youtube.com/embed/QZFN91QRc4Y",
    },
    {
      id: 29,
      title: "Static Assets",
      link: "https://www.youtube.com/embed/AD2eR0_HkhY",
    },
    {
      id: 30,
      title: "Production Build",
      link: "https://www.youtube.com/embed/bBQPGuDjdmY",
    },
    {
      id: 31,
      title: "Export Static HTML Page with Build",
      link: "https://www.youtube.com/embed/eQdHCgB4Yj8",
    },
    {
      id: 32,
      title: "Static Site Generation (SSG)",
      link: "https://www.youtube.com/embed/6ZgVLb8AF0A",
    },
    {
      id: 33,
      title: "Redirect | Redirection",
      link: "https://www.youtube.com/embed/grWR39vF9-M",
    },
    {
      id: 34,
      title: "Environment Variables",
      link: "https://www.youtube.com/embed/EWl7rV6OTV0",
    },
    {
      id: 35,
      title: "API Routes",
      link: "https://www.youtube.com/embed/oxLMq1RmvVg",
    },
    {
      id: 36,
      title: "GET API with Static Data",
      link: "https://www.youtube.com/embed/cuHSMXG05tA",
    },
    {
      id: 37,
      title: "Call Next.js API",
      link: "https://www.youtube.com/embed/3dqJXtHUVKw",
    },
    {
      id: 38,
      title: "Make API with Post Method",
      link: "https://www.youtube.com/embed/SAWBpemiLyg",
    },
    {
      id: 39,
      title: "Integrate Post API",
      link: "https://www.youtube.com/embed/d2QDT-kDtgw",
    },
    {
      id: 40,
      title: "Make PUT API",
      link: "https://www.youtube.com/embed/7ZZ-ErPA_Ak",
    },
    {
      id: 41,
      title: "Integrate PUT API",
      link: "https://www.youtube.com/embed/23U0XQFX-9U",
    },
    {
      id: 42,
      title: "Make DELETE API",
      link: "https://www.youtube.com/embed/Ar_Xn-ZExgs",
    },
    {
      id: 43,
      title: "Integrate Delete API",
      link: "https://www.youtube.com/embed/B6qzauTJUB4",
    },
    {
      id: 44,
      title: "Catch All API Routes",
      link: "https://www.youtube.com/embed/FcFQH5GyA20",
    },
    {
      id: 45,
      title: "Use MongoDB Atlas",
      link: "https://www.youtube.com/embed/Hv1hlsmCh-8",
    },
    {
      id: 46,
      title: "Connect MongoDB and Next.js",
      link: "https://www.youtube.com/embed/gkAVCFOjZfA",
    },
    {
      id: 47,
      title: "POST API with MongoDB",
      link: "https://www.youtube.com/embed/bvkppo7Z1oc",
    },
    {
      id: 48,
      title: "Integrated POST API ",
      link: "https://www.youtube.com/embed/BFVJtsw2Dkc",
    },
    {
      id: 49,
      title: "GET API with MongoDB",
      link: "https://www.youtube.com/embed/WXyfQhl_u0U",
    },
    {
      id: 50,
      title: "PUT API with MongoDB",
      link: "https://www.youtube.com/embed/-NshnQEEtT0",
    },
    {
      id: 51,
      title: "Populate Form Data ",
      link: "https://www.youtube.com/embed/Qd75PGnijkQ",
    },
    {
      id: 52,
      title: "PUT API with MongoDB",
      link: "https://www.youtube.com/embed/lVPGcnJUsfc",
    },
    {
      id: 53,
      title: "DELETE API and UI MongoDB",
      link: "https://www.youtube.com/embed/sITcQb8Loyg",
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
          Code Step by Step
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

export default NextCodeStep;

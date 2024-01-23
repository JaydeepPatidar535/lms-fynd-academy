import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const NodePiyush = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "What is NodeJS?",
      link: "https://www.youtube.com/embed/ohIAiuHMKMI",
    },
    {
      id: 2,
      title: "NodeJS Installation",
      link: "https://www.youtube.com/embed/N6PjgN9licA",
    },
    {
      id: 3,
      title: "Hello World NodeJS",
      link: "https://www.youtube.com/embed/XhCs5cTYW_8",
    },
    {
      id: 4,
      title: "Modules in NodeJS",
      link: "https://www.youtube.com/embed/FSRo41TaHFU",
    },
    {
      id: 5,
      title: "File Handling in NodeJS",
      link: "https://www.youtube.com/embed/YazJFb_i4A0",
    },
    {
      id: 6,
      title: "How NodeJS Works?",
      link: "https://www.youtube.com/embed/y0aTs56DJWk",
    },
    {
      id: 7,
      title: "Building HTTP Server in NodeJS",
      link: "https://www.youtube.com/embed/ZQsrcayZcSk",
    },
    {
      id: 8,
      title: "Handling URL's in NodeJS",
      link: "https://www.youtube.com/embed/Nt-AsZh5woE",
    },
    {
      id: 9,
      title: "HTTP METHODS",
      link: "https://www.youtube.com/embed/kREAjKyPbSI",
    },
    {
      id: 10,
      title: "Getting Started Express,NodeJS",
      link: "https://www.youtube.com/embed/N2-FyBBxOZA",
    },
    {
      id: 11,
      title: "How Versioning Works in NodeJS?",
      link: "https://www.youtube.com/embed/ORmB_ABimjM",
    },
    {
      id: 12,
      title: "What is REST API?",
      link: "https://www.youtube.com/embed/cJAyEOZQUQY",
    },
    {
      id: 13,
      title: "Building REST API's using Node ",
      link: "https://www.youtube.com/embed/uNCrMvkPUAE",
    },
    {
      id: 14,
      title: "Introduction to POSTMAN ",
      link: "https://www.youtube.com/embed/7OzNVIxPLH0",
    },
    {
      id: 15,
      title: "Express Middleware",
      link: "https://www.youtube.com/embed/n2c0mf1sza4",
    },
    {
      id: 16,
      title: "HTTP Headers in API",
      link: "https://www.youtube.com/embed/mhg3Vwsb88M",
    },
    {
      id: 17,
      title: "HTTP Status Codes",
      link: "https://www.youtube.com/embed/fLGw2GK884s",
    },
    {
      id: 18,
      title: "Getting Started with MongoDB",
      link: "https://www.youtube.com/embed/oH0VoYiA8_s",
    },
    {
      id: 19,
      title: "Connecting NodeJS with MongoDB",
      link: "https://www.youtube.com/embed/xrglM8U0Zv8",
    },
    {
      id: 20,
      title: "Model View Controller in NodeJS ",
      link: "https://www.youtube.com/embed/JLtXoru-ipo",
    },
    {
      id: 21,
      title: "Create a Custom URL Shortener ",
      link: "https://www.youtube.com/embed/4WvX9dBjiJo",
    },
    {
      id: 22,
      title: "Server Side Rendering with EJS",
      link: "https://www.youtube.com/embed/yy9cbu_e3Xg",
    },
    {
      id: 23,
      title: "Building Node.js Authentication ",
      link: "https://www.youtube.com/embed/OWeruyqhiTo",
    },
    {
      id: 24,
      title: "JWT Authentication in NodeJS",
      link: "https://www.youtube.com/embed/mGrVmEex6_g",
    },
    {
      id: 25,
      title: "What are Cookies in NodeJS?",
      link: "https://www.youtube.com/embed/kMErso06vHo",
    },
    {
      id: 26,
      title: "Authorization in NodeJS",
      link: "https://www.youtube.com/embed/1uxWtBFOrkk",
    },
    {
      id: 27,
      title: "Creating Discord Bot in NodeJS",
      link: "https://www.youtube.com/embed/5UOMuTWrh6Q",
    },
    {
      id: 28,
      title: "Uploading Files with NodeJS",
      link: "https://www.youtube.com/embed/WqJ0P8JnftI",
    },
    {
      id: 29,
      title: "Project-NodeJS Blogging",
      link: "https://www.youtube.com/embed/6z6CR29gtds",
    },
    {
      id: 30,
      title:
        "Authentication -NodeJS Blogging ",
      link: "https://www.youtube.com/embed/X1AGH8Byj9Y",
    },
    {
      id: 31,
      title: "Blog App NodeJS, MongoDB ,EJS",
      link: "https://www.youtube.com/embed/vnWVrjsEeAM",
    },
    {
      id: 32,
      title: "Deploy NodeJS Application on AWS",
      link: "https://www.youtube.com/embed/_U0pTlpyMGg",
    },
    {
      id: 33,
      title: "WebSocket in NodeJS ",
      link: "https://www.youtube.com/embed/UUddpbgPEJM",
    },
    {
      id: 34,
      title: "NodeJS Streams",
      link: "https://www.youtube.com/embed/64LJJhT6Ybo",
    },
    {
      id: 35,
      title: "How to scale NodeJs applications",
      link: "https://www.youtube.com/embed/JoPZ9gEvpz8",
    },
    {
      id: 36,
      title: "What is Nginx?",
      link: "https://www.youtube.com/embed/b_B1BEShfBc",
    },
    {
      id: 37,
      title: "Install and Setup Nginx",
      link: "https://www.youtube.com/embed/Qmld1te08Ns",
    },
    {
      id: 38,
      title: "Serve Static Content with Nginx",
      link: "https://www.youtube.com/embed/YkuhqIDUi2A",
    },
    {
      id: 39,
      title: " NGINX, SSL With Lets Encrypt",
      link: "https://www.youtube.com/embed/ofBFl4M4BFk",
    },
    {
      id: 40,
      title: "Serverless Framework with NodeJS",
      link: "https://www.youtube.com/embed/VvYADzRwJK8",
    },
    {
      id: 41,
      title: "What is Serverless? ",
      link: "https://www.youtube.com/embed/AgOmeANl3ls",
    },
    {
      id: 42,
      title: "GraphQL Crash Course",
      link: "https://www.youtube.com/embed/WtkKwO1viI8",
    },
    {
      id: 43,
      title: "Threads App GraphQL Clone ",
      link: "https://www.youtube.com/embed/FbDrEEhG5cM",
    },
    {
      id: 44,
      title: "Setting up Graphql Server",
      link: "https://www.youtube.com/embed/g6YpoVYTd1s",
    },
    {
      id: 45,
      title: "Graphql Prisma Postgresql Setup",
      link: "https://www.youtube.com/embed/4jiTZGn34_c",
    },
    {
      id: 46,
      title: "Refactoring GraphQL Code ",
      link: "https://www.youtube.com/embed/MSJImC6cTkY",
    },
    {
      id: 47,
      title: "Authentication with GraphQL",
      link: "https://www.youtube.com/embed/0XFoeaYnc20",
    },
    {
      id: 48,
      title: "JWT Authentication and Context ",
      link: "https://www.youtube.com/embed/8atiBUsAOcI",
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
         Piyush Garg
        </span>{" "}
        NodeJs Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="nodejs"
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


export default NodePiyush;

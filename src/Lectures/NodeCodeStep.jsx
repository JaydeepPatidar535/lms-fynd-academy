import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const NodeCodeStep = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Node Introduction",
      link: "https://www.youtube.com/embed/zaLfOjNEOaQ",
    },
    {
      id: 2,
      title: "Basic Point Before",
      link: "https://www.youtube.com/embed/2UUYNJRhy-8",
    },
    {
      id: 3,
      title: "Install Node, NPM",
      link: "https://www.youtube.com/embed/PToSHV6fSNU",
    },
    {
      id: 4,
      title: "Make First Program",
      link: "https://www.youtube.com/embed/ZX6XEAdChe4",
    },
    {
      id: 5,
      title: "JavaScript Fundamentals",
      link: "https://www.youtube.com/embed/UE2tYTsJ-Zc",
    },
    {
      id: 6,
      title: "Core Modules",
      link: "https://www.youtube.com/embed/XsGZhbGFUnI",
    },
    {
      id: 7,
      title: "Create Server",
      link: "https://www.youtube.com/embed/s7pbkArwS4E",
    },
    {
      id: 8,
      title: "Package.json File",
      link: "https://www.youtube.com/embed/49ZV-veYRyk",
    },
    {
      id: 9,
      title: "Challenge & Interview",
      link: "https://www.youtube.com/embed/MwqxLxsIDxs",
    },
    {
      id: 10,
      title: "Nodemon Package",
      link: "https://www.youtube.com/embed/koqeBGT1-VM",
    },
    {
      id: 11,
      title: "Simple and Basic API",
      link: "https://www.youtube.com/embed/Rwvv3wkOB1c",
    },
    {
      id: 12,
      title: "Getting Input from Command Line",
      link: "https://www.youtube.com/embed/N4JzPYB4TqE",
    },
    {
      id: 13,
      title: "Display File List from Folder",
      link: "https://www.youtube.com/embed/OfLCRkxFPCc",
    },
    {
      id: 14,
      title: "Asynchronous Programming ",
      link: "https://www.youtube.com/embed/2AT2a9x2SKw",
    },
    {
      id: 15,
      title: "Asynchronous Programming",
      link: "https://www.youtube.com/embed/GVbZrBYkX1g",
    },
    {
      id: 16,
      title: "Handle Asynchronous Data",
      link: "https://www.youtube.com/embed/c7UHh04AFbc",
    },
    {
      id: 17,
      title: "How Node.js Works",
      link: "https://www.youtube.com/embed/mGVFltBxLKU",
    },
    {
      id: 18,
      title: "Express.js Introduction",
      link: "https://www.youtube.com/embed/KW0qyqY8y48",
    },
    {
      id: 19,
      title: "Routing Params",
      link: "https://www.youtube.com/embed/exO_AupvPL0",
    },
    {
      id: 20,
      title: "Render HTML and JSON",
      link: "https://www.youtube.com/embed/JOLxMq1OOcA",
    },
    {
      id: 21,
      title: "Make HTML Page",
      link: "https://www.youtube.com/embed/XReqL-YJJw0",
    },
    {
      id: 22,
      title: "Remove Extension from URL",
      link: "https://www.youtube.com/embed/Y1tpbTMLPF8",
    },
    {
      id: 23,
      title: "EJS Template Engine",
      link: "https://www.youtube.com/embed/AhSIde-hTJg",
    },
    {
      id: 24,
      title: "Dynamic Page with EJS",
      link: "https://www.youtube.com/embed/IimRcGYN3gA",
    },
    {
      id: 25,
      title: "Express.js Middleware",
      link: "https://www.youtube.com/embed/6Spfry-_fAY",
    },
    {
      id: 26,
      title: "Route Level Middleware Express.js",
      link: "https://www.youtube.com/embed/2e2E5cvLw0g",
    },
    {
      id: 27,
      title: "Install MongoDB",
      link: "https://www.youtube.com/embed/aypuKm_1kng",
    },
    {
      id: 28,
      title: "MongoDB Basic - 1",
      link: "https://www.youtube.com/embed/I93L6yeJhtw",
    },
    {
      id: 29,
      title: "MongoDB CRUD Operation",
      link: "https://www.youtube.com/embed/TjZiwSLrS5U",
    },
    {
      id: 30,
      title: "Connect MongoDB with Node.js",
      link: "https://www.youtube.com/embed/_5kf2l5vVvM",
    },
    {
      id: 31,
      title: "Read Data from MongoDB",
      link: "https://www.youtube.com/embed/L-Ugvseg24o",
    },
    {
      id: 32,
      title: "Insert Data in MongoDB",
      link: "https://www.youtube.com/embed/79Ze6Pe6lKg",
    },
    {
      id: 33,
      title: "Update Data in MongoDB",
      link: "https://www.youtube.com/embed/QDgb9oA28Zk",
    },
    {
      id: 34,
      title: "Delete Record in MongoDB",
      link: "https://www.youtube.com/embed/VMoFn7-iZfE",
    },
    {
      id: 35,
      title: "Basic GET API with MongoDB",
      link: "https://www.youtube.com/embed/uDcLa97F_zg",
    },
    {
      id: 36,
      title: "Post API ",
      link: "https://www.youtube.com/embed/Ewzrmb_vpxk",
    },
    {
      id: 37,
      title: "PUT API ",
      link: "https://www.youtube.com/embed/irAmu7bXhiA",
    },
    {
      id: 38,
      title: "Delete API ",
      link: "https://www.youtube.com/embed/lmNAejUdomI",
    },
    {
      id: 39,
      title: "Mongoose with Node",
      link: "https://www.youtube.com/embed/TKbqzoeYKmo",
    },
    {
      id: 40,
      title: "CRUD with Mongoose",
      link: "https://www.youtube.com/embed/PkoV-nUYhM4",
    },
    {
      id: 41,
      title: "Post API with Mongoose",
      link: "https://www.youtube.com/embed/usnMaVgtk7M",
    },
    {
      id: 42,
      title: "GET, DELETE, and PUT API ",
      link: "https://www.youtube.com/embed/PiPIda-NxcU",
    },
    {
      id: 43,
      title: "Search API with Multiple Fields",
      link: "https://www.youtube.com/embed/T6S1-TuPBzg",
    },
    {
      id: 44,
      title: "Upload File",
      link: "https://www.youtube.com/embed/7BnTHapJmD0",
    },
    {
      id: 45,
      title: "OS Module",
      link: "https://www.youtube.com/embed/26cO5o6APf0",
    },
    {
      id: 46,
      title: "Events and Event Emitter",
      link: "https://www.youtube.com/embed/7QBb6n-Wj3A",
    },
    {
      id: 47,
      title: "REPL - Read-Eval-Print-Loop",
      link: "https://www.youtube.com/embed/OWoHVv16ThY",
    },
    {
      id: 48,
      title: "Connect with MySQL",
      link: "https://www.youtube.com/embed/veCDcGmMPQg",
    },
    {
      id: 49,
      title: "GET API with MySQL",
      link: "https://www.youtube.com/embed/lmO02UGwvRs",
    },
    {
      id: 50,
      title: "POST API with MySQL",
      link: "https://www.youtube.com/embed/1x3P_XcgiyE",
    },
    {
      id: 51,
      title: "PUT API with MySQL",
      link: "https://www.youtube.com/embed/t7qGD_2wyEY",
    },
    {
      id: 52,
      title: "DELETE API with MySQL",
      link: "https://www.youtube.com/embed/I8PXqGre5zY",
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

export default NodeCodeStep;

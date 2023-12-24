import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const NodeTechnicalThapa = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: "1",
      title: "Node JS Intro",
      link: "https://www.youtube.com/embed/IIpiLZGTWuo",
    },
    {
      id: "2",
      title: "Node JS Setup",
      link: "https://www.youtube.com/embed/mIW_8dMQaUk",
    },
    {
      id: "3",
      title: "Node.js Prerequisites",
      link: "https://www.youtube.com/embed/aW9Zv2q7T1s",
    },
    {
      id: "4",
      title: "Complete REPL in NodeJS",
      link: "https://www.youtube.com/embed/uJOsl4x7pAo",
    },
    {
      id: "5",
      title: "Node.js Core Modules",
      link: "https://www.youtube.com/embed/5uZDLL0zaWg",
    },
    {
      id: "6",
      title: "NodeJS CRUD Challenge",
      link: "https://www.youtube.com/embed/0F-nudTm5EU",
    },
    {
      id: "7",
      title: "Async FS in Node.js",
      link: "https://www.youtube.com/embed/CgEZYq7A9xU",
    },
    {
      id: "8",
      title: "Sync vs Async in Node JS",
      link: "https://www.youtube.com/embed/rDsR1SRQwxE",
    },
    {
      id: "9",
      title: "Async CRUD Challenge",
      link: "https://www.youtube.com/embed/5E1fqFs2IuQ",
    },
    {
      id: "10",
      title: "Node.js OS Module",
      link: "https://www.youtube.com/embed/tFKzxizRkfY",
    },
    {
      id: "11",
      title: "PATH Module in Node.JS",
      link: "https://www.youtube.com/embed/xrj28wzHxKY",
    },
    {
      id: "12",
      title: "Create Export Modules in Node JS",
      link: "https://www.youtube.com/embed/GtV-_NTlnLg",
    },
    {
      id: "13",
      title: "Complete NPM in 20 Minutes",
      link: "https://www.youtube.com/embed/bpssxANRL54",
    },
    {
      id: "14",
      title: "Nodemon in Node.JS",
      link: "https://www.youtube.com/embed/nyehoZwugeY",
    },
    {
      id: "15",
      title: "Module Wrapper Function",
      link: "https://www.youtube.com/embed/kT2mSjAcYxM",
    },
    {
      id: "16",
      title: "Create Web Server in Node.JS",
      link: "https://www.youtube.com/embed/9DEW7eXEOWI",
    },
    {
      id: "17",
      title: "Node JS Routing",
      link: "https://www.youtube.com/embed/jJkky3L1Lmw",
    },
    {
      id: "18",
      title: "Complete JSON in Node JS",
      link: "https://www.youtube.com/embed/HTlTVOTGXMw",
    },
    {
      id: "19",
      title: "Create Simple API in Node JS",
      link: "https://www.youtube.com/embed/F1lI-Fhgjew",
    },
    {
      id: "20",
      title: "Events Module in Node.JS",
      link: "https://www.youtube.com/embed/DX9UUr7YKxE",
    },
    {
      id: "21",
      title: "Streams and Buffer in Node JS",
      link: "https://www.youtube.com/embed/ev5pgydOhT8",
    },
    {
      id: "22",
      title: "Stream Pipes in Node JS",
      link: "https://www.youtube.com/embed/uEc6QzQWQhU",
    },
    {
      id: "23",
      title: "Send Emails with Nodemailer",
      link: "https://www.youtube.com/embed/xMfHEFOoJug",
    },
    {
      id: "24",
      title: "Dynamic Weather Website",
      link: "https://www.youtube.com/embed/Fx9ciSsjDsc",
    },
    {
      id: "25",
      title: "Dynamic Quotes Website",
      link: "https://www.youtube.com/embed/eqWMc0ocvWQ",
    },
    {
      id: "26",
      title: "Express JS Intro",
      link: "https://www.youtube.com/embed/CgoD3HX1lWY",
    },
    {
      id: "27",
      title: "Express JS Routing Challenge",
      link: "https://www.youtube.com/embed/DPbw2LyqnQc",
    },
    {
      id: "28",
      title: "HTML JSON Response in Express JS",
      link: "https://www.youtube.com/embed/6hZhZnStZqM",
    },
    {
      id: "29",
      title: "Serve HTML CSS JS in Express JS",
      link: "https://www.youtube.com/embed/0oGnRmbW-Ws",
    },
    {
      id: "30",
      title: "Responsive Website in Node JS",
      link: "https://www.youtube.com/embed/6sdG3WTFlGc",
    },
    {
      id: "31",
      title: "Template Engines in Node JS",
      link: "https://www.youtube.com/embed/wEqMxTJl-TE",
    },
    {
      id: "32",
      title: "Customizing Views in Express JS",
      link: "https://www.youtube.com/embed/IoBZLqm7C-Q",
    },
    {
      id: "33",
      title: "Using Partials in Express JS",
      link: "https://www.youtube.com/embed/vPFVwMSeKZM",
    },
    {
      id: "34",
      title: "Add 404 Error Page in Express JS",
      link: "https://www.youtube.com/embed/2SGwGrN0W1I",
    },
    {
      id: "35",
      title: "Responsive Express Website",
      link: "https://www.youtube.com/embed/_mi7bR28wSw",
    },
    {
      id: "36",
      title: "Express JS API Practice Set 1",
      link: "https://www.youtube.com/embed/F4Csxpqn0Ko",
    },
    {
      id: "37",
      title: "Web Dev Course Project",
      link: "https://www.youtube.com/embed/DiVxOfUEbfk",
    },
    {
      id: "38",
      title: "Git SSH Setup",
      link: "https://www.youtube.com/embed/AGDrk3bfKjg",
    },
    {
      id: "39",
      title: "Share Codes of Node Projects",
      link: "https://www.youtube.com/embed/9t45rQwJ37Y",
    },
    {
      id: "40",
      title: "Host Websites For Free on HEROKU",
      link: "https://www.youtube.com/embed/ncHGkYmIBRE",
    },
    {
      id: "41",
      title: "MongoDB Intro",
      link: "https://www.youtube.com/embed/XeDM28c5kO4",
    },
    {
      id: "42",
      title: "MongoDB Installation",
      link: "https://www.youtube.com/embed/yiz5bmLVVhs",
    },
    {
      id: "43",
      title: "Create DB in MongoDB",
      link: "https://www.youtube.com/embed/0rUL454t9WI",
    },
    {
      id: "44",
      title: "MongoDB CRUD Create Documents",
      link: "https://www.youtube.com/embed/vQMjjZa102U",
    },
    {
      id: "45",
      title: "MongoDB CRUD Read Documents",
      link: "https://www.youtube.com/embed/eOJeZ4CllNI",
    },
    {
      id: "46",
      title: "MongoDB Update Documents",
      link: "https://www.youtube.com/embed/9MiuZHPgP0E",
    },
    {
      id: "47",
      title: "MongoDB  Delete Documents",
      link: "https://www.youtube.com/embed/WG3f0WiVizY",
    },
    {
      id: "48",
      title: "Install MongoDB GUI Compass",
      link: "https://www.youtube.com/embed/88346ndtMOo",
    },
    {
      id: "49",
      title: "MongoDB CRUD in 1 Minute",
      link: "https://www.youtube.com/embed/sER4t-w9C-w",
    },
    {
      id: "50",
      title: "Mongoose Intro",
      link: "https://www.youtube.com/embed/3UT9O0BU_38",
    },
    {
      id: "51",
      title: "Insert Document using Express",
      link: "https://www.youtube.com/embed/UeE0o2_WQIc",
    },
    {
      id: "52",
      title: "Mongoose Schema and Models",
      link: "https://www.youtube.com/embed/VNMSkyLudVg",
    },
    {
      id: "53",
      title: "Insert Documents in Mongoose",
      link: "https://www.youtube.com/embed/361D7y0lSoM",
    },
    {
      id: "54",
      title: "Read Documents in Mongoose",
      link: "https://www.youtube.com/embed/cLkf_ypQOTE",
    },
    {
      id: "55",
      title: "MongoDB Query Operators",
      link: "https://www.youtube.com/embed/mmhaxXtj1uk",
    },
    {
      id: "56",
      title: "MongoDB Logical Operator",
      link: "https://www.youtube.com/embed/YTm0ZYCkO48",
    },
    {
      id: "57",
      title: "MongoDB Sorting and Count",
      link: "https://www.youtube.com/embed/jnzqh6jz-tM",
    },
    {
      id: "58",
      title: "MongoDB Update in Mongoose",
      link: "https://www.youtube.com/embed/aq37bRZjII8",
    },
    {
      id: "59",
      title: "MongoDB Delete in Mongoose",
      link: "https://www.youtube.com/embed/8Wnsej93ACE",
    },
    {
      id: "60",
      title: "Mongoose Validation in MongoDB",
      link: "https://www.youtube.com/embed/SorjuKKAMmI",
    },
    {
      id: "61",
      title: "Custom Validation in MongoDB",
      link: "https://www.youtube.com/embed/1t1WO0zCymE",
    },
    {
      id: "62",
      title: "NPM Validator Package in NodeJS",
      link: "https://www.youtube.com/embed/hgZciHNRibw",
    },
    {
      id: "63",
      title: "REST API POSTMAN Tutorial",
      link: "https://www.youtube.com/embed/KglJP8QMwmk",
    },
    {
      id: "64",
      title: "REST API Intro",
      link: "https://www.youtube.com/embed/ALrOcDPimWE",
    },
    {
      id: "65",
      title: "Create RESTFul API ",
      link: "https://www.youtube.com/embed/1MTBuP1nfLg",
    },
    {
      id: "66",
      title: "Build REST API Async-Await",
      link: "https://www.youtube.com/embed/OOVRZzg2fgo",
    },
    {
      id: "67",
      title: "Build RESTFul API ",
      link: "https://www.youtube.com/embed/ZU_WNVpmM5Y",
    },
    {
      id: "68",
      title: "Build RESTFul API",
      link: "https://www.youtube.com/embed/AYyihiBevQ8",
    },
    {
      id: "69",
      title: "Build Handling PUT/PATCH Request",
      link: "https://www.youtube.com/embed/sY1J76lj05M",
    },
    {
      id: "70",
      title: "Adding Express Router",
      link: "https://www.youtube.com/embed/URUwGA75QaE",
    },
    {
      id: "71",
      title: "Build Complete RESTful API",
      link: "https://www.youtube.com/embed/f4oPDjYMdF4",
    },
    {
      id: "72",
      title: "Registration Form ",
      link: "https://www.youtube.com/embed/XZiFBlfluZk",
    },
    {
      id: "73",
      title: "Signin Form ",
      link: "https://www.youtube.com/embed/gX5vsKUO7QE",
    },
    {
      id: "74",
      title:
        "Encryption vs Hashing",
      link: "https://www.youtube.com/embed/8imz7zRHkSM",
    },
    {
      id: "75",
      title:
        "Secure Registration System ",
      link: "https://www.youtube.com/embed/ggQhhE22N14",
    },
    {
      id: "76",
      title:
        "Complete Login Validation ",
      link: "https://www.youtube.com/embed/DdsLXh-z_uc",
    },
    {
      id: "77",
      title:
        "Node JS Authentication & Cookies",
      link: "https://www.youtube.com/embed/OV8nPN4ym24",
    },
    {
      id: "78",
      title:
        "Registration Form ",
      link: "https://www.youtube.com/embed/XeXGH5Y1YFo",
    },
    {
      id: "79",
      title:
        "Login Form Signing In User",
      link: "https://www.youtube.com/embed/AkL3-GHyuho",
    },
    {
      id: "80",
      title:
        "Manage Secrets & Configs using ",
      link: "https://www.youtube.com/embed/zoqW6qSjSfI",
    },
    {
      id: "81",
      title:
        "Secure JWT Authentication ",
      link: "https://www.youtube.com/embed/VBBJ-1QLZwY",
    },
    {
      id: "82",
      title:
        "NodeJS MongoDB Challenge ",
      link: "https://www.youtube.com/embed/HYAInM89WWY",
    },
    {
      id: "83",
      title:
        "How to Get Cookie Value ",
      link: "https://www.youtube.com/embed/0g1NQiln2XE",
    },
    {
      id: "84",
      title:
        "Complete User Authentication",
      link: "https://www.youtube.com/embed/jJVwNdeS4Ms",
    },
    {
      id: "85",
      title:
        "Logout User & Delete Cookie",
      link: "https://www.youtube.com/embed/Z0MnltqC8T8",
    },
    {
      id: "86",
      title:
        "Sign Out User from all Devices",
      link: "https://www.youtube.com/embed/whHpTvtMcss",
    },
    {
      id: "87",
      title:
        "Complete Responsive ",
      link: "https://www.youtube.com/embed/aHEYzt8stHg",
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
          Technical Thapa
        </span>{" "}
        Nodejs Course{" "}
      </h1>

      <div className="flex">
        <div className="w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="Nodejs Technical Thapa"
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

export default NodeTechnicalThapa;

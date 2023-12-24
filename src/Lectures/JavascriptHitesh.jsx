import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const JavascriptHitesh = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Javascript for Beginners",
      link: "https://www.youtube.com/embed/Hr5iLG7sUa0",
    },
    {
      id: 2,
      title: "Setting up Environment ",
      link: "https://www.youtube.com/embed/cvoLc3deAdQ",
    },
    {
      id: 3,
      title: "Save and Work on Github",
      link: "https://www.youtube.com/embed/-GoKoR6aLcY",
    },
    {
      id: 4,
      title: "Let, const, and var Story ",
      link: "https://www.youtube.com/embed/yY0bKZNYmJs",
    },
    {
      id: 5,
      title: "Datatypes and ECMA Standards",
      link: "https://www.youtube.com/embed/-9knnv97wSc",
    },
    {
      id: 6,
      title: "Datatype Conversion Confusion",
      link: "https://www.youtube.com/embed/X7hDBhd_L5U",
    },
    {
      id: 7,
      title: "Why String to Number Conversion ",
      link: "https://www.youtube.com/embed/N9el4APFtAo",
    },
    {
      id: 8,
      title: "Comparison of Datatypes",
      link: "https://www.youtube.com/embed/giP2uXMlv4c",
    },
    {
      id: 9,
      title: "Data Types of Javascript Summary",
      link: "https://www.youtube.com/embed/suMvZWjjKbo",
    },
    {
      id: 10,
      title: "Stack and Heap Memory ",
      link: "https://www.youtube.com/embed/7gwc-1czolw",
    },
    {
      id: 11,
      title: "Strings in Javascript",
      link: "https://www.youtube.com/embed/fozwNnFunlo",
    },
    {
      id: 12,
      title: "Number and Maths ",
      link: "https://www.youtube.com/embed/_KqpeDc47Ro",
    },
    {
      id: 13,
      title: "Date and Time in Depth ",
      link: "https://www.youtube.com/embed/tGLCuoumaGY",
    },
    {
      id: 14,
      title: "Array in Javascript",
      link: "https://www.youtube.com/embed/cejBux2gtEE",
    },
    {
      id: 15,
      title: "Array Part 2 in Javascript",
      link: "https://www.youtube.com/embed/m6azhgyCi-k",
    },
    {
      id: 16,
      title: "Objects in Depth in Javascript",
      link: "https://www.youtube.com/embed/vVYOHmqQDCU",
    },
    {
      id: 17,
      title: "Objects in Javascript Part 2 ",
      link: "https://www.youtube.com/embed/4lb2pXWWXJI",
    },
    {
      id: 18,
      title: "Object De-structure and JSON API ",
      link: "https://www.youtube.com/embed/AViTh83k-IE",
    },
    {
      id: 19,
      title: "Functions and Parameter ",
      link: "https://www.youtube.com/embed/Bn56WahG_t0",
    },
    {
      id: 20,
      title: "Functions with Objects and Array ",
      link: "https://www.youtube.com/embed/t7ZHPhgdA4U",
    },
    {
      id: 21,
      title: "Global and Local Scope ",
      link: "https://www.youtube.com/embed/cHHU0jXfjKY",
    },
    {
      id: 22,
      title: "Scope Level and Mini Hoisting ",
      link: "https://www.youtube.com/embed/eWwge2YpHhc",
    },
    {
      id: 23,
      title: "THIS and Arrow Function ",
      link: "https://www.youtube.com/embed/9ksqBa8_txM",
    },
    {
      id: 24,
      title: "Immediately Invoked Function  IIFE",
      link: "https://www.youtube.com/embed/GAIbn16Iytc",
    },
    {
      id: 25,
      title: "How Does Javascript Execute Code",
      link: "https://www.youtube.com/embed/ByhtOgF6uYM",
    },
    {
      id: 26,
      title: "Control Flow in Javascript",
      link: "https://www.youtube.com/embed/0P_YvC6Gg0c",
    },
    {
      id: 27,
      title: "For Loop with Break and Continue",
      link: "https://www.youtube.com/embed/Y1cpFsXrEgY",
    },
    {
      id: 28,
      title: "While and Do While Loop ",
      link: "https://www.youtube.com/embed/w3Q55-l47P0",
    },
    {
      id: 29,
      title: "High Order Array Loops",
      link: "https://www.youtube.com/embed/M0YImBHQsWU",
    },
    {
      id: 30,
      title: "Filter Map and Reduce ",
      link: "https://www.youtube.com/embed/9MfwYoWKKVE",
    },
    {
      id: 31,
      title: "DOM Introduction in Javascript",
      link: "https://www.youtube.com/embed/DcjNkHtDj8A",
    },
    {
      id: 32,
      title: "All DOM Selectors NodeList ",
      link: "https://www.youtube.com/embed/Ab6K57WjWTE",
    },
    {
      id: 33,
      title: "Create a New Element in DOM",
      link: "https://www.youtube.com/embed/xAvTgCsCHLs",
    },
    {
      id: 34,
      title: "Edit and Remove Elements in DOM",
      link: "https://www.youtube.com/embed/VQlY-X_eeTE",
    },
    {
      id: 35,
      title: "Let's Build 4 Javascript Projects ",
      link: "https://www.youtube.com/embed/EGqHVjU-fas",
    },
    {
      id: 36,
      title: "Events in Javascript",
      link: "https://www.youtube.com/embed/_ALUMTa8BAE",
    },
    {
      id: 37,
      title: "Async Javascript Fundamentals",
      link: "https://www.youtube.com/embed/zgt5oTD3rRc",
    },
    {
      id: 38,
      title: "2 Projects with Async JS",
      link: "https://www.youtube.com/embed/efrW5-IYoCU",
    },
    {
      id: 39,
      title: "API Request and V8 Engine",
      link: "https://www.youtube.com/embed/pDPAcYdSse8",
    },
    {
      id: 40,
      title: "Promise in Javascript",
      link: "https://www.youtube.com/embed/NJwRQgsu1Q8",
    },
    {
      id: 41,
      title: "Now You Know Fetch ",
      link: "https://www.youtube.com/embed/Rive84an6Lc",
    },
    {
      id: 42,
      title: "Object Oriented in Javascript",
      link: "https://www.youtube.com/embed/pN-Qmv4zBcI",
    },
    {
      id: 43,
      title: "Magic of Prototype in Javascript",
      link: "https://www.youtube.com/embed/uMI5cNeHTOc",
    },
    {
      id: 44,
      title: "Call and This in Javascript",
      link: "https://www.youtube.com/embed/-owpuf4lbyU",
    },
    {
      id: 45,
      title: "Class Constructor and Static",
      link: "https://www.youtube.com/embed/u6mVHkMpoMk",
    },
    {
      id: 46,
      title: "Bind in Javascript",
      link: "https://www.youtube.com/embed/75dMiOY_4ac",
    },
    {
      id: 47,
      title: "Now You Know Objects",
      link: "https://www.youtube.com/embed/jss2rL9kv6s",
    },
    {
      id: 48,
      title: "Getter Setter and Stack Overflow",
      link: "https://www.youtube.com/embed/t6vLhF-iSxQ",
    },
    {
      id: 49,
      title: "Lexical Scoping and Closure",
      link: "https://www.youtube.com/embed/VaH09NXQZ58",
    },
    {
      id: 50,
      title: "Javascript Ends with a Story",
      link: "https://www.youtube.com/embed/z9PINyinqwo",
    },
    {
      id: 51,
      title:
        "You Don't Know Array in Javascript",
      link: "https://www.youtube.com/embed/ZRS485LxX0s",
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
          Hitesh Choudhary
        </span>{" "}
        JavaScript Course{" "}
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

export default JavascriptHitesh;

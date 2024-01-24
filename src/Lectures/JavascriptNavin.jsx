import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const JavascriptNavin = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "JavaScript Tutorial Introduction",
      link: "https://www.youtube.com/embed/PlbupGCBV6w",
    },
    {
      id: 2,
      title: "Getting Started ",
      link: "https://www.youtube.com/embed/POPLF-Qc0OU",
    },
    {
      id: 3,
      title: "NodeJS, VS Code Installation",
      link: "https://www.youtube.com/embed/BxZKLKfjaRg",
    },
    {
      id: 4,
      title: "Variables in JavaScript",
      link: "https://www.youtube.com/embed/TOkU5HxES1o",
    },
    {
      id: 5,
      title: "Constants in JavaScript",
      link: "https://www.youtube.com/embed/Wsy7nhFnfbM",
    },
    {
      id: 6,
      title: "Java Spring Course Launch",
      link: "https://www.youtube.com/embed/o70uVU1NvE8",
    },
    {
      id: 7,
      title: "Data Types in JavaScript - 1",
      link: "https://www.youtube.com/embed/nCwQY8inRvU",
    },
    {
      id: 8,
      title: "Data Types in JavaScript - 2",
      link: "https://www.youtube.com/embed/4GXpB9EMLWM",
    },
    {
      id: 9,
      title: "History of JavaScript",
      link: "https://www.youtube.com/embed/4MsfBokJiSs",
    },
    {
      id: 10,
      title: "Type Conversion & Coercion",
      link: "https://www.youtube.com/embed/wFiVtqe1osM",
    },
    {
      id: 11,
      title: "Arithmetic Operators in JavaScript",
      link: "https://www.youtube.com/embed/otYwi_wW9Hk",
    },
    {
      id: 12,
      title: "Relational Operators in JavaScript",
      link: "https://www.youtube.com/embed/gG0ynX_Sfx4",
    },
    {
      id: 13,
      title: "Logical Operators in JavaScript",
      link: "https://www.youtube.com/embed/uuRJ1aCj8Ro",
    },
    {
      id: 14,
      title: "Conditional Statements If Else ",
      link: "https://www.youtube.com/embed/o_iO9WuoWaM",
    },
    {
      id: 15,
      title: "Ternary Operator in JavaScript",
      link: "https://www.youtube.com/embed/VBCOx4CqBz0",
    },
    {
      id: 16,
      title: "Switch Statement in JavaScript",
      link: "https://www.youtube.com/embed/SJPsOFfvEQA",
    },
    {
      id: 17,
      title: "Template Literal in JavaScript",
      link: "https://www.youtube.com/embed/K4Kh5gw4PRE",
    },
    {
      id: 18,
      title: "While Loop in JavaScript",
      link: "https://www.youtube.com/embed/h84MlHv6g4Q",
    },
    {
      id: 19,
      title: "For Loop in JavaScript",
      link: "https://www.youtube.com/embed/jcwTB9fBzP0",
    },
    {
      id: 20,
      title: "While vs For Loop | When to Use",
      link: "https://www.youtube.com/embed/EBHOo-6xn4A",
    },
    {
      id: 21,
      title: "Objects in JavaScript",
      link: "https://www.youtube.com/embed/S1dWe3f2zm0",
    },
    {
      id: 22,
      title: "Complex Object, Delete Property ",
      link: "https://www.youtube.com/embed/weEDSjNYzv4",
    },
    {
      id: 23,
      title: "For In Loop in JavaScript",
      link: "https://www.youtube.com/embed/-PVcUUj_ke4",
    },
    {
      id: 24,
      title: "Functions in JavaScript",
      link: "https://www.youtube.com/embed/jwOW-qlJtxg",
    },
    {
      id: 25,
      title: "Function Return and Passing",
      link: "https://www.youtube.com/embed/pCU7vicLCgA",
    },
    {
      id: 26,
      title: "Function Expression in JavaScript",
      link: "https://www.youtube.com/embed/37ly8tCGFWA",
    },
    {
      id: 27,
      title: "Local-Global Variable",
      link: "https://www.youtube.com/embed/nnAU1dLY7gY",
    },
    {
      id: 28,
      title: "Arrow Function in JavaScript",
      link: "https://www.youtube.com/embed/tJOJPealurs",
    },
    {
      id: 29,
      title: "What are Methods in JavaScript?",
      link: "https://www.youtube.com/embed/4r72b1ScPLY",
    },
    {
      id: 30,
      title: "What is This? | JavaScript",
      link: "https://www.youtube.com/embed/kE93zNJBCBw",
    },
    {
      id: 31,
      title: "Why it is Called THIS?",
      link: "https://www.youtube.com/embed/YiqqAAvb16Q",
    },
    {
      id: 32,
      title: "Constructor Function",
      link: "https://www.youtube.com/embed/tV7ZqcB9J3Y",
    },
    {
      id: 33,
      title: "Creating Array and Fetching ",
      link: "https://www.youtube.com/embed/TScHu-37Cqw",
    },
    {
      id: 34,
      title: "Different Types of Data in Array",
      link: "https://www.youtube.com/embed/eADCg1R5_sk",
    },
    {
      id: 35,
      title: "Array Methods",
      link: "https://www.youtube.com/embed/Yv1h-QKt_KQ",
    },
    {
      id: 36,
      title: "For of Loop with an Array ",
      link: "https://www.youtube.com/embed/c69Y2GpF6-U",
    },
    {
      id: 37,
      title: "Array Destructuring ",
      link: "https://www.youtube.com/embed/giNjEgYTd9E",
    },
    {
      id: 38,
      title: "Array forEach Method",
      link: "https://www.youtube.com/embed/hP0Rl5euD_o",
    },
    {
      id: 39,
      title: "Array Method filter map reduce",
      link: "https://www.youtube.com/embed/oQ7Le6SuLNA",
    },
    {
      id: 40,
      title: "Set in JavaScript",
      link: "https://www.youtube.com/embed/YiIKUhtqeRM",
    },
    {
      id: 41,
      title: "Map in Javascript",
      link: "https://www.youtube.com/embed/flveJ5_-iFA",
    },
    {
      id: 42,
      title: "What is Recursion?",
      link: "https://www.youtube.com/embed/8NZZSgtTelc",
    },
    {
      id: 43,
      title: "Factorial using Recursion ",
      link: "https://www.youtube.com/embed/rDjSD1vcsRI",
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
          Navin Reddy
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

export default JavascriptNavin;

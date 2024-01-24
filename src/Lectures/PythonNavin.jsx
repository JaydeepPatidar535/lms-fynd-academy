import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const PythonNavin = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Python Beginners Tutorial",
      link: "https://www.youtube.com/embed/QXeEoD0pB3E",
    },
    {
      id: 2,
      title: "Python Introduction",
      link: "https://www.youtube.com/embed/hEgO047GxaQ",
    },
    {
      id: 3,
      title: "Python Installation",
      link: "https://www.youtube.com/embed/mbryl4MZJms",
    },
    {
      id: 4,
      title: "Getting Started with Python",
      link: "https://www.youtube.com/embed/DWgzHbglNIo",
    },
    {
      id: 5,
      title: "Variables in Python",
      link: "https://www.youtube.com/embed/TqPzwenhMj0",
    },
    {
      id: 6,
      title: "List in Python",
      link: "https://www.youtube.com/embed/Eaz5e6M8tL4",
    },
    {
      id: 7,
      title: "Tuple Set in Python",
      link: "https://www.youtube.com/embed/Mf7eFtbVxFM",
    },
    {
      id: 8,
      title: "Python Set Path",
      link: "https://www.youtube.com/embed/4V14G5_CNGg",
    },
    {
      id: 9,
      title: "Python Editor Sublime Text",
      link: "https://www.youtube.com/embed/1U8TI16AR4s",
    },
    {
      id: 10,
      title: "More on Variables",
      link: "https://www.youtube.com/embed/_OZIAHg5i7M",
    },
    {
      id: 11,
      title: "Data Types in Python",
      link: "https://www.youtube.com/embed/gCCVsvgR2KU",
    },
    {
      id: 12,
      title: "Operators in Python",
      link: "https://www.youtube.com/embed/v5MR5JnKcZI",
    },
    {
      id: 13,
      title: "Number System Conversion",
      link: "https://www.youtube.com/embed/AWAjbtWBzGs",
    },
    {
      id: 14,
      title: "Swap 2 Variables",
      link: "https://www.youtube.com/embed/3dpJrMtxYeo",
    },
    {
      id: 15,
      title: "IDLE Previous Command",
      link: "https://www.youtube.com/embed/UAMMEmga0WI",
    },
    {
      id: 16,
      title: "Python Bitwise Operators",
      link: "https://www.youtube.com/embed/PyfKCvHALj8",
    },
    {
      id: 17,
      title: "Import Math Functions",
      link: "https://www.youtube.com/embed/EkYrfV7M1ks",
    },
    {
      id: 18,
      title: "Working with PyCharm",
      link: "https://www.youtube.com/embed/akcEaEH91gI",
    },
    {
      id: 19,
      title: "User input in Python",
      link: "https://www.youtube.com/embed/4OX49nLNPEE",
    },
    {
      id: 20,
      title: "If Elif Else Statement",
      link: "https://www.youtube.com/embed/PqFKRqpHrjw",
    },
    {
      id: 21,
      title: "While Loop in Python",
      link: "https://www.youtube.com/embed/HZARImviDxg",
    },
    {
      id: 22,
      title: "For Loop in Python",
      link: "https://www.youtube.com/embed/0ZvaDa8eT5s",
    },
    {
      id: 23,
      title: "Break Continue Pass",
      link: "https://www.youtube.com/embed/yCZBnjF4_tU",
    },
    {
      id: 24,
      title: "Break vs Continue vs Pass",
      link: "https://www.youtube.com/embed/JCRpVwtVL4I",
    },
    {
      id: 25,
      title: "Printing Patterns",
      link: "https://www.youtube.com/embed/k8SXsT5TLxQ",
    },
    {
      id: 26,
      title: "Array in Python",
      link: "https://www.youtube.com/embed/6a39OjkCN5I",
    },
    {
      id: 27,
      title: "Array values from User",
      link: "https://www.youtube.com/embed/9c9qhIcB3NA",
    },
    {
      id: 28,
      title: "Why Numpy? Installing Numpy",
      link: "https://www.youtube.com/embed/8LlXhtfNZEQ",
    },
    {
      id: 29,
      title: "Numpy Array Creation",
      link: "https://www.youtube.com/embed/NYPKbmE0H6E",
    },
    {
      id: 30,
      title: "Copy Array in Python",
      link: "https://www.youtube.com/embed/8sF85TyunQA",
    },
    {
      id: 31,
      title: "Matrix in Python",
      link: "https://www.youtube.com/embed/Blzp9iuhZqo",
    },
    {
      id: 32,
      title: "Functions in Python",
      link: "https://www.youtube.com/embed/BVfCWuca9nw",
    },
    {
      id: 33,
      title: "Function Arguments",
      link: "https://www.youtube.com/embed/ijXMGpoMkhQ",
    },
    {
      id: 34,
      title: "Types of Arguments",
      link: "https://www.youtube.com/embed/eci9iU_s6Ag",
    },
    {
      id: 35,
      title: "Keyworded Arguments in Python",
      link: "https://www.youtube.com/embed/kB829ciAXo4",
    },
    {
      id: 36,
      title: "Global Keyword in Python",
      link: "https://www.youtube.com/embed/QYUbLevwgDQ",
    },
    {
      id: 37,
      title: "Pass List to Function",
      link: "https://www.youtube.com/embed/fsAzeNZXvkE",
    },
    {
      id: 39,
      title: "Factorial in Python",
      link: "https://www.youtube.com/embed/gfhtaP5Wq7M",
    },
    {
      id: 40,
      title: "Recursion in Python",
      link: "https://www.youtube.com/embed/XkL3SUioNvo",
    },
    {
      id: 41,
      title: "Factorial with Recursion",
      link: "https://www.youtube.com/embed/TqqQld6m6A0",
    },
    {
      id: 42,
      title: "Anonymous Functions (Lambda)",
      link: "https://www.youtube.com/embed/hYzwCsKGRrg",
    },
    {
      id: 43,
      title: "Filter Map Reduce",
      link: "https://www.youtube.com/embed/kj850Y8y8FI",
    },
    {
      id: 44,
      title: "Decorators in Python",
      link: "https://www.youtube.com/embed/yNzxXZfkLUA?si=EazrMSvhlQS7BZjf",
    },
    {
      id: 45,
      title: "Modules in Python",
      link: "https://www.youtube.com/embed/1RuMJ53CKds",
    },
    {
      id: 46,
      title: "Special Variable __name__",
      link: "https://www.youtube.com/embed/pzNISmtmzcY",
    },
    {
      id: 47,
      title: "Special Variable __name__ (Part 2)",
      link: "https://www.youtube.com/embed/7hjgRn-vfVQ",
    },
    {
      id: 48,
      title: "OOP Introduction",
      link: "https://www.youtube.com/embed/gZwPdqC2Os0",
    },
    {
      id: 49,
      title: "Class and Object",
      link: "https://www.youtube.com/embed/8O5kX73OkIY",
    },
    {
      id: 50,
      title: "__init__ Method",
      link: "https://www.youtube.com/embed/WIP3-woodlU",
    },
    {
      id: 51,
      title: "Constructor, Self, Comparing",
      link: "https://www.youtube.com/embed/ic6wdPxcHc0",
    },
    {
      id: 52,
      title: "Types of Variables",
      link: "https://www.youtube.com/embed/RSQjxL5WRNM",
    },
    {
      id: 53,
      title: "Types of Methods",
      link: "https://www.youtube.com/embed/lVfGQOzzRCM",
    },
    {
      id: 54,
      title: "Inner class",
      link: "https://www.youtube.com/embed/b7JzgybKvys",
    },
    {
      id: 55,
      title: "Inheritance in Python",
      link: "https://www.youtube.com/embed/Cn7AkDb4pIU",
    },
    {
      id: 56,
      title: "Constructor in Inheritance",
      link: "https://www.youtube.com/embed/6P-P879BcHQ",
    },
    {
      id: 57,
      title: "Intro to Polymorphism",
      link: "https://www.youtube.com/embed/P1vH3Pfw6BI",
    },
    {
      id: 58,
      title: "Duck Typing",
      link: "https://www.youtube.com/embed/CuK0g8OFzwo",
    },
    {
      id: 59,
      title: "Operator Overloading ",
      link: "https://www.youtube.com/embed/9wd50TKv_OQ",
    },
    {
      id: 60,
      title: "Method Overloading, Overriding",
      link: "https://www.youtube.com/embed/CcTzTuIsoFk",
    },
    {
      id: 63,
      title: "Exception Handling",
      link: "https://www.youtube.com/embed/6SPDvPK38tw",
    },
    {
      id: 64,
      title: "MultiThreading",
      link: "https://www.youtube.com/embed/GqHLztqy0PU",
    },
    {
      id: 65,
      title: "File Handling in Python",
      link: "https://www.youtube.com/embed/aequTxAvQq4",
    },
    {
      id: 66,
      title: "Comments in Python",
      link: "https://www.youtube.com/embed/ECxZtt6n90E",
    },
    {
      id: 67,
      title: "Python Compiled or Interpreted",
      link: "https://www.youtube.com/embed/0BhSWyDEDC4",
    },
    {
      id: 68,
      title: "Linear Search in Python",
      link: "https://www.youtube.com/embed/UldZOLylez4",
    },
    {
      id: 69,
      title: "Binary Search in Python",
      link: "https://www.youtube.com/embed/DE-ye0t0oxE",
    },
    {
      id: 70,
      title: "Bubble Sort in Python",
      link: "https://www.youtube.com/embed/Vca808JTbI8",
    },
    {
      id: 71,
      title: "Selection Sort in Python",
      link: "https://www.youtube.com/embed/5KjapFQNxUo",
    },
    {
      id: 72,
      title: "MySQL Workbench Setup",
      link: "https://www.youtube.com/embed/WDEyt2VHpj4",
    },
    {
      id: 73,
      title: "Python Database Connection",
      link: "https://www.youtube.com/embed/vR5utJvN4JY",
    },
    {
      id: 74,
      title: "Python Git PyCharm GitHub",
      link: "https://www.youtube.com/embed/UBLONzkmReE",
    },
    {
      id: 75,
      title: "Python GitHub Code Contribution",
      link: "https://www.youtube.com/embed/udO6gSLXujU",
    },
    {
      id: 76,
      title: "Anaconda Setup",
      link: "https://www.youtube.com/embed/kU_ZtZhmmEU",
    },
    {
      id: 77,
      title: "Jupyter Notebook Setup",
      link: "https://www.youtube.com/embed/5NU6w5VhmMc",
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
        Python Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="python"
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
export default PythonNavin;

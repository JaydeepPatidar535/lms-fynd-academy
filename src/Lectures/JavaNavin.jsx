import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const JavaNavin = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Java Intro",
      link: "https://www.youtube.com/embed/bm0OyhwFDuY",
    },
    {
      id: 2,
      title: "JDK Setup",
      link: "https://www.youtube.com/embed/WRISYpKhIrc",
    },
    {
      id: 3,
      title: "First Code",
      link: "https://www.youtube.com/embed/tSqNBjGacYk",
    },
    {
      id: 4,
      title: "How Java Works",
      link: "https://www.youtube.com/embed/NHrsLjhjmi4",
    },
    {
      id: 5,
      title: "Java Variables",
      link: "https://www.youtube.com/embed/9RCuKrze_-k",
    },
    {
      id: 6,
      title: "Data types",
      link: "https://www.youtube.com/embed/Le25I331_yU",
    },
    {
      id: 7,
      title: "Literal in Java",
      link: "https://www.youtube.com/embed/iZXLCM5bzRI",
    },
    {
      id: 8,
      title: "Type Conversion",
      link: "https://www.youtube.com/embed/CPk8pffKV64",
    },
    {
      id: 9,
      title: "Assignment Operators",
      link: "https://www.youtube.com/embed/flWjzwzgybI",
    },
    {
      id: 10,
      title: "Relational Operators",
      link: "https://www.youtube.com/embed/TEJpeRI_NEo",
    },
    {
      id: 11,
      title: "Logical Operators",
      link: "https://www.youtube.com/embed/hLimYJZQ2kc",
    },
    {
      id: 12,
      title: "If else",
      link: "https://www.youtube.com/embed/74Q7POjS7mQ",
    },
    {
      id: 13,
      title: "If Else If",
      link: "https://www.youtube.com/embed/Tn6BNLD0PmU",
    },
    {
      id: 14,
      title: "Ternary Operator",
      link: "https://www.youtube.com/embed/kBdZBbWZ2a4",
    },
    {
      id: 15,
      title: "Switch Statement",
      link: "https://www.youtube.com/embed/IrQKDdptiw8",
    },
    {
      id: 16,
      title: "For Loop",
      link: "https://www.youtube.com/embed/mh3sTmXWMLE",
    },
    {
      id: 17,
      title: "While Loop",
      link: "https://www.youtube.com/embed/mzt5tmV7wxI",
    },
    {
      id: 18,
      title: "Do While Loop",
      link: "https://www.youtube.com/embed/zzBVTwpfYr0",
    },
    {
      id: 19,
      title: "For Loop in Java",
      link: "https://www.youtube.com/embed/gu6Agiy2xBg",
    },
    {
      id: 20,
      title: "Which Loop To Use",
      link: "https://www.youtube.com/embed/uO5nSTJ9Iz4",
    },
    {
      id: 21,
      title: "Class And Object",
      link: "https://www.youtube.com/embed/Znmz_WxMxp4",
    },
    {
      id: 22,
      title: "Class and Object Practical",
      link: "https://www.youtube.com/embed/3yOLNV9BF8A",
    },
    {
      id: 23,
      title: "JDK JRE JVM",
      link: "https://www.youtube.com/embed/s7UgQ7_1KQY",
    },
    {
      id: 24,
      title: "Methods in Java",
      link: "https://www.youtube.com/embed/KSS3MUbBWLk",
    },
    {
      id: 25,
      title: "Method Overloading",
      link: "https://www.youtube.com/embed/KpwBVAYbPDA",
    },
    {
      id: 26,
      title: "Stack And Heap",
      link: "https://www.youtube.com/embed/_GK3WoFFKUE",
    },
    {
      id: 27,
      title: "Need of an Array",
      link: "https://www.youtube.com/embed/uidBSlGLUK4",
    },
    {
      id: 28,
      title: "Creation of Array",
      link: "https://www.youtube.com/embed/239ubH043lI",
    },
    {
      id: 29,
      title: "Multi Dimensional Array",
      link: "https://www.youtube.com/embed/v4J2bEQF6jk",
    },
    {
      id: 30,
      title: "Jagged and 3D Array",
      link: "https://www.youtube.com/embed/IPBK2VdSNX0",
    },
    {
      id: 31,
      title: "Drawbacks of Array",
      link: "https://www.youtube.com/embed/82z4XJx6y3M",
    },
    {
      id: 32,
      title: "Array of Objects",
      link: "https://www.youtube.com/embed/2j64wdFNWyE",
    },
    {
      id: 33,
      title: "Enhanced for Loop",
      link: "https://www.youtube.com/embed/KcJX6XGmB-o",
    },
    {
      id: 34,
      title: "What is String",
      link: "https://www.youtube.com/embed/cV-sOpOgof8",
    },
    {
      id: 35,
      title: "Mutable vs Immutable String",
      link: "https://www.youtube.com/embed/JjIewPuyexA",
    },
    {
      id: 36,
      title: "StringBuffer and StringBuilder",
      link: "https://www.youtube.com/embed/WQ4aA4-MESE",
    },
    {
      id: 37,
      title: "Static Variable",
      link: "https://www.youtube.com/embed/7HYaQOyvw7Q",
    },
    {
      id: 38,
      title: "Static Method",
      link: "https://www.youtube.com/embed/zySudOTN05I",
    },
    {
      id: 39,
      title: "Static Block",
      link: "https://www.youtube.com/embed/_7q4kMfJPDw",
    },
    {
      id: 40,
      title: "Encapsulation",
      link: "https://www.youtube.com/embed/YbqneqDIZh8",
    },
    {
      id: 41,
      title: "Getters and Setters",
      link: "https://www.youtube.com/embed/VCHq1FEbZ3I",
    },
    {
      id: 42,
      title: "This keyword",
      link: "https://www.youtube.com/embed/k_SJOnVa_G0",
    },
    {
      id: 43,
      title: "Constructor",
      link: "https://www.youtube.com/embed/UC_aqNUFyVI",
    },
    {
      id: 44,
      title: "Default vs Parameterized ",
      link: "https://www.youtube.com/embed/49ptL_q7sxU",
    },
    {
      id: 45,
      title: "This and Super Method",
      link: "https://www.youtube.com/embed/u2oT-qogaFI",
    },
    {
      id: 46,
      title: "Naming Convention",
      link: "https://www.youtube.com/embed/QZ1bsTqxmAw",
    },
    {
      id: 47,
      title: "Anonymous Object",
      link: "https://www.youtube.com/embed/ndTM5I2vtYQ",
    },
    {
      id: 48,
      title: "Need of Inheritance",
      link: "https://www.youtube.com/embed/SVXyBkwYySA",
    },
    {
      id: 49,
      title: "What is Inheritance",
      link: "https://www.youtube.com/embed/dFuVh_Bzy9c",
    },
    {
      id: 50,
      title: "Single and Multilevel inheritance",
      link: "https://www.youtube.com/embed/W91VFTTAM3s",
    },
    {
      id: 51,
      title: "Multiple Inheritance",
      link: "https://www.youtube.com/embed/NTN8lO6yeqw",
    },
    {
      id: 52,
      title: "Method Overriding",
      link: "https://www.youtube.com/embed/CLzgS08equQ",
    },
    {
      id: 53,
      title: "Packages in Java",
      link: "https://www.youtube.com/embed/Bua6LQO2vQ8",
    },
    {
      id: 54,
      title: "Access Modifiers",
      link: "https://www.youtube.com/embed/mlVYooy93sE",
    },
    {
      id: 55,
      title: "Polymorphism",
      link: "https://www.youtube.com/embed/6U-0aUBiO5A",
    },
    {
      id: 56,
      title: "Dynamic Method Dispatch",
      link: "https://www.youtube.com/embed/8C_YRYXCuwc",
    },
    {
      id: 57,
      title: "Final keyword",
      link: "https://www.youtube.com/embed/OBYeDzgsOxc",
    },
    {
      id: 58,
      title: "Object Class equals toString",
      link: "https://www.youtube.com/embed/dCt9sfZV8Sg",
    },
    {
      id: 59,
      title: "Upcasting and Downcasting",
      link: "https://www.youtube.com/embed/Q8cTydJSawQ",
    },
    {
      id: 60,
      title: "Wrapper Class",
      link: "https://www.youtube.com/embed/Fyc86kVIePE",
    },
    {
      id: 61,
      title: "Abstract Keyword",
      link: "https://www.youtube.com/embed/VJh2u7NLLDg",
    },
    {
      id: 62,
      title: "Inner Class",
      link: "https://www.youtube.com/embed/UVOztdkD7WE",
    },
    {
      id: 63,
      title: "Anonymous Inner Class",
      link: "https://www.youtube.com/embed/LNpUj80JLGI",
    },
    {
      id: 64,
      title: "Abstract and Anonymous",
      link: "https://www.youtube.com/embed/4YnGBOyA2Q4",
    },
    {
      id: 65,
      title: "Need of Interface",
      link: "https://www.youtube.com/embed/AG_7wWFBquQ",
    },
    {
      id: 66,
      title: "What is Interface",
      link: "https://www.youtube.com/embed/A1uqgEz3hB0",
    },
    {
      id: 67,
      title: "More on Interfaces",
      link: "https://www.youtube.com/embed/NYuoR06Fyy4",
    },
    {
      id: 68,
      title: "What is Enum",
      link: "https://www.youtube.com/embed/k0iTgTuiEGY",
    },
    {
      id: 69,
      title: "Enum if and Switch",
      link: "https://www.youtube.com/embed/ibSxjGKVU1E",
    },
    {
      id: 70,
      title: "Enum Class",
      link: "https://www.youtube.com/embed/3iyKhywOZeg",
    },
    {
      id: 71,
      title: "What is Annotation",
      link: "https://www.youtube.com/embed/1xuDEPftKV0",
    },
    {
      id: 72,
      title: "Functional Interface New",
      link: "https://www.youtube.com/embed/Gs8ZPKCFlTc",
    },
    {
      id: 73,
      title: "Lambda Expression",
      link: "https://www.youtube.com/embed/aecXHkZ-kJY",
    },
    {
      id: 74,
      title: "Lambda Expression with return",
      link: "https://www.youtube.com/embed/IvXf2pDCr5s",
    },
    {
      id: 75,
      title: "Types of Interface",
      link: "https://www.youtube.com/embed/gTn48ZpeWOs",
    },
    {
      id: 76,
      title: "What is Exception",
      link: "https://www.youtube.com/embed/5r_ERSm7NKE",
    },
    {
      id: 77,
      title: "Exception Handling",
      link: "https://www.youtube.com/embed/osEjmECD8bI",
    },
    {
      id: 78,
      title: "Multiple Catch",
      link: "https://www.youtube.com/embed/Ky8P70QlKNU",
    },
    {
      id: 79,
      title: "Exception Hierarchy",
      link: "https://www.youtube.com/embed/IBttEEFkH_Y",
    },
    {
      id: 80,
      title: "Exception throw keyword",
      link: "https://www.youtube.com/embed/kAOYeVYtukY",
    },
    {
      id: 81,
      title: "Custom Exception",
      link: "https://www.youtube.com/embed/V_jVp6WdW0Y",
    },
    {
      id: 82,
      title: "Exception using throws",
      link: "https://www.youtube.com/embed/y7C2dRC9C44",
    },
    {
      id: 83,
      title: "User Input using BufferedReader",
      link: "https://www.youtube.com/embed/bwHr9G5VIls",
    },
    {
      id: 84,
      title: "try with resources",
      link: "https://www.youtube.com/embed/hVQR0ZHFk-o",
    },
    {
      id: 85,
      title: "Threads",
      link: "https://www.youtube.com/embed/KuvkahVyY9E",
    },
    {
      id: 86,
      title: "Multiple Threads",
      link: "https://www.youtube.com/embed/UfMM924sBvg",
    },
    {
      id: 87,
      title: "Thread Priority and Sleep",
      link: "https://www.youtube.com/embed/yyLy-an_CXY",
    },
    {
      id: 88,
      title: "Runnable vs Thread",
      link: "https://www.youtube.com/embed/Z4KSgLpY0d8",
    },
    {
      id: 89,
      title: "Race Condition",
      link: "https://www.youtube.com/embed/7eV4nib3Cm8",
    },
    {
      id: 90,
      title: "Thread States",
      link: "https://www.youtube.com/embed/IWll7sfz3g0",
    },
    {
      id: 91,
      title: "Collection API",
      link: "https://www.youtube.com/embed/Kn1RbK02YpM",
    },
    {
      id: 92,
      title: "ArrayList",
      link: "https://www.youtube.com/embed/BqQ0qR8kmw8",
    },
    { id: 93, title: "Set", link: "https://www.youtube.com/embed/gMEVx7e5x6A" },
    { id: 94, title: "Map", link: "https://www.youtube.com/embed/VcXYlkICcQU" },
    {
      id: 95,
      title: "Comparator vs Comparable",
      link: "https://www.youtube.com/embed/ZA2oNhtNk3w",
    },
    {
      id: 96,
      title: "Need of Stream API",
      link: "https://www.youtube.com/embed/B-U-ItdMUVw",
    },
    {
      id: 97,
      title: "forEach Method",
      link: "https://www.youtube.com/embed/Z4PIhp5ifcw",
    },
    {
      id: 98,
      title: "Stream API",
      link: "https://www.youtube.com/embed/ak3BxYzSqsQ",
    },
    {
      id: 99,
      title: "Map Filter Reduce Sorted",
      link: "https://www.youtube.com/embed/FH-FmcjEKnc",
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
        Java Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="java"
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

export default JavaNavin;

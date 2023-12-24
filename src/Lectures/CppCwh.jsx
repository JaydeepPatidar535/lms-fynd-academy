import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const CppCwh = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Intro to C++ & Setup",
      link: "https://www.youtube.com/embed/j8nAHeVKL08",
    },
    {
      id: 2,
      title: "C++ Program Structure",
      link: "https://www.youtube.com/embed/oW2r0r_i5Ps",
    },
    {
      id: 3,
      title: "Variables & Comments in C++",
      link: "https://www.youtube.com/embed/jigb6W35zHc",
    },
    {
      id: 4,
      title: "Variable Scope & Data Types",
      link: "https://www.youtube.com/embed/JrnQ-915czY",
    },
    {
      id: 5,
      title: "C++ Basic Input/Output",
      link: "https://www.youtube.com/embed/J05uoTbGOvQ",
    },
    {
      id: 6,
      title: "C++ Header files & Operators",
      link: "https://www.youtube.com/embed/7D5A5ZMKRWw",
    },
    {
      id: 7,
      title: "C++ Reference Variables ",
      link: "https://www.youtube.com/embed/a7Wim2t053E",
    },
    {
      id: 8,
      title: "Constants, Manipulators & Operator",
      link: "https://www.youtube.com/embed/i3a-G6Ebh9E",
    },
    {
      id: 9,
      title: "C++ Control Structures",
      link: "https://www.youtube.com/embed/AY96XFqb934",
    },
    {
      id: 10,
      title: "For, While and do-while loops",
      link: "https://www.youtube.com/embed/a7dfSBrTZtE",
    },
    {
      id: 11,
      title: "Break and Continue Statements",
      link: "https://www.youtube.com/embed/DJh5NfK7h-U",
    },
    {
      id: 12,
      title: "Pointers in C++",
      link: "https://www.youtube.com/embed/EvYmTCx9BFs",
    },
    {
      id: 13,
      title: "Arrays & Pointers Arithmetic ",
      link: "https://www.youtube.com/embed/ePJxpxsnkGw",
    },
    {
      id: 14,
      title: "Structures, Unions & Enums ",
      link: "https://www.youtube.com/embed/jCfR7CFlzts",
    },
    {
      id: 15,
      title: "Functions & Function Prototypes ",
      link: "https://www.youtube.com/embed/RFLFX1boGwo",
    },
    {
      id: 16,
      title: "Call by Value & Call by Reference ",
      link: "https://www.youtube.com/embed/oQbyN-vDghA",
    },
    {
      id: 17,
      title: "Inline Functions, Default ",
      link: "https://www.youtube.com/embed/oVvvwEx-gBw",
    },
    {
      id: 18,
      title: "Recursions & Recursive Functions",
      link: "https://www.youtube.com/embed/JRKs3s15Kjc",
    },
    {
      id: 19,
      title: "Function Overloading",
      link: "https://www.youtube.com/embed/8qZb09suSHY",
    },
    {
      id: 20,
      title: "Object Oriented Programming",
      link: "https://www.youtube.com/embed/nGJTWaaFdjc",
    },
    {
      id: 21,
      title: "Classes, Public and Private access ",
      link: "https://www.youtube.com/embed/tL8vnfFFzVQ",
    },
    {
      id: 22,
      title: "OOPs Recap & Nesting of Member ",
      link: "https://www.youtube.com/embed/d363dW0AeS8",
    },
    {
      id: 23,
      title: "C++ Objects Memory Allocation ",
      link: "https://www.youtube.com/embed/qq05D2yFIHA",
    },
    {
      id: 24,
      title: "Static Data Members & Methods ",
      link: "https://www.youtube.com/embed/QcLI2zGVYFo",
    },
    {
      id: 25,
      title: "Array of Objects & Passing Objects",
      link: "https://www.youtube.com/embed/aKnc1A5NOKo",
    },
    {
      id: 26,
      title: "Friend Functions in C++",
      link: "https://www.youtube.com/embed/HK6gnkQIgqI",
    },
    {
      id: 27,
      title: "Friend Classes & Member Friend ",
      link: "https://www.youtube.com/embed/Tk-4KUoatg8",
    },
    {
      id: 28,
      title: "More on C++ Friend Functions ",
      link: "https://www.youtube.com/embed/GTJTsMR_fro",
    },
    {
      id: 29,
      title: "Constructors In C++",
      link: "https://www.youtube.com/embed/EEJUPXFKe8Q",
    },
    {
      id: 30,
      title: "Parameterized & Default ",
      link: "https://www.youtube.com/embed/CYXIlh5DURI",
    },
    {
      id: 31,
      title: "Constructor Overloading In C++",
      link: "https://www.youtube.com/embed/7BmtA-7r1Fg",
    },
    {
      id: 32,
      title: "Constructors With Default ",
      link: "https://www.youtube.com/embed/Ok-5YqcGl6c",
    },
    {
      id: 33,
      title: "Dynamic Initialization of Objects ",
      link: "https://www.youtube.com/embed/c_9oCs-9fvg",
    },
    {
      id: 34,
      title: "Copy Constructor in C++",
      link: "https://www.youtube.com/embed/jhZjyaNO4Wo",
    },
    {
      id: 35,
      title: "Destructor in C++ in Hindi",
      link: "https://www.youtube.com/embed/rm4tGxWBkqs",
    },
    {
      id: 36,
      title: "Inheritance & Its Different Types ",
      link: "https://www.youtube.com/embed/RO1ZYW9NAzg",
    },
    {
      id: 37,
      title: "Inheritance Syntax & Visibility",
      link: "https://www.youtube.com/embed/Dmrc82dL7E8",
    },
    {
      id: 38,
      title: "Single Inheritance Deep Dive",
      link: "https://www.youtube.com/embed/S1BR0xDdsyM",
    },
    {
      id: 39,
      title: "Protected Access Modifier in C++",
      link: "https://www.youtube.com/embed/uHkIhwUspdI",
    },
    {
      id: 40,
      title: "Multilevel Inheritance Deep Dive ",
      link: "https://www.youtube.com/embed/BLb6-ZgxqHg",
    },
    {
      id: 41,
      title: "Multiple Inheritance Deep Dive ",
      link: "https://www.youtube.com/embed/h3INeRqf2vU",
    },
    {
      id: 42,
      title: "Exercise on C++ Inheritance",
      link: "https://www.youtube.com/embed/SW36UpSdmsM",
    },
    {
      id: 43,
      title: "Ambiguity Resolution Inheritance ",
      link: "https://www.youtube.com/embed/ZqfArYoV9Lg",
    },
    {
      id: 44,
      title: "Virtual Base Class in C++",
      link: "https://www.youtube.com/embed/kzMQpPX7TUY",
    },
    {
      id: 45,
      title: "CExample Demonstrating Virtual ",
      link: "https://www.youtube.com/embed/eYV-TohBaa0",
    },
    {
      id: 46,
      title: "Constructors in Derived Class +",
      link: "https://www.youtube.com/embed/gvOO4H7j_qI",
    },
    {
      id: 47,
      title: "Exercise on Cpp Inheritance",
      link: "https://www.youtube.com/embed/eGhDSjWGXQc",
    },
    {
      id: 48,
      title: "Code Example: Constructors ",
      link: "https://www.youtube.com/embed/qHrnTf5DOeI",
    },
    {
      id: 49,
      title: "Initialization list in Constructors ",
      link: "https://www.youtube.com/embed/-Re7K7mHtv4",
    },
    {
      id: 50,
      title: "Revisiting Pointers",
      link: "https://www.youtube.com/embed/2Y0b9nFA9s8",
    },
    {
      id: 51,
      title: "Pointers to Objects and Arrow",
      link: "https://www.youtube.com/embed/ANpUQgyRPKk",
    },
    {
      id: 52,
      title: "Array of Objects Using Pointers ",
      link: "https://www.youtube.com/embed/OCmCyYxSi2I",
    },
    {
      id: 53,
      title: "this Pointer in C++",
      link: "https://www.youtube.com/embed/cEOfK_L4gGA",
    },
    {
      id: 54,
      title: "Polymorphism in C++",
      link: "https://www.youtube.com/embed/B-WWdC-H0zw",
    },
    {
      id: 55,
      title: "Pointers to Derived Classes",
      link: "https://www.youtube.com/embed/0YQ_yhX46uk",
    },
    {
      id: 56,
      title: "Virtual Functions in C++",
      link: "https://www.youtube.com/embed/fB3JHNnlRfI",
    },
    {
      id: 57,
      title: "Virtual Functions Example",
      link: "https://www.youtube.com/embed/-noYyWtdXSI",
    },
    {
      id: 58,
      title: "Abstract Base Class & Pure Virtual",
      link: "https://www.youtube.com/embed/RBAWWutf0fY",
    },
    {
      id: 59,
      title: "File I/O in C++",
      link: "https://www.youtube.com/embed/Ma0P9T4nTDA",
    },
    {
      id: 60,
      title: "File I/O in C++",
      link: "https://www.youtube.com/embed/LS1zjr1wog4",
    },
    {
      id: 61,
      title: "File I/O in C++",
      link: "https://www.youtube.com/embed/7ku2AQsWwZE",
    },
    {
      id: 62,
      title: "File I/O in C++: open() and eof() ",
      link: "https://www.youtube.com/embed/U_w-RfMrX18",
    },
    {
      id: 63,
      title: "C++ Templates",
      link: "https://www.youtube.com/embed/kKJeekDKU30",
    },
    {
      id: 64,
      title: "Writing our First C++ Template ",
      link: "https://www.youtube.com/embed/SuiGXMqGKak",
    },
    {
      id: 65,
      title: "C++ Templates: Templates ",
      link: "https://www.youtube.com/embed/8SQL9-cQmsw",
    },
    {
      id: 66,
      title: "C++ Templates with Default",
      link: "https://www.youtube.com/embed/IdY8t0n8VBs",
    },
    {
      id: 67,
      title: "C++ Function Templates",
      link: "https://www.youtube.com/embed/YTS0ShpFsrM",
    },
    {
      id: 68,
      title: "Member Function Templates ",
      link: "https://www.youtube.com/embed/Y_RMNcXAM1U",
    },
    {
      id: 69,
      title: "The C++ STL",
      link: "https://www.youtube.com/embed/c9iREsYpayk",
    },
    {
      id: 70,
      title: "Containers in C++ STL",
      link: "https://www.youtube.com/embed/m0gnToak2-g",
    },
    {
      id: 71,
      title: "Vector In C++ STL",
      link: "https://www.youtube.com/embed/wKDvMcJiEPM",
    },
    {
      id: 72,
      title: "List In C++ STL",
      link: "https://www.youtube.com/embed/OI4CXwpMBhE",
    },
    {
      id: 73,
      title: "Map In C++ STL",
      link: "https://www.youtube.com/embed/KwS-Vbsha1k",
    },
    {
      id: 74,
      title: "Function Objects In C++ STL",
      link: "https://www.youtube.com/embed/g4AQiptpcI8",
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
          Code With Harry
        </span>{" "}
        C++ Course{" "}
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

export default CppCwh;

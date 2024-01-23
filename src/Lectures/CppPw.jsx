import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const CppPw = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction to C++",
      link: "https://www.youtube.com/embed/bL-o2xBENY0",
    },
    {
      id: 2,
      title: "VS Code Installation",
      link: "https://www.youtube.com/embed/VvYhfj2g4Zo",
    },
    {
      id: 3,
      title: "Variables and I/O in C++",
      link: "https://www.youtube.com/embed/sv1ofY9B1q0",
    },
    {
      id: 4,
      title: "Operators in C++",
      link: "https://www.youtube.com/embed/QAemAVPZKKc",
    },
    {
      id: 5,
      title: "C++ in One Shot",
      link: "https://www.youtube.com/embed/FydQ2VDUTZk",
    },
    {
      id: 6,
      title: "If Else & Switch",
      link: "https://www.youtube.com/embed/fjCyOjGFfU0",
    },
    {
      id: 7,
      title: "Loops in C++",
      link: "https://www.youtube.com/embed/jdg-W5Y4TTg",
    },
    {
      id: 8,
      title: "Pattern Printing - Part 1",
      link: "https://www.youtube.com/embed/WZizrQiXhYo",
    },
    {
      id: 9,
      title: "Problems on Loops - Part 2",
      link: "https://www.youtube.com/embed/RyaN6tRI2r8",
    },
    {
      id: 10,
      title: "Pattern Printing Practice",
      link: "https://www.youtube.com/embed/Hy8r8VLmh6I",
    },
    {
      id: 11,
      title: "Number System in C++",
      link: "https://www.youtube.com/embed/lhPcx5qnpY4",
    },
    {
      id: 12,
      title: "Functions in C++",
      link: "https://www.youtube.com/embed/QP_dA2E9E_w",
    },
    {
      id: 13,
      title: "Functions in One Shot",
      link: "https://www.youtube.com/embed/Hp7c2ecLzWo",
    },
    {
      id: 14,
      title: "Functions ",
      link: "https://www.youtube.com/embed/orKvRjhdRus",
    },
    {
      id: 15,
      title: "Arrays - Creation, Types",
      link: "https://www.youtube.com/embed/afoJyiiN1Pw",
    },
    {
      id: 16,
      title: "Vectors in C++",
      link: "https://www.youtube.com/embed/-J6ZKSuaVds",
    },
    {
      id: 17,
      title: "Target Sum Problems",
      link: "https://www.youtube.com/embed/DhlDG8f1bZI",
    },
    {
      id: 18,
      title: "Two Pointers - Problems in Arrays",
      link: "https://www.youtube.com/embed/rjP83yyzwRY",
    },
    {
      id: 19,
      title: "Prefix Sum Problems",
      link: "https://www.youtube.com/embed/OjFxqCApM6E",
    },
    {
      id: 20,
      title: "Arrays in One Shot",
      link: "https://www.youtube.com/embed/Yafdg4Ol1-Q",
    },
    {
      id: 21,
      title: "2D Arrays - What, Why, and How?",
      link: "https://www.youtube.com/embed/lC6d3-v0CT4",
    },
    {
      id: 22,
      title: "Important Problems in 2D Arrays",
      link: "https://www.youtube.com/embed/NFhB6dIADKw",
    },
    {
      id: 23,
      title: "Advanced Problem in 2D Arrays",
      link: "https://www.youtube.com/embed/OtquH8kqz8w",
    },
    {
      id: 24,
      title: "Advanced Problem in 2D Arrays - 2",
      link: "https://www.youtube.com/embed/PIMrTzS0lMM",
    },
    {
      id: 25,
      title: "Advanced Problem in 2D Arrays - 3",
      link: "https://www.youtube.com/embed/z5hLhHHPjQ8",
    },
    {
      id: 26,
      title: "Time Space Complexity ",
      link: "https://www.youtube.com/embed/2exHfPLCc44",
    },
    {
      id: 27,
      title: "Calculating Time Complexity",
      link: "https://www.youtube.com/embed/wendmZfPX_w",
    },
    {
      id: 28,
      title: "Pointers ",
      link: "https://www.youtube.com/embed/PnnbciTtnaM",
    },
    {
      id: 29,
      title:
        "Pointers - Call by reference",
      link: "https://www.youtube.com/embed/I-qKl3WHXkY",
    },
    {
      id: 30,
      title: "Pointers - Types",
      link: "https://www.youtube.com/embed/5UZaM7UQAW4",
    },
    {
      id: 31,
      title: "Recursion - Concept and Problems",
      link: "https://www.youtube.com/embed/EFCeh3mxqCA",
    },
    {
      id: 32,
      title: "Recursion Problems - 1",
      link: "https://www.youtube.com/embed/48RiwsFetT4",
    },
    {
      id: 33,
      title: "Problem Solving on Recursion - 2",
      link: "https://www.youtube.com/embed/k-yBcZmWwvk",
    },
    {
      id: 34,
      title: "Problem Solving on Recursion - 3",
      link: "https://www.youtube.com/embed/ueZ7mAPh0ZQ",
    },
    {
      id: 35,
      title: "Problem Solving on Recursion - 4",
      link: "https://www.youtube.com/embed/VFv5aqA-xHs",
    },
    {
      id: 36,
      title: "Problem Solving on Recursion - 5",
      link: "https://www.youtube.com/embed/hFCEZJRzxrE",
    },
    {
      id: 37,
      title: "Problem Solving on Recursion - 6",
      link: "https://www.youtube.com/embed/Q_tMVG5tNZE",
    },
    {
      id: 38,
      title: "Problem-solving on Recursion -7",
      link: "https://www.youtube.com/embed/9c0GajqYd8E",
    },
    {
      id: 39,
      title: "Bubble Sort Algorithm",
      link: "https://www.youtube.com/embed/1DYj1ebMolY",
    },
    {
      id: 40,
      title: "Selection Sort Algorithm",
      link: "https://www.youtube.com/embed/vjt88RjzeOM",
    },
    {
      id: 41,
      title: "Insertion Sort Algorithm",
      link: "https://www.youtube.com/embed/JncVPgnvywI",
    },
    {
      id: 42,
      title: "Problem on Sorting Algorithms-1",
      link: "https://www.youtube.com/embed/dTeak2KY05s",
    },
    {
      id: 43,
      title: "Merge Sort Algorithm",
      link: "https://www.youtube.com/embed/JqipLIKtolM",
    },
    {
      id: 44,
      title: "Quick Sort Algorithm",
      link: "https://www.youtube.com/embed/2qK31-MQnWw",
    },
    {
      id: 45,
      title: "Count Sort Algorithm",
      link: "https://www.youtube.com/embed/IeFE9lDLmRw",
    },
    {
      id: 46,
      title: "Bucket Sort Algorithm",
      link: "https://www.youtube.com/embed/DlRoUk95rJ4",
    },
    {
      id: 47,
      title: "Problem on Sorting Algorithms-2",
      link: "https://www.youtube.com/embed/vXncwR8llL4",
    },
    {
      id: 48,
      title: "Problem on Sorting Algorithms-3",
      link: "https://www.youtube.com/embed/cIaDEGqc8pw",
    },
    {
      id: 49,
      title: "Binary Search Algorithm",
      link: "https://www.youtube.com/embed/erpkKxfGkQQ",
    },
    {
      id: 50,
      title: "Binary Search Problems - 1",
      link: "https://www.youtube.com/embed/ctswFPAoOrY",
    },
    {
      id: 51,
      title: "Binary Search Problems - 2",
      link: "https://www.youtube.com/embed/Eo8-p3REQdE",
    },
    {
      id: 52,
      title: "Binary Search Problems - 3",
      link: "https://www.youtube.com/embed/X6WF_RZyP44",
    },
    {
      id: 53,
      title: "Strings in One Shot",
      link: "https://www.youtube.com/embed/kjU04wGSYzw",
    },
    {
      id: 54,
      title: "OOPS in One Shot",
      link: "https://www.youtube.com/embed/9roJTTghZJI",
    },
    {
      id: 55,
      title: "Linked List in C++ - Part 1",
      link: "https://www.youtube.com/embed/Kz_6lUoDO_Y",
    },
    {
      id: 56,
      title: "Linked List Part 2",
      link: "https://www.youtube.com/embed/OjGR1GpEukY",
    },
    {
      id: 57,
      title: "Doubly Linked List",
      link: "https://www.youtube.com/embed/-g5EK1Msz8Y",
    },
    {
      id: 58,
      title: "Circular Linked List",
      link: "https://www.youtube.com/embed/rHrOILOBeyU",
    },
    {
      id: 59,
      title: "Stacks - Part 1",
      link: "https://www.youtube.com/embed/XJvmY6iahqo",
    },
    {
      id: 60,
      title: "Stacks - Important Problems",
      link: "https://www.youtube.com/embed/Fi7UFBkLAWA",
    },
    {
      id: 61,
      title: "Stacks - Interview Questions",
      link: "https://www.youtube.com/embed/Xbd55lKPGks",
    },
    {
      id: 62,
      title: "Queues - Part 1",
      link: "https://www.youtube.com/embed/GX4SbJV7bas",
    },
    {
      id: 63,
      title: "Queues - Interview Questions",
      link: "https://www.youtube.com/embed/gWAU2olfS8Q",
    },
    {
      id: 64,
      title: "Set C++ in One Shot",
      link: "https://www.youtube.com/embed/6bh2IdSEv-0",
    },
    {
      id: 65,
      title: "Introduction to Hashing and Hash ",
      link: "https://www.youtube.com/embed/OxBEypvXl9s",
    },
    {
      id: 66,
      title: "Hashmap - STL & Types",
      link: "https://www.youtube.com/embed/pBvlSc2A2U4",
    },
    {
      id: 67,
      title: "Hashmap -  Problems in STL",
      link: "https://www.youtube.com/embed/1s8Dl6KDKe8",
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
          PW Skills
        </span>{" "}
        C++ Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="C++"
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

export default CppPw;

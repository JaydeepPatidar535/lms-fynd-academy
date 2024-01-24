import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const JavaDsaKunal = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "DSA Course",
      link: "https://www.youtube.com/embed/rZ41y93P2Qo",
    },
    {
      id: 2,
      title: "Java vs C++",
      link: "https://www.youtube.com/embed/Nckx9qMy_kw",
    },
    {
      id: 3,
      title: "Google Interview Tips",
      link: "https://www.youtube.com/embed/waGfV-IoOt8",
    },
    {
      id: 4,
      title: "Git and GitHub Tutorial",
      link: "https://www.youtube.com/embed/apGV9Kg7ics",
    },
    {
      id: 5,
      title: "Programming Introduction",
      link: "https://www.youtube.com/embed/wn49bJOYAZM",
    },
    {
      id: 6,
      title: "Program Flow",
      link: "https://www.youtube.com/embed/lhELGQAV4gg",
    },
    {
      id: 7,
      title: "Java Introduction",
      link: "https://www.youtube.com/embed/4EP8YzcN0hQ",
    },
    {
      id: 8,
      title: "First Java Program",
      link: "https://www.youtube.com/embed/TAtrPoaJ7gc",
    },
    {
      id: 9,
      title: "Conditionals and Loops",
      link: "https://www.youtube.com/embed/ldYLYRNaucM",
    },
    {
      id: 10,
      title: "Switch Statements",
      link: "https://www.youtube.com/embed/mA23x39DjbI",
    },
    {
      id: 11,
      title: "Functions / Methods",
      link: "https://www.youtube.com/embed/vvanI8NRlSI",
    },
    {
      id: 12,
      title: "Arrays and ArrayList",
      link: "https://www.youtube.com/embed/n60Dn0UsbEk",
    },
    {
      id: 13,
      title: "Linear Search Algorithm",
      link: "https://www.youtube.com/embed/_HRA37X8N_Q",
    },
    {
      id: 14,
      title: "Binary Search Algorithm",
      link: "https://www.youtube.com/embed/f6UU7V3szVw",
    },
    {
      id: 15,
      title: "Binary Search Interview Questions",
      link: "https://www.youtube.com/embed/W9QJ8HaRvJQ",
    },
    {
      id: 16,
      title: "Binary Search in 2D Arrays",
      link: "https://www.youtube.com/embed/enI_KyGLYPo",
    },
    {
      id: 17,
      title: "Bubble Sort Algorithm",
      link: "https://www.youtube.com/embed/F5MZyqRp_IM",
    },
    {
      id: 18,
      title: "Selection Sort Algorithm",
      link: "https://www.youtube.com/embed/Nd4SCCIHFWk",
    },
    {
      id: 19,
      title: "Insertion Sort Algorithm",
      link: "https://www.youtube.com/embed/By_5-RRqVeE",
    },
    {
      id: 20,
      title: "Cycle Sort",
      link: "https://www.youtube.com/embed/JfinxytTYFQ",
    },
    {
      id: 21,
      title: "Strings and StringBuilder",
      link: "https://www.youtube.com/embed/zL1DPZ0Ovlo",
    },
    {
      id: 22,
      title: "Solve Any Pattern Question",
      link: "https://www.youtube.com/embed/lsOOs5J8ycw",
    },
    {
      id: 23,
      title: "Introduction to Recursion",
      link: "https://www.youtube.com/embed/M2uO2nMT0Bk",
    },
    {
      id: 24,
      title: "Time and Space Complexity",
      link: "https://www.youtube.com/embed/mV3wrLBbuuE",
    },
    {
      id: 25,
      title: "Bitwise Operators",
      link: "https://www.youtube.com/embed/fzip9Aml6og",
    },
    {
      id: 26,
      title: "Maths for DSA",
      link: "https://www.youtube.com/embed/lmSpZ0bjCyQ",
    },
    {
      id: 27,
      title: "Recursion - Level 1 Questions",
      link: "https://www.youtube.com/embed/JxILxTwHukM",
    },
    {
      id: 28,
      title: "Recursion - Array Questions",
      link: "https://www.youtube.com/embed/sTdiMLom00U",
    },
    {
      id: 29,
      title: "Recursion - Pattern Questions",
      link: "https://www.youtube.com/embed/ymgnIIclCF0",
    },
    {
      id: 30,
      title: "Merge Sort Using Recursion",
      link: "https://www.youtube.com/embed/iKGAgWdgoRk",
    },
    {
      id: 31,
      title: "Quick Sort Using Recursion",
      link: "https://www.youtube.com/embed/Z8svOqamag8",
    },
    {
      id: 32,
      title: "Recursion Subset, Subsequence,",
      link: "https://www.youtube.com/embed/gdifkIwCJyg",
    },
    {
      id: 33,
      title: "Recursion - Permutations",
      link: "https://www.youtube.com/embed/gDGw0cvFXPQ",
    },
    {
      id: 34,
      title: "Recursion Google, Amazon ",
      link: "https://www.youtube.com/embed/9ByWqPzfXDU",
    },
    {
      id: 35,
      title: "Backtracking Introduction",
      link: "https://www.youtube.com/embed/zg5v2rlV1tM",
    },
    {
      id: 36,
      title: "N-Queens, N-Knights, r",
      link: "https://www.youtube.com/embed/nC1rbW2YSz0",
    },
    {
      id: 37,
      title: "Introduction & Concepts",
      link: "https://www.youtube.com/embed/BSVKUk58K6U",
    },
    {
      id: 38,
      title: "Packages, Static,Singleton Class",
      link: "https://www.youtube.com/embed/_Ya6CN13t8k",
    },
    {
      id: 39,
      title: "Inheritance,Polymorphism",
      link: "https://www.youtube.com/embed/46T2wD3IuhM",
    },
    {
      id: 40,
      title: "Access Control",
      link: "https://www.youtube.com/embed/W145DXs8fFg",
    },
    {
      id: 41,
      title: "Abstract Classes, Interfaces",
      link: "https://www.youtube.com/embed/rgHZa7-Dibg",
    },
    {
      id: 42,
      title: "Generics, Custom ArrayList",
      link: "https://www.youtube.com/embed/OY2lPr8h93U",
    },
    {
      id: 43,
      title: "Collections Framework, Vector Class",
      link: "https://www.youtube.com/embed/9ogGan-R1pc",
    },
    {
      id: 44,
      title: "Linked List Tutorial -r",
      link: "https://www.youtube.com/embed/58YbpRDc4yw",
    },
    {
      id: 45,
      title: "Linked List Interview s",
      link: "https://www.youtube.com/embed/70tx7KcMROc",
    },
    {
      id: 46,
      title: "Stacks and Queues Complete ",
      link: "https://www.youtube.com/embed/rHQI4mrJ3cg",
    },
    {
      id: 47,
      title: "Stacks and Queues Interview ",
      link: "https://www.youtube.com/embed/S9LUYztYLu4",
    },
    {
      id: 48,
      title: "Tic Tac Toe Java Game ",
      link: "https://www.youtube.com/embed/jlLNXmi4Nmw",
    },
    {
      id: 49,
      title: "Binary Trees Tutorial ",
      link: "https://www.youtube.com/embed/4s1Tcvm00pA",
    },
    {
      id: 50,
      title: "AVL Trees Tutorial ",
      link: "https://www.youtube.com/embed/CVA85JuJEn0",
    },
    {
      id: 51,
      title: "Segment Trees Tutorial ",
      link: "https://www.youtube.com/embed/ciHThtTVNto",
    },
    {
      id: 52,
      title: "StringBuffer in Java ",
      link: "https://www.youtube.com/embed/YFZai3fPUQI",
    },
    {
      id: 53,
      title: "BigInteger & BigDecimal ",
      link: "https://www.youtube.com/embed/lHtoypC-4Ps",
    },
    {
      id: 54,
      title: "File Handling in Java ",
      link: "https://www.youtube.com/embed/b35mlSPOlJg",
    },
    {
      id: 55,
      title: "Binary Tree Technical Interviews",
      link: "https://www.youtube.com/embed/9D-vP-jcc-Y",
    },
    {
      id: 56,
      title: "Heap Data Structure ",
      link: "https://www.youtube.com/embed/Qf-TDPr0nYw",
    },
    {
      id: 57,
      title: "HashMap & HashTable in Java",
      link: "https://www.youtube.com/embed/XLbvmMz8Fr8",
    },
    {
      id: 58,
      title: "Karp-Rabin String Matching ",
      link: "https://www.youtube.com/embed/swciWFPq3NE",
    },
    {
      id: 59,
      title: "Count Sort Algorithm",
      link: "https://www.youtube.com/embed/FOo820lJV1Y",
    },
    {
      id: 60,
      title: "Radix Sort Algorithm",
      link: "https://www.youtube.com/embed/mLi6VQDqAOs",
    },
    {
      id: 61,
      title: "Huffman Coding Greedy ",
      link: "https://www.youtube.com/embed/XLfgeaYHinM",
    },
    {
      id: 62,
      title: "Range Query Interview Problems",
      link: "https://www.youtube.com/embed/U4YmISZViSs",
    },
    {
      id: 63,
      title: "Binary Tree from  Traversal",
      link: "https://www.youtube.com/embed/LFGBTFxHJII",
    },
    {
      id: 64,
      title: "Vertical Traversal of a Binary Tree",
      link: "https://www.youtube.com/embed/Qdr3ohMSxBo",
    },
    {
      id: 65,
      title: "Word Ladder",
      link: "https://www.youtube.com/embed/2odLxQWYDi0",
    },
    {
      id: 66,
      title: "Two Sum IV - Google, Amazon",
      link: "https://www.youtube.com/embed/oB1EIXIDS8s",
    },
    {
      id: 67,
      title: "Kth Smallest Element in a BST",
      link: "https://www.youtube.com/embed/guzgnCSafg4",
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
          Kunal
        </span>{" "}
        DSA Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="dsa"
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

export default JavaDsaKunal;

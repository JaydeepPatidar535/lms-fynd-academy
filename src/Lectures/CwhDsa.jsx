import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const CwhDsa = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Intro DS & Algo",
      link: "https://www.youtube.com/embed/5_5oE5lgrhw",
    },
    {
      id: 2,
      title: "Time Complexity & Big O",
      link: "https://www.youtube.com/embed/vgSKOMsjLbc",
    },
    {
      id: 3,
      title: "Asymptotic Notations",
      link: "https://www.youtube.com/embed/1OTX-WXQHCQ",
    },
    {
      id: 4,
      title: "Best, Worst, Average Case",
      link: "https://www.youtube.com/embed/5g7K86jYto8",
    },
    {
      id: 5,
      title: "Calculate Time Complexity",
      link: "https://www.youtube.com/embed/STL8ESuETmM",
    },
    {
      id: 6,
      title: "Arrays & ADT",
      link: "https://www.youtube.com/embed/bR0NYdmMg94",
    },
    {
      id: 7,
      title: "Array as ADT in C",
      link: "https://www.youtube.com/embed/-sktNalfrE0",
    },
    {
      id: 8,
      title: "Implement Array in C",
      link: "https://www.youtube.com/embed/JqvobBKLHwU",
    },
    {
      id: 9,
      title: "Array Operations",
      link: "https://www.youtube.com/embed/p5TDnxAYAZY",
    },
    {
      id: 10,
      title: "Array Insertion in C",
      link: "https://www.youtube.com/embed/o9WevKSnHL4",
    },
    {
      id: 11,
      title: "Array Deletion in C",
      link: "https://www.youtube.com/embed/2jVcRw1jP9I",
    },
    {
      id: 12,
      title: "Linear Vs Binary Search",
      link: "https://www.youtube.com/embed/ZHCP9vFOJiU",
    },
    {
      id: 13,
      title: "Intro to Linked List",
      link: "https://www.youtube.com/embed/TWMCMvfEAv4",
    },
    {
      id: 14,
      title: "Linked List Creation",
      link: "https://www.youtube.com/embed/BHphhqL9EOE",
    },
    {
      id: 15,
      title: "Insertion in Linked List",
      link: "https://www.youtube.com/embed/ewCc7O2K5SM",
    },
    {
      id: 16,
      title: "Insertion in Linked List (C)",
      link: "https://www.youtube.com/embed/_PuIzVqJJbA",
    },
    {
      id: 17,
      title: "Deletion in Linked List",
      link: "https://www.youtube.com/embed/R_7qJzAWrMg",
    },
    {
      id: 18,
      title: "Delete Node in Linked List (C)",
      link: "https://www.youtube.com/embed/UQIJNobtzVY",
    },
    {
      id: 19,
      title: "Circular Linked List",
      link: "https://www.youtube.com/embed/41lXYJID3OQ",
    },
    {
      id: 20,
      title: "Circular Linked Lists (C)",
      link: "https://www.youtube.com/embed/UclZxvnOQZc",
    },
    {
      id: 21,
      title: "Doubly Linked Lists in C",
      link: "https://www.youtube.com/embed/63HJ2-jV6Mk",
    },
    {
      id: 22,
      title: "Intro to Stack",
      link: "https://www.youtube.com/embed/-n2rVJE4vto",
    },
    {
      id: 23,
      title: "Stack Using Array",
      link: "https://www.youtube.com/embed/MD3mFgFwqBE",
    },
    {
      id: 24,
      title: "Stack Array Implementation in C",
      link: "https://www.youtube.com/embed/r2yHEW8HmBE",
    },
    {
      id: 25,
      title: "Stack Operations Using Array",
      link: "https://www.youtube.com/embed/sN1oUrR7foM",
    },
    {
      id: 26,
      title: "Stack Operations in C",
      link: "https://www.youtube.com/embed/JhHJf93Ft8M",
    },
    {
      id: 27,
      title: "Peek Operation in Stack",
      link: "https://www.youtube.com/embed/UM_UcLNFc_o",
    },
    {
      id: 28,
      title: "Stack Operations Time Complexity",
      link: "https://www.youtube.com/embed/AW09Wnmz4-4",
    },
    {
      id: 29,
      title: "Stack Using Linked List",
      link: "https://www.youtube.com/embed/b749wwxlQmA",
    },
    {
      id: 30,
      title: "Stack Operations Using LinkedList",
      link: "https://www.youtube.com/embed/0BTDISr-8xU",
    },
    {
      id: 31,
      title: "Peek() & Other Operations ",
      link: "https://www.youtube.com/embed/xKJkqzKCxmY",
    },
    {
      id: 32,
      title: "Parenthesis Matching Problem ",
      link: "https://www.youtube.com/embed/D3M3PEcgdV4",
    },
    {
      id: 33,
      title: "Parenthesis Checking ",
      link: "https://www.youtube.com/embed/Wj_Xtj6so3U",
    },
    {
      id: 34,
      title: "Multiple Parenthesis Matching ",
      link: "https://www.youtube.com/embed/QURbEGE-F_Y",
    },
    {
      id: 35,
      title: "Infix, Prefix and Postfix Expressions",
      link: "https://www.youtube.com/embed/422Q_yx2yA8",
    },
    {
      id: 36,
      title: "Infix To Postfix Using Stack",
      link: "https://www.youtube.com/embed/_abDDg0Jw94",
    },
    {
      id: 37,
      title: "Coding Infix to Postfix ",
      link: "https://www.youtube.com/embed/6RmrX2uqllY",
    },
    {
      id: 38,
      title: "Queue Data Structure in Hindi",
      link: "https://www.youtube.com/embed/UbAEP7P0vfk",
    },
    {
      id: 39,
      title: "Array Implementation of Queue",
      link: "https://www.youtube.com/embed/EyxBMLZdgvc",
    },
    {
      id: 40,
      title: "Queue Operations Using Array",
      link: "https://www.youtube.com/embed/JlZX7xIBjl0",
    },
    {
      id: 41,
      title: "Queue Operations in C",
      link: "https://www.youtube.com/embed/FuQdtKry3ss",
    },
    {
      id: 42,
      title: "Circular Queue Introduction",
      link: "https://www.youtube.com/embed/KqTJ5MAUj80",
    },
    {
      id: 43,
      title: "Circular Queue Operations",
      link: "https://www.youtube.com/embed/rtxjrVpWVmI",
    },
    {
      id: 44,
      title: "Circular Queue Operations in Hindi",
      link: "https://www.youtube.com/embed/lQBRjdPFF4w",
    },
    {
      id: 45,
      title: "Queue Using Linked Lists",
      link: "https://www.youtube.com/embed/LwYQo8mVPBs",
    },
    {
      id: 46,
      title: "Queue Using Linked List in C",
      link: "https://www.youtube.com/embed/iXpPL80-MGs",
    },
    {
      id: 47,
      title: "Double-Ended Queue (DE-Queue)",
      link: "https://www.youtube.com/embed/OnlgK0gjtB8",
    },
    {
      id: 48,
      title: "Intro to Sorting Algorithms",
      link: "https://www.youtube.com/embed/ByLlEk7zmyw",
    },
    {
      id: 49,
      title: "Analysis of Sorting Algorithms",
      link: "https://www.youtube.com/embed/tBiSx0PrB4g",
    },
    {
      id: 50,
      title: "Bubble Sort Algorithm in Hindi",
      link: "https://www.youtube.com/embed/BJkpnxf5cfY",
    },
    {
      id: 51,
      title: "Bubble Sort Program in C",
      link: "https://www.youtube.com/embed/CkXjf6_8DLU",
    },
    {
      id: 52,
      title: "Insertion Sort Algorithm",
      link: "https://www.youtube.com/embed/8l3dH_XyCik",
    },
    {
      id: 53,
      title: "Insertion Sort in C Language",
      link: "https://www.youtube.com/embed/XBfH1Qy1JGY",
    },
    {
      id: 54,
      title: "Selection Sort Algorithm",
      link: "https://www.youtube.com/embed/Jb8AYaYMxq4",
    },
    {
      id: 55,
      title: "Selection Sort Program in C",
      link: "https://www.youtube.com/embed/slXyQKww0-E",
    },
    {
      id: 56,
      title: "QuickSort Algorithm in Hindi",
      link: "https://www.youtube.com/embed/SN4x87ZdhGg",
    },
    {
      id: 57,
      title: " QuickSort Sorting Algorithm",
      link: "https://www.youtube.com/embed/xqdTr7xs8QU",
    },
    {
      id: 58,
      title: "MergeSort Sorting Algorithm",
      link: "https://www.youtube.com/embed/6Aqxv29RGPc",
    },
    {
      id: 59,
      title: "MergeSort Source Code in C",
      link: "https://www.youtube.com/embed/ytK4Biw-CW4",
    },
    {
      id: 60,
      title: "Count Sort Algorithm",
      link: "https://www.youtube.com/embed/HkvChUv9dDg",
    },
    {
      id: 61,
      title: "Intro to Trees",
      link: "https://www.youtube.com/embed/oI0QhFzBSRo",
    },
    {
      id: 62,
      title: "What is a Binary Tree?",
      link: "https://www.youtube.com/embed/j8b4ZnZefBo",
    },
    {
      id: 63,
      title: "Binary Tree Types",
      link: "https://www.youtube.com/embed/SCjfVE3bFik",
    },
    {
      id: 64,
      title: "Binary Tree Representation",
      link: "https://www.youtube.com/embed/Albe808b8FE",
    },
    {
      id: 65,
      title: "Binary Tree in C",
      link: "https://www.youtube.com/embed/P892nBTmpDQ",
    },
    {
      id: 66,
      title: "Binary Tree Traversal",
      link: "https://www.youtube.com/embed/UbwkQmCWcDM",
    },
    {
      id: 67,
      title: "Preorder Traversal (C)",
      link: "https://www.youtube.com/embed/VNegW_7OLS4",
    },
    {
      id: 68,
      title: "PostOrder Traversal (C)",
      link: "https://www.youtube.com/embed/PulGSuAmFJM",
    },
    {
      id: 69,
      title: "InOrder Traversal (C)",
      link: "https://www.youtube.com/embed/X1_0wQb8lDM",
    },
    {
      id: 70,
      title: "Traversal Tricks",
      link: "https://www.youtube.com/embed/IqVCDZlciDU",
    },
    {
      id: 71,
      title: "BST Introduction",
      link: "https://www.youtube.com/embed/XQJJhNiGlL0",
    },
    {
      id: 72,
      title: "Check BST",
      link: "https://www.youtube.com/embed/hE2EWEqqIKk",
    },
    {
      id: 73,
      title: "BST Search Operation",
      link: "https://www.youtube.com/embed/OKXI2woGoeg",
    },
    {
      id: 74,
      title: "BST Search in C",
      link: "https://www.youtube.com/embed/ZFdmR-MJVkc",
    },
    {
      id: 75,
      title: "Iterative BST Search",
      link: "https://www.youtube.com/embed/47sNttolDNE",
    },
    {
      id: 76,
      title: "BST Insertion",
      link: "https://www.youtube.com/embed/ZxPePWp0n3Y",
    },
    {
      id: 77,
      title: "BST Deletion",
      link: "https://www.youtube.com/embed/VXnlt8qChPQ",
    },
    {
      id: 78,
      title: "BST Deletion in C",
      link: "https://www.youtube.com/embed/qqzaCS3s3Ac",
    },
    {
      id: 79,
      title: "AVL Trees Introduction",
      link: "https://www.youtube.com/embed/npnAlIbyknI",
    },
    {
      id: 80,
      title: "AVL Tree Insertion & Rotation",
      link: "https://www.youtube.com/embed/CYTjKQ7ektU",
    },
    {
      id: 81,
      title: "AVL Tree Rotations",
      link: "https://www.youtube.com/embed/MNGIzdNPQl4",
    },
    {
      id: 82,
      title: "AVL Tree C Code",
      link: "https://www.youtube.com/embed/Wdy36bumttg",
    },
    {
      id: 83,
      title: "Graph Introduction",
      link: "https://www.youtube.com/embed/TwdjOQMTaQ4",
    },
    {
      id: 84,
      title: "Graph Representations",
      link: "https://www.youtube.com/embed/SwUNIiV6ePg",
    },
    {
      id: 85,
      title: "Graph Traversal & Algorithms",
      link: "https://www.youtube.com/embed/IF3BSU70EZo",
    },
    {
      id: 86,
      title: "BFS Graph Traversal",
      link: "https://www.youtube.com/embed/6dWUABpUky4",
    },
    {
      id: 87,
      title: "BFS Implementation in C",
      link: "https://www.youtube.com/embed/_G3zzPOz61A",
    },
    {
      id: 88,
      title: "DFS Graph Traversal",
      link: "https://www.youtube.com/embed/4M1u4-eGlxU",
    },
    {
      id: 89,
      title: "DFS Implementation in C",
      link: "https://www.youtube.com/embed/jQmlXAwUvZ4",
    },
    {
      id: 90,
      title: "Spanning Trees",
      link: "https://www.youtube.com/embed/91Q3GlQugwc",
    },
    {
      id: 91,
      title: "Spanning Tree Cost",
      link: "https://www.youtube.com/embed/luZNlCDJInM",
    },
    {
      id: 92,
      title: "Prim's MST Algorithm",
      link: "https://www.youtube.com/embed/-_SzHb_ntHc",
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
          Code with Harry
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

export default CwhDsa;

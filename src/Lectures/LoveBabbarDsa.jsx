import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const LoveBabbarDsa = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: "1",
      title: "Intro to Programming & Flowcharts",
      link: "https://www.youtube.com/embed/WQoB2z67hvY",
    },
    {
      id: "2",
      title: "Write Your First Program in C++",
      link: "https://www.youtube.com/embed/t6zLJOCVqD0",
    },
    {
      id: "3",
      title: "If-Else, Loop",
      link: "https://www.youtube.com/embed/WR31ByTzAVQ",
    },
    {
      id: "4",
      title: "Solving Patterns",
      link: "https://www.youtube.com/embed/dr-pLeJBr38?si=7BRC6H0q92g3Wc7a",
    },
    {
      id: "5",
      title: "Bitwise Operator",
      link: "https://www.youtube.com/embed/yjdQHb2elqI?si=BuUdTuBB7WnlWhUh",
    },
    {
      id: "6",
      title: "Binar & Decimal Number System",
      link: "https://www.youtube.com/embed/bWrsk0QizEk?si=QSpr1F58GwfajLWm",
    },
    {
      id: "7",
      title: "LeetCode Problem",
      link: "https://www.youtube.com/embed/0fwrMYPcGQ0",
    },
    {
      id: "8",
      title: "Switch Statement & Functions",
      link: "https://www.youtube.com/embed/8nNqk2NPbRA",
    },
    {
      id: "9",
      title: "Introduction to Arrays in C++",
      link: "https://www.youtube.com/embed/sNrLlmOIn-c",
    },
    {
      id: "10",
      title: "Solving LeetCode[Arrays]",
      link: "https://www.youtube.com/embed/oVa8DfUDKTw",
    },
    {
      id: "11",
      title: "Time & Space Complexity",
      link: "https://www.youtube.com/embed/QovOdd80A4s",
    },
    {
      id: "12",
      title: "Binary Search Explained in 1 Video",
      link: "https://www.youtube.com/embed/YJeoQBevNVo",
    },
    {
      id: "13",
      title: "Binary Search Questions Part-1",
      link: "https://www.youtube.com/embed/zD2Jg3alZV8",
    },
    {
      id: "14",
      title: "Binary Search Questions Part-2",
      link: "https://www.youtube.com/embed/6z2HK4o8qcU",
    },
    {
      id: "15",
      title: "Book Allocation Problem",
      link: "https://www.youtube.com/embed/YTTdLgyqOLY",
    },
    {
      id: "16",
      title: "Selection Sort",
      link: "https://www.youtube.com/embed/UdO2NeHB46c",
    },
    {
      id: "17",
      title: "BUBBLE SORT",
      link: "https://www.youtube.com/embed/zOhUavxlzw4",
    },
    {
      id: "18",
      title: "INSERTION SORT",
      link: "https://www.youtube.com/embed/7kIVfVY6Axk",
    },
    {
      id: "19",
      title: "C++ STL ",
      link: "https://www.youtube.com/embed/WgMPrLX-zsA",
    },
    {
      id: "20",
      title: "Solving LeetCode",
      link: "https://www.youtube.com/embed/MPvr-LmaZmA",
    },
    {
      id: "21",
      title: "Solving LeetCode",
      link: "https://www.youtube.com/embed/Z7_nMTHROZo",
    },
    {
      id: "22",
      title: "All about Char Arrays, Strings",
      link: "https://www.youtube.com/embed/Wdjr6uoZ0e0",
    },
    {
      id: "23",
      title: "Introduction to 2D Arrays in C++ ",
      link: "https://www.youtube.com/embed/1CdolnvxLs0",
    },
    {
      id: "24",
      title: " Basic Maths for DSA",
      link: "https://www.youtube.com/embed/KdePjukNs98",
    },
    {
      id: "25",
      title: "Pointers in C++ Part-1",
      link: "https://www.youtube.com/embed/YHwEIfrXZgE",
    },
    {
      id: "26",
      title: "Pointers in C++ Part-2",
      link: "https://www.youtube.com/embed/rlpw7oi-bpE",
    },
    {
      id: "27",
      title: "Double Pointers in C++",
      link: "https://www.youtube.com/embed/P0UsAxtXq2Y",
    },
    {
      id: "28",
      title: "Reference Variable",
      link: "https://www.youtube.com/embed/MMO2c57XHzM",
    },
    {
      id: "29",
      title: "Dynamic Memory Allocation",
      link: "https://www.youtube.com/embed/LlqgWQgm58g",
    },
    {
      id: "30",
      title: "Macros, Global Variables",
      link: "https://www.youtube.com/embed/0TEvaAiqo8Y",
    },
    {
      id: "31",
      title: "Learning Recursion",
      link: "https://www.youtube.com/embed/_-2u4EPHD88",
    },
    {
      id: "32",
      title: "Understanding Recursion",
      link: "https://www.youtube.com/embed/zg8Y1oE4qYQ",
    },
    {
      id: "33",
      title: "Recursion and Binary Search",
      link: "https://www.youtube.com/embed/UntSI7G5h20",
    },
    {
      id: "34",
      title: "Recursion with Strings ",
      link: "https://www.youtube.com/embed/WyY2Af3k1xI",
    },
    {
      id: "35",
      title: "Merge Sort using Recursion",
      link: "https://www.youtube.com/embed/cdHEpbBVjRM",
    },
    {
      id: "36",
      title: "Quick Sort using Recursion",
      link: "https://www.youtube.com/embed/sNaHN4tZmRk",
    },
    {
      id: "37",
      title: "Recursion - Subsets",
      link: "https://www.youtube.com/embed/V0IgCltYgg4",
    },
    {
      id: "38",
      title: " Phone Keypad Problem Recursion",
      link: "https://www.youtube.com/embed/tWnHbSHwNmA",
    },
    {
      id: "39",
      title: "Permutations of a String",
      link: "https://www.youtube.com/embed/va3NEycUxsg",
    },
    {
      id: "40",
      title: "Rat in a Maze Problem",
      link: "https://www.youtube.com/embed/GqtyVD-x_jY",
    },
    {
      id: "41",
      title: "Time & Space  of Recursive",
      link: "https://www.youtube.com/embed/BYCeh76OASc",
    },
    {
      id: "42",
      title: "OOPs Concepts in C++",
      link: "https://www.youtube.com/embed/i_5pvt7ag7E",
    },
    {
      id: "43",
      title: "4 Pillars of OOPs Concept",
      link: "https://www.youtube.com/embed/b3GccK5_KSQ",
    },
    {
      id: "44",
      title: "Linked List & its types",
      link: "https://www.youtube.com/embed/q8gdBn9RPeI",
    },
    {
      id: "45",
      title: "Linked List Questions 1",
      link: "https://www.youtube.com/embed/vqS1nVQdCJM",
    },
    {
      id: "46",
      title: "Linked List Questions 2",
      link: "https://www.youtube.com/embed/fi2vh0nQLi0",
    },
    {
      id: "47",
      title: "Detect & Remove Loop",
      link: "https://www.youtube.com/embed/VxOFflTXlXo",
    },
    {
      id: "48",
      title: "Remove Duplicates from a Sorted",
      link: "https://www.youtube.com/embed/7pgs-wT5d4c",
    },
    {
      id: "49",
      title: "Merge 2 Sorted Linked Lists",
      link: "https://www.youtube.com/embed/ogmBt6f9hw8",
    },
    {
      id: "50",
      title: "Check Palindrome in Linked List",
      link: "https://www.youtube.com/embed/aD7mBVnKFEU",
    },
    {
      id: "51",
      title: "Add 2 Numbers represented ",
      link: "https://www.youtube.com/embed/HiRlTPf9aCg",
    },
    {
      id: "52",
      title: "Clone a Linked List",
      link: "https://www.youtube.com/embed/83mPr0i56Gg",
    },
    {
      id: "53",
      title: "Merge Sort in Linked List",
      link: "https://www.youtube.com/embed/rM5EEA_rbNY",
    },
    {
      id: "54",
      title: "Introduction to Stacks",
      link: "https://www.youtube.com/embed/_6COl6V6mng",
    },
    {
      id: "55",
      title: "Stack Interview Questions",
      link: "https://www.youtube.com/embed/BmZnJehDzyU",
    },
    {
      id: "56",
      title: "Largest Rectangular Area ",
      link: "https://www.youtube.com/embed/lJLcqDsmYfg",
    },
    {
      id: "57",
      title: "Stack - Celebrity Problem",
      link: "https://www.youtube.com/embed/9u2BJfmWNEg",
    },
    {
      id: "58",
      title: '"N" Stacks in an Array',
      link: "https://www.youtube.com/embed/lrSXKLmnMV8",
    },
    {
      id: "59",
      title: "Design Special Stack Problem",
      link: "https://www.youtube.com/embed/OpwYmEBcPh0",
    },
    {
      id: "60",
      title: "Queues in C++ ",
      link: "https://www.youtube.com/embed/W7uB9-TKfTg",
    },
    {
      id: "61",
      title: "Queue FAANG Interview",
      link: "https://www.youtube.com/embed/_gJ3to4RyeQ",
    },
    {
      id: "62",
      title: " Binary Trees & its Representation",
      link: "https://www.youtube.com/embed/5NiXlPrLslg",
    },
    {
      id: "63",
      title: "Binary Tree FAANG Part-1",
      link: "https://www.youtube.com/embed/nHMQ33LZ6oA",
    },
    {
      id: "64",
      title: "Binary Tree FAANG Part-2",
      link: "https://www.youtube.com/embed/s1d8UGDCCN8",
    },
    {
      id: "65",
      title: "Binary Tree FAANG Part-3",
      link: "https://www.youtube.com/embed/QG0hE0R_ng4",
    },
    {
      id: "66",
      title: "Construct a Binary Tree",
      link: "https://www.youtube.com/embed/ffE1xj51EBQ",
    },
    {
      id: "67",
      title: "Minimum Time to BURN",
      link: "https://www.youtube.com/embed/XLdpy0_6MR4",
    },
    {
      id: "68",
      title: "Morris Traversal ",
      link: "https://www.youtube.com/embed/2BdY9fixMrM",
    },
    {
      id: "69",
      title: "BST & its Implementation",
      link: "https://www.youtube.com/embed/UeRUKRJvPa4",
    },
    {
      id: "70",
      title: "Binary SearchTree FAANG 1",
      link: "https://www.youtube.com/embed/pDURIj98e0I",
    },
    {
      id: "71",
      title: "Binary SearchTree FAANG 2",
      link: "https://www.youtube.com/embed/IGHyX15fLI8",
    },
    {
      id: "72",
      title: "Merge 2 Binary Search Trees",
      link: "https://www.youtube.com/embed/18w8VduomfI",
    },
    {
      id: "73",
      title: "Largest BST in a Binary Tree",
      link: "https://www.youtube.com/embed/fqx8z3VepMA",
    },
    {
      id: "74",
      title: "Heaps in C++ ",
      link: "https://www.youtube.com/embed/NKJnHewiGdc",
    },
    {
      id: "75",
      title: "Heaps in C++ Part - 1",
      link: "https://www.youtube.com/embed/_9F2VgZcvdw",
    },
    {
      id: "76",
      title: "Heaps in C++  Part - 2",
      link: "https://www.youtube.com/embed/eccAKrmffh8",
    },
    {
      id: "77",
      title: "Heaps Hard Part - 3",
      link: "https://www.youtube.com/embed/RrxpTWqj97A",
    },
    {
      id: "78",
      title: "Hashmaps in C++ ",
      link: "https://www.youtube.com/embed/7mUKGHznpfg",
    },
    {
      id: "79",
      title: "Trie & its Implementation",
      link: "https://www.youtube.com/embed/Y6dOuGjwsxU",
    },
    {
      id: "80",
      title: "Longest Common Prefix Problem ",
      link: "https://www.youtube.com/embed/VTr3Nh7BadI",
    },
    {
      id: "81",
      title: "Implement a Phone Directory",
      link: "https://www.youtube.com/embed/SK2S5lQegVg",
    },
    {
      id: "82",
      title: "Rat in Maze Problem  Day 1 ",
      link: "https://www.youtube.com/embed/wjqSZy4pMT4",
    },
    {
      id: "83",
      title: "N-Queen Problem  Day 2 ",
      link: "https://www.youtube.com/embed/9wEwqNdOAVQ",
    },
    {
      id: "84",
      title: "Sudoku Solver Problem Day 3 ",
      link: "https://www.youtube.com/embed/8lWxaRviJBA",
    },
    {
      id: "85",
      title: "Introduction to Graphs ",
      link: "https://www.youtube.com/embed/EaK6aslcC5g",
    },
    {
      id: "86",
      title: "BFS Traversal in Graph ",
      link: "https://www.youtube.com/embed/b5kij1Akf9I",
    },
    {
      id: "87",
      title: "DFS Traversal in Graph ",
      link: "https://www.youtube.com/embed/aJa3U-hydXc",
    },
    {
      id: "88",
      title: "Cycle Detection in Graphs ",
      link: "https://www.youtube.com/embed/1cSzxlhxOw8",
    },
    {
      id: "89",
      title: "Cycle Detection in Graphs",
      link: "https://www.youtube.com/embed/Tl5qbEmEQyY",
    },
    {
      id: "90",
      title: "Topological Sort ( Using DFS )",
      link: "https://www.youtube.com/embed/T_boOrr0rvk",
    },
    {
      id: "91",
      title: "Topological Sort ",
      link: "https://www.youtube.com/embed/6XmzL04mlgQ",
    },
    {
      id: "92",
      title: "Cycle Detection Graph",
      link: "https://www.youtube.com/embed/X2_tYUuthH8",
    },
    {
      id: "93",
      title: "Shortest Path in Undirected Graphs",
      link: "https://www.youtube.com/embed/abIEXKFpLNE",
    },
    {
      id: "94",
      title: "Shortest Path in Acyclic Graphs",
      link: "https://www.youtube.com/embed/P_bfy0LOU5g",
    },
    {
      id: "95",
      title: "Dijkstra's Algorithm ",
      link: "https://www.youtube.com/embed/dVUR3Rm6biE",
    },
    {
      id: "96",
      title: "Minimum Spanning Tree ",
      link: "https://www.youtube.com/embed/rnYBi9N_vw4",
    },
    {
      id: "97",
      title: "Kruskal's Algorithm ",
      link: "https://www.youtube.com/embed/KxLtIrCyXwE",
    },
    {
      id: "98",
      title: "Bridges in a Graph ",
      link: "https://www.youtube.com/embed/CiDPT1xMKI0",
    },
    {
      id: "99",
      title: "Articulation Points in Graphs",
      link: "https://www.youtube.com/embed/fqkqx6OBRDE",
    },
    {
      id: "100",
      title: "Kosaraju's Algorithm ",
      link: "https://www.youtube.com/embed/ndfjV_yHpgQ",
    },
    {
      id: "101",
      title: "Bellman Ford Algorithm",
      link: "https://www.youtube.com/embed/ijpVpsmpJtQ",
    },
    {
      id: "102",
      title: "Introduction to DP",
      link: "https://www.youtube.com/embed/PGsgv6nXhLw",
    },
    {
      id: "103",
      title: "Minimum Cost Climbing Stairs ",
      link: "https://www.youtube.com/embed/S31W3kohFDk",
    },
    {
      id: "104",
      title: "Minimum Number of Coins",
      link: "https://www.youtube.com/embed/A3FHNCAkhxE",
    },
    {
      id: "105",
      title: "Maximum Sum of Non-Adjacent ",
      link: "https://www.youtube.com/embed/m9-H6AUBLgY",
    },
    {
      id: "106",
      title: "House Robbery Problem",
      link: "https://www.youtube.com/embed/Fe2GeXEzWM0",
    },
    {
      id: "107",
      title: "Cut Rod into Segments of X, Y, Z ",
      link: "https://www.youtube.com/embed/MFAAZW2znv8",
    },
    {
      id: "108",
      title: "Count derangements ",
      link: "https://www.youtube.com/embed/NW-BLDQHFXk",
    },
    {
      id: "109",
      title: "Painting Fence Algorithm",
      link: "https://www.youtube.com/embed/5eFh5CC-8KY",
    },
    {
      id: "110",
      title: "0/1 KnapSack Problem ",
      link: "https://www.youtube.com/embed/xdPv2SZJLVI",
    },
    {
      id: "111",
      title: "Combination Sum IV Problem ",
      link: "https://www.youtube.com/embed/Wct0mN2SCRQ",
    },
    {
      id: "112",
      title: "Perfect Squares Problem ",
      link: "https://www.youtube.com/embed/aJTCcyPrPOA",
    },
    {
      id: "113",
      title: "Minimum Cost for Tickets Part-1 ",
      link: "https://www.youtube.com/embed/oZ_xAIGCXw4",
    },
    {
      id: "114",
      title: "Minimum Cost for Tickets  Part-2",
      link: "https://www.youtube.com/embed/U5f__4we_Jc",
    },
    {
      id: "115",
      title: "Largest Square area in Matrix ",
      link: "https://www.youtube.com/embed/MMr19RE7KYY",
    },
    {
      id: "116",
      title: "Min Score Triangulation ",
      link: "https://www.youtube.com/embed/Eo4G_LPCgX8",
    },
    {
      id: "117",
      title: "Minimum Sideways Jump ",
      link: "https://www.youtube.com/embed/dvTTtzamEEo",
    },
    {
      id: "118",
      title: "Reducing Dishes LeetCode  ",
      link: "https://www.youtube.com/embed/_iGlRDLPLxM",
    },
    {
      id: "119",
      title: "Longest Increasing Subsequence ",
      link: "https://www.youtube.com/embed/MYHajVcnXSA",
    },
    {
      id: "120",
      title: "Maximum Height Stacking Cuboid",
      link: "https://www.youtube.com/embed/Ntzuz7XsdCI",
    },
    {
      id: "121",
      title: "Pizza with 3n Slices  ",
      link: "https://www.youtube.com/embed/QZ9edJ0JCPw",
    },
    {
      id: "122",
      title: "Number of Dice Rolls",
      link: "https://www.youtube.com/embed/XY297u8qRDI",
    },
    {
      id: "123",
      title: "Partition Equal Subset Sum ",
      link: "https://www.youtube.com/embed/UGY7FMHt-M8",
    },
    {
      id: "124",
      title: "Minimum Swaps ",
      link: "https://www.youtube.com/embed/IeT9Qz_vqHo",
    },
    {
      id: "125",
      title: "Longest Arithmetic Subsequence ",
      link: "https://www.youtube.com/embed/YaMcX7sem70",
    },
    {
      id: "126",
      title: 'Longest AP with Difference "d" ',
      link: "https://www.youtube.com/embed/IOOFHFXenQU",
    },
    {
      id: "127",
      title: "Unique Binary Search Trees ",
      link: "https://www.youtube.com/embed/ox7fOk3HjlA",
    },
    {
      id: "128",
      title: "Guess Number Higher ",
      link: "https://www.youtube.com/embed/x--bMzT1Xhk",
    },
    {
      id: "129",
      title: "Minimum Cost Tree ",
      link: "https://www.youtube.com/embed/LDiD9fr28tc",
    },
    {
      id: "130",
      title: "Buy and Sell Stock [Part 1] ",
      link: "https://www.youtube.com/embed/BSRTUtvJSIk",
    },
    {
      id: "131",
      title: "Buy and Sell Stock [Part 2] ",
      link: "https://www.youtube.com/embed/dlKGCNVel6A",
    },
    {
      id: "132",
      title: "Buy and Sell Stock [Part 3]",
      link: "https://www.youtube.com/embed/NW7XRzg3smo",
    },
    {
      id: "133",
      title: "Buy and Sell Stock [Part 4]",
      link: "https://www.youtube.com/embed/tuhjovVtDII",
    },
    {
      id: "134",
      title: "Buy and Sell Stock [Part 5]",
      link: "https://www.youtube.com/embed/KFqhgQeQAXc",
    },
    {
      id: "135",
      title: "Longest Common Subsequence",
      link: "https://www.youtube.com/embed/y1b8pObvndA",
    },
    {
      id: "136",
      title: "Longest Palindromic Subsequence",
      link: "https://www.youtube.com/embed/U095bJJtW3w",
    },
    {
      id: "137",
      title: "EDIT Distance DP on Strings",
      link: "https://www.youtube.com/embed/8HEjwf28LyE",
    },
    {
      id: "138",
      title: "Maximum Rectangle with all 1's ",
      link: "https://www.youtube.com/embed/IPT6emqnxg8",
    },
    {
      id: "139",
      title: "Wildcard Pattern Matching",
      link: "https://www.youtube.com/embed/OgovJ9CB0hI",
    },
    {
      id: "140",
      title: "GREEDY ALGORITHMS ",
      link: "https://www.youtube.com/embed/HZOUwKCKF5o",
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
          Love Babbar
        </span>{" "}
        DSA Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="LoveBabbar DSA Playlist"
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

export default LoveBabbarDsa;
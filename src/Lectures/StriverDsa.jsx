import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const StriverDsa = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "VS Code Setup",
      link: "https://www.youtube.com/embed/h3uDCJ5mvgw",
    },
    {
      id: 2,
      title: "C++ Basics",
      link: "https://www.youtube.com/embed/EAR7De6Goz4",
    },
    {
      id: 3,
      title: "Time and Space Complexity ",
      link: "https://www.youtube.com/embed/FPu9Uld7W-E",
    },
    {
      id: 4,
      title: "Solve Pattern Question",
      link: "https://www.youtube.com/embed/tNm_NNSB3_w",
    },
    {
      id: 5,
      title: "Complete C++ STL",
      link: "https://www.youtube.com/embed/RRVYpIET_RU",
    },
    {
      id: 6,
      title: "Basic Maths for DSA ",
      link: "https://www.youtube.com/embed/1xNbjMdbjug",
    },
    {
      id: 7,
      title: "Introduction to Recursion",
      link: "https://www.youtube.com/embed/yVdKa8dnKiE",
    },
    {
      id: 8,
      title: "Problems on Recursion ",
      link: "https://www.youtube.com/embed/un6PLygfXrA",
    },
    {
      id: 9,
      title: "Parameterised Recursion",
      link: "https://www.youtube.com/embed/69ZCDFy-OUo",
    },
    {
      id: 10,
      title: "Problems Functional Recursion",
      link: "https://www.youtube.com/embed/twuC1F6gLI8",
    },
    {
      id: 11,
      title: "Multiple Recursion Calls ",
      link: "https://www.youtube.com/embed/kvRjNm4rVBE",
    },
    {
      id: 12,
      title: "Hashing-Maps-Time Complexity",
      link: "https://www.youtube.com/embed/KEs5UyBJ39g",
    },
    {
      id: 13,
      title: "Sorting - Part 1",
      link: "https://www.youtube.com/embed/HGk_ypEuS24",
    },
    {
      id: 14,
      title: "Merge Sort ",
      link: "https://www.youtube.com/embed/ogjf7ORKfd8",
    },
    {
      id: 15,
      title: "Quick Sort For Beginners",
      link: "https://www.youtube.com/embed/WIrA4YexLRQ",
    },
    {
      id: 16,
      title: "Find Second Largest ",
      link: "https://www.youtube.com/embed/37E9ckMDdTk",
    },
    {
      id: 17,
      title: "Rotate Array by K places",
      link: "https://www.youtube.com/embed/wvcQg43_V8U",
    },
    {
      id: 18,
      title: "Find element that appears once",
      link: "https://www.youtube.com/embed/bYWLJb3vCWY",
    },
    {
      id: 19,
      title: "Longest Subarray with sum K",
      link: "https://www.youtube.com/embed/frf7qxiN2qU",
    },
    {
      id: 20,
      title: "2 Sum Problem - 2 types",
      link: "https://www.youtube.com/embed/UXDSeD9mN-k",
    },
    {
      id: 21,
      title: "Sort an array of 0's 1's & 2's",
      link: "https://www.youtube.com/embed/tp8JIuCXBaU",
    },
    {
      id: 22,
      title: "Majority Element I",
      link: "https://www.youtube.com/embed/nP_ns3uSh80",
    },
    {
      id: 23,
      title: "Kadane's Algorithm",
      link: "https://www.youtube.com/embed/AHZpyENo7k4",
    },
    {
      id: 24,
      title: " Best Time ",
      link: "https://www.youtube.com/embed/excAOvwF_Wk",
    },
    {
      id: 25,
      title: "Rearrange Array Elements",
      link: "https://www.youtube.com/embed/h4aBagy4Uok",
    },
    {
      id: 26,
      title: "Next Permutation - Intuition",
      link: "https://www.youtube.com/embed/JDOXKqF60RQ",
    },
    {
      id: 27,
      title: "Leaders in an Array",
      link: "https://www.youtube.com/embed/cHrH9CQ8pmY",
    },
    {
      id: 28,
      title: "Longest Consecutive Sequence",
      link: "https://www.youtube.com/embed/oO5uLE7EUlM",
    },
    {
      id: 29,
      title: "Set Matrix Zeroes",
      link: "https://www.youtube.com/embed/N0MgLvceX7M",
    },
    {
      id: 30,
      title: "Rotate Matrix/Image ",
      link: "https://www.youtube.com/embed/Z0R2u6gd3GU",
    },
    {
      id: 31,
      title: "Spiral Traversal of a Matrix",
      link: "https://www.youtube.com/embed/3Zv-s9UUrFM",
    },
    {
      id: 32,
      title: "Count Subarray sum Equals K",
      link: "https://www.youtube.com/embed/xvNwoz-ufXA",
    },
    {
      id: 33,
      title: "Pascal Triangle - Finding nCr",
      link: "https://www.youtube.com/embed/bR7mQgwQ_o8",
    },
    {
      id: 34,
      title: "Majority Element II",
      link: "https://www.youtube.com/embed/vwZj1K0e9U8",
    },
    {
      id: 35,
      title: "3 Sum",
      link: "https://www.youtube.com/embed/DhFh8Kw7ymk",
    },
    {
      id: 36,
      title: "4 Sum",
      link: "https://www.youtube.com/embed/eD95WRfh81c",
    },
    {
      id: 37,
      title: "Number of Subarrays with xor K",
      link: "https://www.youtube.com/embed/eZr-6p0B7ME",
    },
    {
      id: 38,
      title: "Merge Overlapping Intervals",
      link: "https://www.youtube.com/embed/IexN60k62jo",
    },
    {
      id: 39,
      title: "Merge Sorted Arrays ",
      link: "https://www.youtube.com/embed/n7uwj04E0I4",
    },
    {
      id: 40,
      title: "Find the Missing ",
      link: "https://www.youtube.com/embed/2D0D8HE6uak",
    },
    {
      id: 41,
      title: "Count Inversions in an Array",
      link: "https://www.youtube.com/embed/AseUmwVNaoY",
    },
    {
      id: 42,
      title: "Reverse Pairs ",
      link: "https://www.youtube.com/embed/0e4bZaP3MDI",
    },
    {
      id: 43,
      title: "Maximum Product Subarray",
      link: "https://www.youtube.com/embed/hnswaLJvr6g",
    },
    {
      id: 44,
      title: "Binary Search Intro ",
      link: "https://www.youtube.com/embed/MHf6awe89xw",
    },
    {
      id: 45,
      title: "Lower Bound and Upper Bound ",
      link: "https://www.youtube.com/embed/6zhGS79oQ4k",
    },
    {
      id: 46,
      title: "First and Last Occurrences y",
      link: "https://www.youtube.com/embed/hjR1IYVx9lY",
    },
    {
      id: 47,
      title: "Search Element in Rotated I",
      link: "https://www.youtube.com/embed/5qGrJbHhqFs",
    },
    {
      id: 48,
      title: "Search Element in Rotated II",
      link: "https://www.youtube.com/embed/w2G2W8l__pc",
    },
    {
      id: 49,
      title: "Minimum in Rotated  Array",
      link: "https://www.youtube.com/embed/nhEMDKMB44g",
    },
    {
      id: 50,
      title: "Find Rotated Array  Count",
      link: "https://www.youtube.com/embed/jtSiWTPLwd0",
    },
    {
      id: 51,
      title: "Single Element in Sorted Array",
      link: "https://www.youtube.com/embed/AZOmHuHadxQ",
    },
    {
      id: 52,
      title: "Find Peak Element",
      link: "https://www.youtube.com/embed/cXxmbemS6XM",
    },
    {
      id: 53,
      title: "Sqrt of a number Binary Search",
      link: "https://www.youtube.com/embed/Bsv3FPUX_BA",
    },
    {
      id: 54,
      title: "Find Nth root of an Integer",
      link: "https://www.youtube.com/embed/rjEJeYCasHs",
    },
    {
      id: 55,
      title: "Koko Eating Bananas",
      link: "https://www.youtube.com/embed/qyfekrNni90",
    },
    {
      id: 56,
      title: "Min Days to Make M Bouquetsh",
      link: "https://www.youtube.com/embed/TXAuxeYBTdg",
    },
    {
      id: 57,
      title: "Smallest Divisor Threshold ",
      link: "https://www.youtube.com/embed/UvBKTVaG6U8",
    },
    {
      id: 58,
      title: "Capacity to Ship Packages",
      link: "https://www.youtube.com/embed/MG-Ac4TAvTY",
    },
    {
      id: 59,
      title: "Kth Missing Positive Number",
      link: "https://www.youtube.com/embed/uZ0N_hZpyps",
    },
    {
      id: 60,
      title: "Aggressive Cows ",
      link: "https://www.youtube.com/embed/R_Mfw4ew-Vo",
    },
    {
      id: 61,
      title: "Allocate Books",
      link: "https://www.youtube.com/embed/Z0hwjftStI4",
    },
    {
      id: 62,
      title: "Painter",
      link: "https://www.youtube.com/embed/thUd_WJn6wk",
    },
    {
      id: 63,
      title: "Minimize Max Distance ",
      link: "https://www.youtube.com/embed/kMSBvlZ-_HA",
    },
    {
      id: 64,
      title: "Median of 2 Sorted Arrays ",
      link: "https://www.youtube.com/embed/C2rRzz-JDk8",
    },
    {
      id: 65,
      title: "Median of 2 Sorted Arrays",
      link: "https://www.youtube.com/embed/F9c7LpRZWVQ",
    },
    {
      id: 66,
      title: "K-th element of 2 sorted arrays",
      link: "https://www.youtube.com/embed/D1oDwWCq50g",
    },
    {
      id: 67,
      title: "Row with max number of 1s ",
      link: "https://www.youtube.com/embed/SCz-1TtYxDI",
    },
    {
      id: 68,
      title: "Search in a 2D Matrix - I",
      link: "https://www.youtube.com/embed/JXU4Akft7yk",
    },
    {
      id: 69,
      title: "Search in a 2D Matrix - II",
      link: "https://www.youtube.com/embed/9ZbB397jU4k",
    },
    {
      id: 70,
      title: "Find Peak Element-II",
      link: "https://www.youtube.com/embed/nGGp5XBzC4g",
    },
    {
      id: 71,
      title: "Median in a Row Wise",
      link: "https://www.youtube.com/embed/Q9wXgdxJq48",
    },
    {
      id: 72,
      title: "Introduction to Trees",
      link: "https://www.youtube.com/embed/_ANrF3FJm7I",
    },
    {
      id: 73,
      title: "Binary Tree Representation ",
      link: "https://www.youtube.com/embed/ctCpP0RFDFc",
    },
    {
      id: 74,
      title: "Binary Tree Representation",
      link: "https://www.youtube.com/embed/hyLyW7rP24I",
    },
    {
      id: 75,
      title: "Binary Tree Traversals ",
      link: "https://www.youtube.com/embed/jmy0LaGET1I",
    },
    {
      id: 76,
      title: "Preorder Traversal of Binary ",
      link: "https://www.youtube.com/embed/RlUu72JrOCQ",
    },
    {
      id: 77,
      title: "Inorder Traversal of Binary Tree",
      link: "https://www.youtube.com/embed/Z_NEgBgbRVI",
    },
    {
      id: 78,
      title: "Postorder Traversal ",
      link: "https://www.youtube.com/embed/COQOU6klsBg",
    },
    {
      id: 79,
      title: "Level Order Traversal",
      link: "https://www.youtube.com/embed/EoAsWbO7sqg",
    },
    {
      id: 80,
      title: "Iterative Preorder Traversal ",
      link: "https://www.youtube.com/embed/Bfqd8BsPVuw",
    },
    {
      id: 81,
      title: "Iterative Inorder Traversal",
      link: "https://www.youtube.com/embed/lxTGsVXjwvM",
    },
    {
      id: 82,
      title: "Iterative Postorder Traversal",
      link: "https://www.youtube.com/embed/2YBhNLodD8Q",
    },
    {
      id: 83,
      title: "Iterative Postorder Traversal 1 ",
      link: "https://www.youtube.com/embed/NzIGLLwZBS8",
    },
    {
      id: 84,
      title: "Pre In Post Traversals in One ",
      link: "https://www.youtube.com/embed/ySp2epYvgTE",
    },
    {
      id: 85,
      title: "Max Depth in Binary Tree ",
      link: "https://www.youtube.com/embed/eD3tmO66aBA",
    },
    {
      id: 86,
      title: "Check for Balanced Binary Tree ",
      link: "https://www.youtube.com/embed/Yt50Jfbd8Po",
    },
    {
      id: 87,
      title: "Diameter of Binary Tree",
      link: "https://www.youtube.com/embed/Rezetez59Nk",
    },
    {
      id: 88,
      title: "Max Path Sum in Binary Tree",
      link: "https://www.youtube.com/embed/WszrfSwMz58",
    },
    {
      id: 89,
      title: "Check if 2 trees are Identical",
      link: "https://www.youtube.com/embed/BhuvF_-PWS0",
    },
    {
      id: 90,
      title: "Zig-Zag or Spiral Traversal ",
      link: "https://www.youtube.com/embed/3OXWEdlIGl4",
    },
    {
      id: 91,
      title: "Boundary Traversal",
      link: "https://www.youtube.com/embed/0ca1nvR0be4",
    },
    {
      id: 92,
      title: "Vertical Order Traversal ",
      link: "https://www.youtube.com/embed/q_a6lpbKJdw",
    },
    {
      id: 93,
      title: "Top View of Binary Tree",
      link: "https://www.youtube.com/embed/Et9OCDNvJ78",
    },
    {
      id: 94,
      title: "Bottom View of Binary Tree",
      link: "https://www.youtube.com/embed/0FtVY6I4pB8",
    },
    {
      id: 95,
      title: "Right/Left View of Binary Tree",
      link: "https://www.youtube.com/embed/KV4mRzTjlAk",
    },
    {
      id: 96,
      title: "Check for Symmetrical",
      link: "https://www.youtube.com/embed/nKggNAiEpBE",
    },
    {
      id: 97,
      title: "Print Root to Node Path ",
      link: "https://www.youtube.com/embed/fmflMqVOC7k",
    },
    {
      id: 98,
      title: "Lowest Common Ancestor ",
      link: "https://www.youtube.com/embed/_-QHfMDde90",
    },
    {
      id: 99,
      title: "Max Width of Binary Tree",
      link: "https://www.youtube.com/embed/ZbybYvcVLks",
    },
    {
      id: 100,
      title: "Children Sum Property ",
      link: "https://www.youtube.com/embed/fnmisPM6cVo",
    },
    {
      id: 101,
      title: "Print Nodes at a Distance of K a",
      link: "https://www.youtube.com/embed/i9ORlEy6EsI",
    },
    {
      id: 102,
      title: "Min Time to BURN Binary Tree ",
      link: "https://www.youtube.com/embed/2r5wLmQfD6g",
    },
    {
      id: 103,
      title: "Count total Nodes Binary Tree",
      link: "https://www.youtube.com/embed/u-yWemKGWO0",
    },
    {
      id: 104,
      title: "Requirements Unique  ",
      link: "https://www.youtube.com/embed/9GMECGQgWrQ",
    },
    {
      id: 105,
      title: "Construct BST from  Traversal",
      link: "https://www.youtube.com/embed/aZNaLrVebKQ",
    },
    {
      id: 106,
      title: "Construct Binary Tree Traversal",
      link: "https://www.youtube.com/embed/LgLRTaEMRVc",
    },
    {
      id: 107,
      title: "Serialize and De-serialize Binary ",
      link: "https://www.youtube.com/embed/-YbXySKJsX8",
    },
    {
      id: 108,
      title: "Morris Traversal Preorder ",
      link: "https://www.youtube.com/embed/80Zug6D1_r4",
    },
    {
      id: 109,
      title: "Flatten Binary Tree to LL",
      link: "https://www.youtube.com/embed/sWf7k1x9XR4",
    },
    {
      id: 110,
      title: "Introduction to BST",
      link: "https://www.youtube.com/embed/p7-9UvDQZ3w",
    },
    {
      id: 111,
      title: "Search in BST",
      link: "https://www.youtube.com/embed/KcNt6v_56cc",
    },
    {
      id: 112,
      title: "Ceil in BST ",
      link: "https://www.youtube.com/embed/KSsk8AhdOZA",
    },
    {
      id: 113,
      title: "Floor in BST ",
      link: "https://www.youtube.com/embed/xm_W1ub-K-w",
    },
    {
      id: 114,
      title: "Insert Node in BST",
      link: "https://www.youtube.com/embed/FiFiNvM29ps",
    },
    {
      id: 115,
      title: "Delete Node in BST",
      link: "https://www.youtube.com/embed/kouxiP_H5WE",
    },
    {
      id: 116,
      title: "K-th Smallest/Largest in BST",
      link: "https://www.youtube.com/embed/9TJYWh0adfk",
    },
    {
      id: 117,
      title: "Check if Tree is BST",
      link: "https://www.youtube.com/embed/f-sj7I5oXEI",
    },
    {
      id: 118,
      title: "LCA in BST",
      link: "https://www.youtube.com/embed/cX_kPV_foZc",
    },
    {
      id: 119,
      title: "Construct BST from Preorder",
      link: "https://www.youtube.com/embed/UmJT3j26t1I",
    },
    {
      id: 120,
      title: "Inorder Successor/Predecessor ",
      link: "https://www.youtube.com/embed/SXKAD2svfmI",
    },
    {
      id: 121,
      title: "BST Iterator | O(H) Space",
      link: "https://www.youtube.com/embed/D2jMcmxU4bs",
    },
    {
      id: 122,
      title: "Two Sum In BST",
      link: "https://www.youtube.com/embed/ssL3sHwPeb4",
    },
    {
      id: 123,
      title: "Recover BST Correct with 2 Nodes",
      link: "https://www.youtube.com/embed/ZWGW7FminDM",
    },
    {
      id: 124,
      title: "Largest BST in Binary Tree",
      link: "https://www.youtube.com/embed/X0oXMdtUDwo",
    },
    {
      id: 125,
      title: "Graph Intro & Types",
      link: "https://www.youtube.com/embed/M3_pLsDdeuU",
    },
    {
      id: 126,
      title: "Graph Representation in C++",
      link: "https://www.youtube.com/embed/3oI-34aPMWM",
    },
    {
      id: 127,
      title: "Graph Representation in Java",
      link: "https://www.youtube.com/embed/OsNklbh9gYI",
    },
    {
      id: 128,
      title: "Connected Components",
      link: "https://www.youtube.com/embed/lea-Wl_uWXY",
    },
    {
      id: 129,
      title: "BFS in Graphs ",
      link: "https://www.youtube.com/embed/-tgVpUgsQ5k",
    },
    {
      id: 130,
      title: "DFS in Graphs ",
      link: "https://www.youtube.com/embed/Qzf1a--rhp8",
    },
    {
      id: 131,
      title: "Number of Provinces",
      link: "https://www.youtube.com/embed/ACzkVtewUYA",
    },
    {
      id: 132,
      title: "Number of Islands (C++ & Java)",
      link: "https://www.youtube.com/embed/muncqlKJrH0",
    },
    {
      id: 133,
      title: "Flood Fill Algorithm (C++ & Java)",
      link: "https://www.youtube.com/embed/C-2_uSRli8o",
    },
    {
      id: 134,
      title: "Rotten Oranges (C++ & Java)",
      link: "https://www.youtube.com/embed/yf3oUhkvqA0",
    },
    {
      id: 135,
      title: "Cycle in Undirected Graph (BFS)",
      link: "https://www.youtube.com/embed/BPlrALf1LDU",
    },
    {
      id: 136,
      title: "Cycle in Undirected Graph (DFS)",
      link: "https://www.youtube.com/embed/zQ3zgFypzX4",
    },
    {
      id: 137,
      title: "Distance in 0/1 Matrix )",
      link: "https://www.youtube.com/embed/edXdVwkYHF8",
    },
    {
      id: 138,
      title: "Surrounded Regions (C++ & Java)",
      link: "https://www.youtube.com/embed/BtdgAys4yMk",
    },
    {
      id: 139,
      title: "Number of Enclaves (C++ & Java)",
      link: "https://www.youtube.com/embed/rxKcepXQgU4",
    },
    {
      id: 140,
      title: "Distinct Islands (C++ & Java)",
      link: "https://www.youtube.com/embed/7zmgQSJghpo",
    },
    {
      id: 141,
      title: "Bipartite Graph (BFS)",
      link: "https://www.youtube.com/embed/-vu34sct1g8",
    },
    {
      id: 142,
      title: "Bipartite Graph",
      link: "https://www.youtube.com/embed/KG5YFfR0j8A",
    },
    {
      id: 143,
      title: "Cycle in Directed Graph",
      link: "https://www.youtube.com/embed/9twcmtQj4DU",
    },
    {
      id: 144,
      title: "Find Eventual Safe States",
      link: "https://www.youtube.com/embed/uRbJ1OF9aYM",
    },
    {
      id: 145,
      title: "Topological Sort Algorithm ",
      link: "https://www.youtube.com/embed/5lZ0iJMrUMk",
    },
    {
      id: 146,
      title: "Kahn's Algorithm",
      link: "https://www.youtube.com/embed/73sneFXuTEg",
    },
    {
      id: 147,
      title: "Cycle Detection in DG",
      link: "https://www.youtube.com/embed/iTBaI90lpDQ",
    },
    {
      id: 148,
      title: "Course Schedule I and II ",
      link: "https://www.youtube.com/embed/WAOfKpxYHR8",
    },
    {
      id: 149,
      title: "Find Eventual Safe States",
      link: "https://www.youtube.com/embed/2gtg3VsDGyc",
    },
    {
      id: 150,
      title: "Alien Dictionary (Topological Sort)",
      link: "https://www.youtube.com/embed/U3N_je7tWAs",
    },
    {
      id: 151,
      title: "Shortest Path in DAG",
      link: "https://www.youtube.com/embed/ZUFQfFaU-8U",
    },
    {
      id: 152,
      title: "Shortest Path in Undirected ",
      link: "https://www.youtube.com/embed/C4gxoTaI71U",
    },
    {
      id: 153,
      title: "Word Ladder I",
      link: "https://www.youtube.com/embed/tRPda0rcf8E",
    },
    {
      id: 154,
      title: "Word Ladder II ",
      link: "https://www.youtube.com/embed/DREutrv2XD0",
    },
    {
      id: 155,
      title: "Word Ladder II ",
      link: "https://www.youtube.com/embed/AD4SFl7tu7I",
    },
    {
      id: 156,
      title: "Dijkstra's Algorithm",
      link: "https://www.youtube.com/embed/V6H1qAeB-l4",
    },
    {
      id: 157,
      title: "Dijkstra's Algorithm ",
      link: "https://www.youtube.com/embed/PATgNiuTP20",
    },
    {
      id: 158,
      title: "Dijkstra's Algorithm ",
      link: "https://www.youtube.com/embed/3dINsjyfooY",
    },
    {
      id: 159,
      title: "Print Shortest Path ",
      link: "https://www.youtube.com/embed/rp1SMw7HSO8",
    },
    {
      id: 160,
      title: "Shortest Distance",
      link: "https://www.youtube.com/embed/U5Mw4eyUmw4",
    },
    {
      id: 161,
      title: "Path With Minimum Effort",
      link: "https://www.youtube.com/embed/0ytpZyiZFhA",
    },
    {
      id: 162,
      title: "Cheapest Flights Within K Stops",
      link: "https://www.youtube.com/embed/9XybHVqTHcQ",
    },
    {
      id: 163,
      title: "Minimum Multiplications ",
      link: "https://www.youtube.com/embed/_BvEJ3VIDWw",
    },
    {
      id: 164,
      title: "Number of Ways to Arrive ",
      link: "https://www.youtube.com/embed/_-0mx0SmYxA",
    },
    {
      id: 165,
      title: "Bellman Ford Algorithm",
      link: "https://www.youtube.com/embed/0vVofAhAYjc",
    },
    {
      id: 166,
      title: "Floyd Warshall Algorithm",
      link: "https://www.youtube.com/embed/YbY8cVwWAvw",
    },
    {
      id: 167,
      title: "City With the Smallest ",
      link: "https://www.youtube.com/embed/PwMVNSJ5SLI",
    },
    {
      id: 168,
      title: "Minimum Spanning Tree - Theory",
      link: "https://www.youtube.com/embed/ZSPjZuZWCME",
    },
    {
      id: 169,
      title: "Prim's Algorithm ",
      link: "https://www.youtube.com/embed/mJcZjjKzeqk",
    },
    {
      id: 170,
      title: "Disjoint Set ",
      link: "https://www.youtube.com/embed/aBxjDBC4M1U",
    },
    {
      id: 171,
      title: "Kruskal's Algorithm ",
      link: "https://www.youtube.com/embed/DMnDM_sxVig",
    },
    {
      id: 172,
      title: "Number of Provinces",
      link: "https://www.youtube.com/embed/ZGr5nX-Gi6Y",
    },
    {
      id: 173,
      title: "Number of Operations ",
      link: "https://www.youtube.com/embed/FYrl7iz9_ZU",
    },
    {
      id: 174,
      title: "Accounts Merge ",
      link: "https://www.youtube.com/embed/FMwpt_aQOGw",
    },
    {
      id: 175,
      title: "Number of Islands - II ",
      link: "https://www.youtube.com/embed/Rn6B-Q4SNyA",
    },
    {
      id: 176,
      title: "Making a Large Island ",
      link: "https://www.youtube.com/embed/lgiz0Oup6gM",
    },
    {
      id: 177,
      title: "Most Stones Removed ",
      link: "https://www.youtube.com/embed/OwMNX8SPavM",
    },
    {
      id: 178,
      title: "Strongly Connected Components",
      link: "https://www.youtube.com/embed/R6uoSjZ2imo",
    },
    {
      id: 179,
      title: "Bridges in Graph ",
      link: "https://www.youtube.com/embed/qrAub5z8FeA",
    },
    {
      id: 180,
      title: "Articulation Point in Graph",
      link: "https://www.youtube.com/embed/j1QDfU21iZk",
    },
    {
      id: 181,
      title: "Introduction to DP",
      link: "https://www.youtube.com/embed/tyB0ztf0DNY",
    },
    {
      id: 182,
      title: "Climbing Stairs ",
      link: "https://www.youtube.com/embed/mLfjzJsN8us",
    },
    {
      id: 183,
      title: "Frog Jump ",
      link: "https://www.youtube.com/embed/EgG3jsGoPvQ",
    },
    {
      id: 184,
      title: "Frog Jump with K Distancep",
      link: "https://www.youtube.com/embed/Kmh3rhyEtB8",
    },
    {
      id: 185,
      title: "Max Sum of NonAdjacent",
      link: "https://www.youtube.com/embed/GrMBfJNk_NY",
    },
    {
      id: 186,
      title: "House Robber 2",
      link: "https://www.youtube.com/embed/3WaxQMELSkw",
    },
    {
      id: 187,
      title: "Ninja's Training",
      link: "https://www.youtube.com/embed/AE39gJYuRog",
    },
    {
      id: 188,
      title: "Grid Unique Paths",
      link: "https://www.youtube.com/embed/sdE0A2Oxofw",
    },
    {
      id: 189,
      title: "Unique Paths 2 ",
      link: "https://www.youtube.com/embed/TmhpgXScLyY",
    },
    {
      id: 190,
      title: "Min Path Sum in Grid",
      link: "https://www.youtube.com/embed/_rgTlyky1uQ",
    },
    {
      id: 191,
      title: "Triangle",
      link: "https://www.youtube.com/embed/SrP-PiLSYC0",
    },
    {
      id: 192,
      title: "Min/Max Falling Path Sum ",
      link: "https://www.youtube.com/embed/N_aJ5qQbYA0",
    },
    {
      id: 193,
      title: "Cherry Pickup II",
      link: "https://www.youtube.com/embed/QGfn7JeXK54",
    },
    {
      id: 194,
      title: "Subset Sum Equals to Target",
      link: "https://www.youtube.com/embed/fWX9xDmIzRI",
    },
    {
      id: 195,
      title: "Partition Equal Subset Sum",
      link: "https://www.youtube.com/embed/7win3dcgo3k",
    },
    {
      id: 196,
      title: "Subset Min Sum",
      link: "https://www.youtube.com/embed/GS_OqZb2CWc",
    },
    {
      id: 197,
      title: "Count Subsets with Sum K",
      link: "https://www.youtube.com/embed/ZHyb-A2Mte4",
    },
    {
      id: 198,
      title: "Count Partitions Diff",
      link: "https://www.youtube.com/embed/zoilQD1kYSg",
    },
    {
      id: 199,
      title: "0/1 Knapsack Optimized",
      link: "https://www.youtube.com/embed/GqOmJHQZivw",
    },
    {
      id: 200,
      title: "Min Coins Infinite",
      link: "https://www.youtube.com/embed/myPeWb3Y68A",
    },
    {
      id: 201,
      title: "Target Sum Subseq",
      link: "https://www.youtube.com/embed/b3GD8263-PQ",
    },
    {
      id: 202,
      title: "Coin Change 2",
      link: "https://www.youtube.com/embed/HgyouUi11zk",
    },
    {
      id: 203,
      title: "Unbounded Knapsack",
      link: "https://www.youtube.com/embed/OgvOZ6OrJoY",
    },
    {
      id: 204,
      title: "Rod Cutting Opt",
      link: "https://www.youtube.com/embed/mO8XpGoJwuo",
    },
    {
      id: 205,
      title: "LCS 1D Opt",
      link: "https://www.youtube.com/embed/NPZn9jBrX8U",
    },
    {
      id: 206,
      title: "Print LCS",
      link: "https://www.youtube.com/embed/-zI4mrF2Pb4",
    },
    {
      id: 207,
      title: "Longest Common Substr",
      link: "https://www.youtube.com/embed/_wP9mWNPL5w",
    },
    {
      id: 208,
      title: "Longest Palindrome Subseq",
      link: "https://www.youtube.com/embed/6i_T5kkfv4A",
    },
    {
      id: 209,
      title: "Min Insertions Palindrome",
      link: "https://www.youtube.com/embed/xPBLEj41rFU",
    },
    {
      id: 210,
      title: "Min Ins/Del String Conv",
      link: "https://www.youtube.com/embed/yMnH0jrir0Q",
    },
    {
      id: 211,
      title: "Shortest Common Superseq",
      link: "https://www.youtube.com/embed/xElxAuBcvsU",
    },
    {
      id: 212,
      title: "Distinct Subsequences",
      link: "https://www.youtube.com/embed/nVG7eTiD2bY",
    },
    {
      id: 213,
      title: "Edit Distance",
      link: "https://www.youtube.com/embed/fJaKO8FbDdo",
    },
    {
      id: 214,
      title: "Wildcard Matching",
      link: "https://www.youtube.com/embed/ZmlQ3vgAOMo",
    },
    {
      id: 215,
      title: "Buy/Sell Stock II",
      link: "https://www.youtube.com/embed/nGJmxkUJQGs",
    },
    {
      id: 216,
      title: "Buy/Sell Stocks III",
      link: "https://www.youtube.com/embed/-uQGzhYj8BQ",
    },
    {
      id: 217,
      title: "Buy/Sell Stock IV",
      link: "https://www.youtube.com/embed/IV1dHbk5CDc",
    },
    {
      id: 218,
      title: "Buy/Sell Stocks Cooldown",
      link: "https://www.youtube.com/embed/IGIe46xw3YY",
    },
    {
      id: 219,
      title: "Buy/Sell Stocks Fee",
      link: "https://www.youtube.com/embed/k4eK-vEmnKg",
    },
    {
      id: 220,
      title: "LIS Memoization",
      link: "https://www.youtube.com/embed/ekcwMsSIzVc",
    },
    {
      id: 221,
      title: "Print LIS",
      link: "https://www.youtube.com/embed/IFfYfonAFGc",
    },
    {
      id: 222,
      title: "LIS Binary Search",
      link: "https://www.youtube.com/embed/on2hvxBXJH4",
    },
    {
      id: 223,
      title: "Largest Divisible Subset",
      link: "https://www.youtube.com/embed/gDuZwBW9VvM",
    },
    {
      id: 224,
      title: "Longest String Chain",
      link: "https://www.youtube.com/embed/YY8iBaYcc4g",
    },
    {
      id: 225,
      title: "Longest Bitonic Subseq",
      link: "https://www.youtube.com/embed/y4vN0WNdrlg",
    },
    {
      id: 226,
      title: "Num of LIS",
      link: "https://www.youtube.com/embed/cKVl1TFdNXg",
    },
    {
      id: 227,
      title: "Matrix Chain Multiplication",
      link: "https://www.youtube.com/embed/vRVfmbCFW7Y",
    },
    {
      id: 228,
      title: "Matrix Chain Multiplication BU",
      link: "https://www.youtube.com/embed/pDCXsbAw5Cg",
    },
    {
      id: 229,
      title: "Min Cost Cut Stick",
      link: "https://www.youtube.com/embed/xwomavsC86c",
    },
    {
      id: 230,
      title: "Burst Balloons",
      link: "https://www.youtube.com/embed/Yz4LlDSlkns",
    },
    {
      id: 231,
      title: "Bool Expr True",
      link: "https://www.youtube.com/embed/MM7fXopgyjw",
    },
    {
      id: 232,
      title: "Palindrome Part II",
      link: "https://www.youtube.com/embed/_H8V5hJUGd0",
    },
    {
      id: 233,
      title: "Part Array Max Sum",
      link: "https://www.youtube.com/embed/PhWWJmaKfMc",
    },
    {
      id: 234,
      title: "Max Rect Area 1s",
      link: "https://www.youtube.com/embed/tOylVCugy9k",
    },
    {
      id: 235,
      title: "Count Square Submatrices",
      link: "https://www.youtube.com/embed/auS1fynpnjo",
    },
    {
      id: 236,
      title: "LL Introduction",
      link: "https://www.youtube.com/embed/Nq7ok-OyEpg",
    },
    {
      id: 237,
      title: "LL Delete/Insert",
      link: "https://www.youtube.com/embed/VaECK03Dz-g",
    },
    {
      id: 238,
      title: "DLL Introduction",
      link: "https://www.youtube.com/embed/0eKMU10uEDI",
    },
    {
      id: 239,
      title: "Reverse DLL",
      link: "https://www.youtube.com/embed/u3WUW2qe6ww",
    },
    {
      id: 240,
      title: "Add 2 Num in LL",
      link: "https://www.youtube.com/embed/XmRrGzR6udg",
    },
    {
      id: 241,
      title: "Odd Even LL",
      link: "https://www.youtube.com/embed/qf6qp7GzD5Q",
    },
    {
      id: 242,
      title: "Sort 0s, 1s, 2s LL",
      link: "https://www.youtube.com/embed/gRII7LhdJWc",
    },
    {
      id: 243,
      title: "Remove Nth Node",
      link: "https://www.youtube.com/embed/3kMKYQ2wNIU",
    },
    {
      id: 244,
      title: "Reverse LL Iter/Rec",
      link: "https://www.youtube.com/embed/D2vI2DNJGd8",
    },
    {
      id: 245,
      title: "LL Palindrome Check",
      link: "https://www.youtube.com/embed/lRY_G-u_8jk",
    },
    {
      id: 246,
      title: "Add 1 to Num in LL",
      link: "https://www.youtube.com/embed/aXQWhbvT3w0",
    },
    {
      id: 247,
      title: "Intersection Point LL",
      link: "https://www.youtube.com/embed/0DYoPz2Tpt4",
    },
    {
      id: 248,
      title: "Middle Elem LL",
      link: "https://www.youtube.com/embed/7LjQ57RqgEc",
    },
    {
      id: 249,
      title: "Detect Loop LL",
      link: "https://www.youtube.com/embed/wiOo4DC5GGA",
    },
    {
      id: 250,
      title: "Length of Loop LL",
      link: "https://www.youtube.com/embed/I4g1qbkTPus",
    },
    {
      id: 251,
      title: "Delete Middle Node",
      link: "https://www.youtube.com/embed/ePpV-_pfOeI",
    },
    {
      id: 252,
      title: "Start of Loop LL",
      link: "https://www.youtube.com/embed/2Kd0KKmmHFc",
    },
    {
      id: 253,
      title: "Delete All Occur DLL",
      link: "https://www.youtube.com/embed/Mh0NH_SD92k",
    },
    {
      id: 254,
      title: "Pairs with Sum DLL",
      link: "https://www.youtube.com/embed/YitR4dQsddE",
    },
    {
      id: 255,
      title: "Remove Duplicates DLL",
      link: "https://www.youtube.com/embed/YJKVTnOJXSY",
    },
    {
      id: 256,
      title: "Reverse Nodes K Group",
      link: "https://www.youtube.com/embed/lIar1skcQYI",
    },
    {
      id: 257,
      title: "Rotate LinkedList",
      link: "https://www.youtube.com/embed/uT7YI7XbTY8",
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
          Striver
        </span>{" "}
        A2Z Series DSA
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

export default StriverDsa;

import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const PythonWs = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Python Introduction",
      link: "https://www.youtube.com/embed/OZIRAavoGng",
    },
    {
      id: 2,
      title: "Python Installation",
      link: "https://www.youtube.com/embed/fS1Lh5TwWN8",
    },
    {
      id: 3,
      title: "Pycharm Installation",
      link: "https://www.youtube.com/embed/18oZPfHYfeE",
    },
    {
      id: 4,
      title: "First Python Project",
      link: "https://www.youtube.com/embed/MfGfMWsvgCc",
    },
    {
      id: 5,
      title: "Python Variables",
      link: "https://www.youtube.com/embed/o-pRdr8IMWg",
    },
    {
      id: 6,
      title: "String Concatenation",
      link: "https://www.youtube.com/embed/ig3fRo9hlMo",
    },
    {
      id: 7,
      title: "Python Operators",
      link: "https://www.youtube.com/embed/iyOVgQDkx1E",
    },
    {
      id: 8,
      title: "Assignment Operators",
      link: "https://www.youtube.com/embed/rnK45SKWwVg",
    },
    {
      id: 9,
      title: "Comparison Operators",
      link: "https://www.youtube.com/embed/Aamih6LtMNM",
    },
    {
      id: 10,
      title: "Logical Operators",
      link: "https://www.youtube.com/embed/TeCjHTYWNAw",
    },
    {
      id: 11,
      title: "Membership Operators",
      link: "https://www.youtube.com/embed/a0m0T5PUhks",
    },
    {
      id: 12,
      title: "Identity Operators",
      link: "https://www.youtube.com/embed/i-zk60NvYRM",
    },
    {
      id: 13,
      title: "Bitwise Operators",
      link: "https://www.youtube.com/embed/4axKA6n8zLQ",
    },
    {
      id: 14,
      title: "Python Data Types",
      link: "https://www.youtube.com/embed/eaxU2Dmo8uw",
    },
    {
      id: 15,
      title: "User Input & Type Casting",
      link: "https://www.youtube.com/embed/lG0yIUsevyY",
    },
    {
      id: 16,
      title: "Conditional Statements",
      link: "https://www.youtube.com/embed/khi-3MJEXG0",
    },
    {
      id: 17,
      title: "Python Calculator",
      link: "https://www.youtube.com/embed/iDboNXGzQug",
    },
    {
      id: 18,
      title: "For Loop",
      link: "https://www.youtube.com/embed/QE6RJWyFB1M",
    },
    {
      id: 19,
      title: "While Loop",
      link: "https://www.youtube.com/embed/z59-VOEonMM",
    },
    {
      id: 20,
      title: "String Indexing & Slicing",
      link: "https://www.youtube.com/embed/esnhngyUMRc",
    },
    {
      id: 21,
      title: "String Iteration",
      link: "https://www.youtube.com/embed/1AHisr54Zyc",
    },
    {
      id: 22,
      title: "String Functions",
      link: "https://www.youtube.com/embed/tUBJeSyzuG4",
    },
    {
      id: 23,
      title: "More String Functions",
      link: "https://www.youtube.com/embed/fHXG7J-7UMk",
    },
    {
      id: 24,
      title: "Python Functions",
      link: "https://www.youtube.com/embed/PUAGiw3ZjAg",
    },
    {
      id: 25,
      title: "String Format",
      link: "https://www.youtube.com/embed/kgE8LsjVBQQ",
    },
    {
      id: 26,
      title: "Create List",
      link: "https://www.youtube.com/embed/SkFidEd3f_0",
    },
    {
      id: 27,
      title: "List Iteration",
      link: "https://www.youtube.com/embed/0zApRpidU58",
    },
    {
      id: 28,
      title: "List Comprehension",
      link: "https://www.youtube.com/embed/OYnZETHs-4M",
    },
    {
      id: 29,
      title: "Delete Element from List",
      link: "https://www.youtube.com/embed/NfXhmeVl6rQ",
    },
    {
      id: 30,
      title: "List Functions",
      link: "https://www.youtube.com/embed/8O08w9__0nw",
    },
    {
      id: 31,
      title: "Zip Function",
      link: "https://www.youtube.com/embed/101WAhV1atg",
    },
    {
      id: 32,
      title: "Convert String to List",
      link: "https://www.youtube.com/embed/r6CcB5BZt0k",
    },
    {
      id: 33,
      title: "Use List as Stack and Queue",
      link: "https://www.youtube.com/embed/KQDI4-Mc_c0",
    },
    {
      id: 34,
      title: "Introduction to Dictionary",
      link: "https://www.youtube.com/embed/xhjdfmu0FVA",
    },
    {
      id: 35,
      title: "Functions and Methods",
      link: "https://www.youtube.com/embed/SMBw812BLOo",
    },
    {
      id: 36,
      title: "Python Nested Dictionary",
      link: "https://www.youtube.com/embed/xD_URwm5Pug",
    },
    {
      id: 37,
      title: "Introduction to Tuple",
      link: "https://www.youtube.com/embed/nlyQTx3cq9w",
    },
    {
      id: 38,
      title: "Introduction to Sets",
      link: "https://www.youtube.com/embed/5S8VNzyUZl4",
    },
    {
      id: 39,
      title: "Functions in Python",
      link: "https://www.youtube.com/embed/DsCazsOPHSc",
    },
    {
      id: 40,
      title: "Modules in Python",
      link: "https://www.youtube.com/embed/NJ_JTzpjKE8",
    },
    {
      id: 41,
      title: "Math Modules in Python",
      link: "https://www.youtube.com/embed/vrCpsUMh368",
    },
    {
      id: 42,
      title: "Random Modules in Python",
      link: "https://www.youtube.com/embed/0V8VTMol7Vc",
    },
    {
      id: 43,
      title: "Datetime Modules in Python",
      link: "https://www.youtube.com/embed/V9XGDk1oF3k",
    },
    {
      id: 44,
      title: "Random Number Guessing Game",
      link: "https://www.youtube.com/embed/--K5rQzXN3Y",
    },
    {
      id: 45,
      title: "Rock, Paper, Scissor Game",
      link: "https://www.youtube.com/embed/gQp8ZyqIANs",
    },
    {
      id: 46,
      title: "Introduction to Pickle Module",
      link: "https://www.youtube.com/embed/Kcds00lK4Dw",
    },
    {
      id: 47,
      title: "JSON and Create JSON Files",
      link: "https://www.youtube.com/embed/tKYefJqtvCA",
    },
    {
      id: 48,
      title: "Converting JSON Data ",
      link: "https://www.youtube.com/embed/mVX5SsK1jNE",
    },
    {
      id: 49,
      title: "Read and Write JSON File",
      link: "https://www.youtube.com/embed/n3VFIqpDH6o",
    },
    {
      id: 50,
      title: "Object Oriented Programming ",
      link: "https://www.youtube.com/embed/bjM1JjGzvb8",
    },
    {
      id: 51,
      title: "Methods and Constructors",
      link: "https://www.youtube.com/embed/qz_bnx84Xe0",
    },
    {
      id: 52,
      title: "Inheritance in Python",
      link: "https://www.youtube.com/embed/w2jV9qZ6PGo",
    },
    {
      id: 53,
      title: "Encapsulation in Python",
      link: "https://www.youtube.com/embed/3V90qEND-1o",
    },
    {
      id: 54,
      title: "Getter and Setter Method",
      link: "https://www.youtube.com/embed/Tufla8KMz9k",
    },
    {
      id: 55,
      title: "Polymorphism in Python",
      link: "https://www.youtube.com/embed/drb9efyRMOM",
    },
    {
      id: 56,
      title: "Overloading and Overriding",
      link: "https://www.youtube.com/embed/mYNVbuzA7sk",
    },
    {
      id: 57,
      title: "Bike Rental System Project",
      link: "https://www.youtube.com/embed/rkgm4uIUnOI",
    },
    {
      id: 58,
      title: "Python Errors and Exceptions",
      link: "https://www.youtube.com/embed/htFhMU4COSo",
    },
    {
      id: 59,
      title: "Exception Handling in Python",
      link: "https://www.youtube.com/embed/fR8JUR3VEPU",
    },
    {
      id: 60,
      title: "SQLite Create and Connection",
      link: "https://www.youtube.com/embed/ng8L5n6r4kw",
    },
    {
      id: 61,
      title: "Install DB Browser for SQLite",
      link: "https://www.youtube.com/embed/Q8r6tnH74iI",
    },
    {
      id: 62,
      title: "Insert Query",
      link: "https://www.youtube.com/embed/X2wDnnZY0d4",
    },
    {
      id: 63,
      title: "Select Query",
      link: "https://www.youtube.com/embed/aRIFXl1Rw_k",
    },
    {
      id: 64,
      title: "Delete Query",
      link: "https://www.youtube.com/embed/tCfL5NGaUFU",
    },
    {
      id: 65,
      title: "Update Query",
      link: "https://www.youtube.com/embed/vvOX83gCk2Q",
    },
    {
      id: 66,
      title: "SQLite WHERE Clause",
      link: "https://www.youtube.com/embed/z66E6QHeQBs",
    },
    {
      id: 67,
      title: "SQLite JOIN",
      link: "https://www.youtube.com/embed/BdwXkvHDFbU",
    },
    {
      id: 68,
      title: "Install XAMPP on Windows",
      link: "https://www.youtube.com/embed/1r_84h740vU",
    },
    {
      id: 69,
      title: "Create MySQL Database",
      link: "https://www.youtube.com/embed/-QmLADaeADU",
    },
    {
      id: 70,
      title: "MySql Data Types",
      link: "https://www.youtube.com/embed/al_--zg3sgw",
    },
    {
      id: 71,
      title: "Create Table in MySql",
      link: "https://www.youtube.com/embed/Ymg5E9r_sP0",
    },
    {
      id: 72,
      title: "Insert Query in MySql",
      link: "https://www.youtube.com/embed/0nrwPrcKTwY",
    },
    {
      id: 73,
      title: "Select Query in MySql",
      link: "https://www.youtube.com/embed/Z4TS22YcWXo",
    },
    {
      id: 74,
      title: "Delete Query in MySql",
      link: "https://www.youtube.com/embed/h4x4YBr7t6g",
    },
    {
      id: 75,
      title: "Update Query in MySql",
      link: "https://www.youtube.com/embed/ZNtYKfBuFsk",
    },
    {
      id: 76,
      title: "Order by and Limit in MySql",
      link: "https://www.youtube.com/embed/cHAHssIIY40",
    },
    {
      id: 77,
      title: "Searching and Filter Data in MySql",
      link: "https://www.youtube.com/embed/KrlHT1HasJ8",
    },
    {
      id: 78,
      title: "MYSQL JOINS Tutorial",
      link: "https://www.youtube.com/embed/J94vaPt1aZk",
    },
    {
      id: 79,
      title: "MySql INNER JOIN",
      link: "https://www.youtube.com/embed/aU7wSAiBAVM",
    },
    {
      id: 80,
      title: "MySql LEFT JOIN",
      link: "https://www.youtube.com/embed/Uar5lA5pGfc",
    },
    {
      id: 81,
      title: "MySql RIGHT JOIN",
      link: "https://www.youtube.com/embed/ikBKDeYecJc",
    },
    {
      id: 82,
      title: "MySql EQUI JOIN",
      link: "https://www.youtube.com/embed/KChZGCP67gE",
    },
    {
      id: 83,
      title: "MySQL Self Join",
      link: "https://www.youtube.com/embed/eSBSY32oWFI",
    },
    {
      id: 84,
      title: "MySQL BETWEEN Operators",
      link: "https://www.youtube.com/embed/UgaUZIy_E3I",
    },
    {
      id: 85,
      title: "MySQL MAX and MIN Functions",
      link: "https://www.youtube.com/embed/xfLQ2aCFAFE",
    },
    {
      id: 86,
      title: "MySQL GROUP BY Statement",
      link: "https://www.youtube.com/embed/3cVnndDacfU",
    },
    {
      id: 87,
      title: "MySQL Distinct Keyword",
      link: "https://www.youtube.com/embed/Oxj2D0pAVTk",
    },
    {
      id: 88,
      title: "MYSQL SUM() Function",
      link: "https://www.youtube.com/embed/9EzG5vCgbcU",
    },
    {
      id: 89,
      title: "MySQL AVG() Function",
      link: "https://www.youtube.com/embed/il6Ldj2N3oA",
    },
    {
      id: 90,
      title: "MySQL Count Function",
      link: "https://www.youtube.com/embed/xu-NslmgFmk",
    },
    {
      id: 91,
      title: "MySQL IN or NOT IN Operators",
      link: "https://www.youtube.com/embed/NcoZ5AoCj14",
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
         Ws Cube Tech
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
export default PythonWs;

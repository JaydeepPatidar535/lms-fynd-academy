import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const JavascriptCwh = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction to JavaScript + Setup",
      link: "https://www.youtube.com/embed/ER9SspLe4Hg",
    },
    {
      id: 2,
      title: "Variables in JavaScript",
      link: "https://www.youtube.com/embed/Q4p8vRQX8uY",
    },
    {
      id: 3,
      title: "const, let and var in JavaScript",
      link: "https://www.youtube.com/embed/Icev9Oxf0WA",
    },
    {
      id: 4,
      title: "Primitives and Objects in JavaScript",
      link: "https://www.youtube.com/embed/qpU3WIqRz9I",
    },
    {
      id: 5,
      title: "JavaScript Chapter 1 - Practice Set",
      link: "https://www.youtube.com/embed/vA-AAeqkpxM",
    },
    {
      id: 6,
      title: "JavaScript Operators, Expressions",
      link: "https://www.youtube.com/embed/lsV8JQgSW1s",
    },
    {
      id: 7,
      title: "Conditional expressions in JavaScript",
      link: "https://www.youtube.com/embed/s5Lu4QTjeL0",
    },
    {
      id: 8,
      title:
        "Operators and Conditionals",
      link: "https://www.youtube.com/embed/W77qmqrhCcA",
    },
    {
      id: 9,
      title: "For Loops in JavaScript",
      link: "https://www.youtube.com/embed/XKyyM1VWtUE",
    },
    {
      id: 10,
      title: "While Loops in JavaScript",
      link: "https://www.youtube.com/embed/drEjyBSu33w",
    },
    {
      id: 11,
      title: "Functions in JavaScript",
      link: "https://www.youtube.com/embed/a_gwOwkbhZ0",
    },
    {
      id: 12,
      title: "Practice Set on Loops and Functions",
      link: "https://www.youtube.com/embed/ZAOipfPnb3s",
    },
    {
      id: 13,
      title: "Introduction to Strings",
      link: "https://www.youtube.com/embed/Yafji9PB1lM",
    },
    {
      id: 14,
      title: "JavaScript String Methods",
      link: "https://www.youtube.com/embed/8yg4RUEnaIk",
    },
    {
      id: 15,
      title: "Practice Set on Strings",
      link: "https://www.youtube.com/embed/Wj3wGP1g5z8",
    },
    {
      id: 16,
      title: "Introduction to Arrays",
      link: "https://www.youtube.com/embed/a_Bz5ciBHQ0",
    },
    {
      id: 17,
      title: "JavaScript Array Methods",
      link: "https://www.youtube.com/embed/BLIrBThPTXc",
    },
    {
      id: 18,
      title: "JavaScript Array Methods",
      link: "https://www.youtube.com/embed/QxA-KB2lKgk",
    },
    {
      id: 19,
      title: "Using Loops With Arrays",
      link: "https://www.youtube.com/embed/YWyr7Nug2oc",
    },
    {
      id: 20,
      title: "Map, Filter & Reduce in JavaScript",
      link: "https://www.youtube.com/embed/bAUMuuRH99o",
    },
    {
      id: 21,
      title: "Practice Set on Arrays",
      link: "https://www.youtube.com/embed/Yeic3j6uli0",
    },
    {
      id: 22,
      title: "Guess the Number",
      link: "https://www.youtube.com/embed/DmjyrPwPg2g",
    },
    {
      id: 23,
      title: "JavaScript in the Browser",
      link: "https://www.youtube.com/embed/ImFeTcWCsR0",
    },
    {
      id: 24,
      title: "JavaScript Script Tag",
      link: "https://www.youtube.com/embed/hS2vw0qVt0c",
    },
    {
      id: 25,
      title: "JavaScript Console Object",
      link: "https://www.youtube.com/embed/1WNtGvrLisg",
    },
    {
      id: 26,
      title: "Solution & Shoutouts",
      link: "https://www.youtube.com/embed/Fc1g7CL4nwI",
    },
    {
      id: 27,
      title: "JavaScript alert, prompt & confirm",
      link: "https://www.youtube.com/embed/540NIdeKW3I",
    },
    {
      id: 28,
      title: "DOM, BOM & Window Object",
      link: "https://www.youtube.com/embed/xOCzjgjedRc",
    },
    {
      id: 29,
      title: "JavaScript Chapter 6",
      link: "https://www.youtube.com/embed/HzWhsTl10mw",
    },
    {
      id: 30,
      title: "Snake, Water and Gun",
      link: "https://www.youtube.com/embed/EsDLdN7V6mw",
    },
    {
      id: 31,
      title: "Walking the DOM",
      link: "https://www.youtube.com/embed/Rhj6KWFw7AA",
    },
    {
      id: 32,
      title: "Accessing Children of an Element",
      link: "https://www.youtube.com/embed/BadZyp7tztw",
    },
    {
      id: 33,
      title: "Parents & Siblings of an Element",
      link: "https://www.youtube.com/embed/IMLRMFgrcig",
    },
    {
      id: 34,
      title: "Element only Navigation",
      link: "https://www.youtube.com/embed/78VMefnkMcM",
    },
    {
      id: 35,
      title: "Table Navigation",
      link: "https://www.youtube.com/embed/4e5L4i-mmxg",
    },
    {
      id: 36,
      title: "Searching the DOM",
      link: "https://www.youtube.com/embed/oY036JqESt0",
    },
    {
      id: 37,
      title: "matches, closest and contains",
      link: "https://www.youtube.com/embed/CMeeHa7XW3s",
    },
    {
      id: 38,
      title: "Chapter 7 - Practice Set",
      link: "https://www.youtube.com/embed/i5bX5qNOSoo",
    },
    {
      id: 39,
      title: "Exercise 2: Solution & Shoutouts",
      link: "https://www.youtube.com/embed/FZ-RyUQCjUY",
    },
    {
      id: 40,
      title: "Exercise 3 - Tell me a Joke",
      link: "https://www.youtube.com/embed/-AseOcQPHmo",
    },
    {
      id: 41,
      title: "innerHTML, outerHTML",
      link: "https://www.youtube.com/embed/M8AUk6gDe2c",
    },
    {
      id: 42,
      title: "HTML Attributes and methods",
      link: "https://www.youtube.com/embed/viUbOtj2o_4",
    },
    {
      id: 43,
      title: "HTML Insertion Methods",
      link: "https://www.youtube.com/embed/wyAZuYatCOI",
    },
    {
      id: 44,
      title: "insertAdjacentHTML,",
      link: "https://www.youtube.com/embed/zFU2kQJZO5k",
    },
    {
      id: 45,
      title: "Changing HTML Classes ",
      link: "https://www.youtube.com/embed/_YQyVnPI_Og",
    },
    {
      id: 46,
      title: "setInterval and setTimeout",
      link: "https://www.youtube.com/embed/Ruq4sEw9h_8",
    },
    {
      id: 47,
      title: "Introduction to Browser Events",
      link: "https://www.youtube.com/embed/Y3f_ih-2jGk",
    },
    {
      id: 48,
      title: "Handling Browser Events",
      link: "https://www.youtube.com/embed/rFq0HVOdDo4",
    },
    {
      id: 49,
      title: "Chapter 8 - Practice Set",
      link: "https://www.youtube.com/embed/-6rvoQi2YtI",
    },
    {
      id: 50,
      title: "Exercise 3:Solution ",
      link: "https://www.youtube.com/embed/6-6DLlIx4mE",
    },
    {
      id: 51,
      title: "Clock using JavaScript",
      link: "https://www.youtube.com/embed/aEc6AUFkCo8",
    },
    {
      id: 52,
      title: "Introduction to Callbacks",
      link: "https://www.youtube.com/embed/IJlGpI6l92U",
    },
    {
      id: 53,
      title: "Callback Hell & Pyramid of Doom",
      link: "https://www.youtube.com/embed/fIPJUteOdLc",
    },
    {
      id: 54,
      title: "Introduction to Promises",
      link: "https://www.youtube.com/embed/Dadlf6YsTHA",
    },
    {
      id: 55,
      title: "Promise .then() and .catch()",
      link: "https://www.youtube.com/embed/Fsv4IEH-4Lw",
    },
    {
      id: 56,
      title: "Promise Chaining .then() calls",
      link: "https://www.youtube.com/embed/RPLt3TiH6zg",
    },
    {
      id: 57,
      title: "Multiple Handlers to a Promise",
      link: "https://www.youtube.com/embed/fttMS3hFzEg",
    },
    {
      id: 58,
      title: "The Promise API",
      link: "https://www.youtube.com/embed/xJQemfYXEf8",
    },
    {
      id: 59,
      title: "Async/Await in JavaScript",
      link: "https://www.youtube.com/embed/bLre6Uf4Op0",
    },
    {
      id: 60,
      title: "Error Handling: try and catch",
      link: "https://www.youtube.com/embed/WRNBQCl_cPU",
    },
    {
      id: 61,
      title: "The Error Object & Custom Errors",
      link: "https://www.youtube.com/embed/uOQBGKfldIg",
    },
    {
      id: 62,
      title: "The Finally Clause",
      link: "https://www.youtube.com/embed/rWCGC2NWjcc",
    },
    {
      id: 63,
      title: "Chapter 9 - Practice Set",
      link: "https://www.youtube.com/embed/y1j2FL9d31w",
    },
    {
      id: 64,
      title: "Exercise 4: Solutions",
      link: "https://www.youtube.com/embed/iVodxHfAqd0",
    },
    {
      id: 65,
      title: "Exercise 5: Hackerman",
      link: "https://www.youtube.com/embed/Ag4MDWEWHR8",
    },
    {
      id: 66,
      title: "Fetch API",
      link: "https://www.youtube.com/embed/Atq7VjVbaA8",
    },
    {
      id: 67,
      title: "Sending POST request  Fetch API",
      link: "https://www.youtube.com/embed/57SrCBCxdgc",
    },
    {
      id: 68,
      title: "Cookies in JavaScript",
      link: "https://www.youtube.com/embed/sHrwueeeMmY",
    },
    {
      id: 69,
      title: "localStorage & related methods",
      link: "https://www.youtube.com/embed/A98SPz5XLwY",
    },
    {
      id: 70,
      title: "sessionStorage & related methods",
      link: "https://www.youtube.com/embed/rfSJeox61vA",
    },
    {
      id: 71,
      title: "Chapter 10 - Practice Set",
      link: "https://www.youtube.com/embed/S09Mm2gJlwI",
    },
    {
      id: 72,
      title: "Exercise 5: Solutions ",
      link: "https://www.youtube.com/embed/jmaniHHrg-0",
    },
    {
      id: 73,
      title: "Exercise 6: Todo List",
      link: "https://www.youtube.com/embed/hKESY_D2LI0",
    },
    {
      id: 74,
      title: "Introduction to Oop",
      link: "https://www.youtube.com/embed/fe6L8bNC_Yw",
    },
    {
      id: 75,
      title: "Protypes and __proto__ ",
      link: "https://www.youtube.com/embed/eDxrLEQbLv0",
    },
    {
      id: 76,
      title: "Classes and Objects ",
      link: "https://www.youtube.com/embed/7RpdfkSyJfU",
    },
    {
      id: 77,
      title: "Constructors",
      link: "https://www.youtube.com/embed/0E2akQ5E-5Y",
    },
    {
      id: 78,
      title: "Inheritance & extends Keyword",
      link: "https://www.youtube.com/embed/9loYq8W8rsg",
    },
    {
      id: 79,
      title: "Constructors in JavaScript",
      link: "https://www.youtube.com/embed/M0sXes8zWko",
    },
    {
      id: 80,
      title: "Constructors in JavaScript",
      link: "https://www.youtube.com/embed/Rpd4FlhytnE",
    },
    {
      id: 81,
      title: "Static Method in JavaScript",
      link: "https://www.youtube.com/embed/__l6ZOPaijs",
    },
    {
      id: 82,
      title: "getters,setters,instanceOf Operator",
      link: "https://www.youtube.com/embed/NsF4BrRfOGM",
    },
    {
      id: 83,
      title: "Chapter 11 Practice Set",
      link: "https://www.youtube.com/embed/-mnNOl5rjPM",
    },
    {
      id: 84,
      title: "Exercise 6 - Solution",
      link: "https://www.youtube.com/embed/93lSwnzCaws",
    },
    {
      id: 85,
      title: "Exercise 7-Password Generator",
      link: "https://www.youtube.com/embed/iLHad0KWJ5g",
    },
    {
      id: 86,
      title: "IIFE ",
      link: "https://www.youtube.com/embed/oR0yIjzfxQw",
    },
    {
      id: 87,
      title: "Destructuring assignment ",
      link: "https://www.youtube.com/embed/_BsE5kmJk6Q",
    },
    {
      id: 88,
      title: "Local and Global Scope ",
      link: "https://www.youtube.com/embed/CNk33k5nScg",
    },
    {
      id: 89,
      title: "Hoisting in JavaScript",
      link: "https://www.youtube.com/embed/_FmHfOqJ4SY",
    },
    {
      id: 90,
      title: "Closures in JavaScript",
      link: "https://www.youtube.com/embed/Ze-JGb4I9zU",
    },
    {
      id: 91,
      title: "Arrow Functions Revisited",
      link: "https://www.youtube.com/embed/bJKjtC9MnZ8",
    },
    {
      id: 92,
      title: "Chapter 12 - Practice Set",
      link: "https://www.youtube.com/embed/bkl5xWLr3fg",
    },
    {
      id: 93,
      title: "Exercise 7 -Password Generator",
      link: "https://www.youtube.com/embed/Rz_jCevUqho",
    },
    {
      id: 94,
      title: "Exercise 8 -Alarm Clock",
      link: "https://www.youtube.com/embed/vUbuxjF9crY",
    },
    {
      id: 95,
      title: "JavaScript on the Server",
      link: "https://www.youtube.com/embed/CG-7dYcozwI",
    },
    {
      id: 96,
      title: "npm and Node.js Packages",
      link: "https://www.youtube.com/embed/nSFe1-kpfbQ",
    },
    {
      id: 97,
      title: "Modules in JavaScript",
      link: "https://www.youtube.com/embed/wCkHbaLG5cw",
    },
    {
      id: 98,
      title: "Using Express.js Backend Server",
      link: "https://www.youtube.com/embed/w8CkzOmN8PA",
    },
    {
      id: 99,
      title: "Regular Expressions ",
      link: "https://www.youtube.com/embed/zeMPry3ak6Y",
    },
    {
      id: 100,
      title: "Event Loop",
      link: "https://www.youtube.com/embed/vFJbKR6zfCE",
    },
    {
      id: 101,
      title: "Exercise 8 - Solutions",
      link: "https://www.youtube.com/embed/UxUlw4WCmec",
    },
    {
      id: 102,
      title: "Project 1: PDF Merger WebApp ",
      link: "https://www.youtube.com/embed/hNx3WVi1oPU",
    },
    {
      id: 103,
      title: "Project 2: Bulk Rename Desktop",
      link: "https://www.youtube.com/embed/2KdqfKRnyV4",
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
        JavaScript Course{" "}
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

export default JavascriptCwh;

import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const PythonCwh = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction to Programming",
      link: "https://www.youtube.com/embed/7wnove7K-ZQ",
    },
    {
      id: 2,
      title: "Some Amazing Python Programs",
      link: "https://www.youtube.com/embed/Tto8TS-fJQU",
    },
    {
      id: 3,
      title: "Modules and Pip",
      link: "https://www.youtube.com/embed/xwKO_y2gHxQ",
    },
    {
      id: 4,
      title: "Our First Python Program",
      link: "https://www.youtube.com/embed/7IWOYhfAcVg",
    },
    {
      id: 5,
      title: "Comments, Escape Sequences ",
      link: "https://www.youtube.com/embed/qxPMmW93eDs",
    },
    {
      id: 6,
      title: "Variables and Data Types",
      link: "https://www.youtube.com/embed/ORCuz7s5cCY",
    },
    {
      id: 7,
      title: "Calculator using Python",
      link: "https://www.youtube.com/embed/FLVqcxnJP_E",
    },
    {
      id: 8,
      title: "Calculator",
      link: "https://www.youtube.com/embed/dohaSBCKCr0",
    },
    {
      id: 9,
      title: "Typecasting in Python",
      link: "https://www.youtube.com/embed/Pu5bqySSSS0",
    },
    {
      id: 10,
      title: "Taking User Input in Python",
      link: "https://www.youtube.com/embed/WvG-R-xXouA",
    },
    {
      id: 11,
      title: "Strings in Python",
      link: "https://www.youtube.com/embed/kMNFQYArrLg",
    },
    {
      id: 12,
      title: "Strings Slicing and Operations",
      link: "https://www.youtube.com/embed/8jW7lpT8HW8",
    },
    {
      id: 13,
      title: "String Methods in Python",
      link: "https://www.youtube.com/embed/0INvoK_T0cE",
    },
    {
      id: 14,
      title: "If Else Conditional Statements ",
      link: "https://www.youtube.com/embed/ceiuLR2ysas",
    },
    {
      id: 15,
      title: "Exercise 2: Good Morning Sir",
      link: "https://www.youtube.com/embed/d7ng_aV4qdI",
    },
    {
      id: 16,
      title: "Match Case Statements in Python",
      link: "https://www.youtube.com/embed/bthQCK1QAmQ",
    },
    {
      id: 17,
      title: "For Loops in Python",
      link: "https://www.youtube.com/embed/fIYVzKp0q5w",
    },
    {
      id: 18,
      title: "While Loops in Python",
      link: "https://www.youtube.com/embed/-tCFyIyKVx0",
    },
    {
      id: 19,
      title: "Break and Continue in Python",
      link: "https://www.youtube.com/embed/RkwJnjdrm70",
    },
    {
      id: 20,
      title: "Functions in Python",
      link: "https://www.youtube.com/embed/dyvxxJSGUsE",
    },
    {
      id: 21,
      title: "Function Arguments in Python",
      link: "https://www.youtube.com/embed/0d6b6fFuCkE",
    },
    {
      id: 22,
      title: "Introduction to Lists in Python",
      link: "https://www.youtube.com/embed/eF6nK5bSlmg",
    },
    {
      id: 23,
      title: "List Methods in Python",
      link: "https://www.youtube.com/embed/scWc3F8LbOo",
    },
    {
      id: 24,
      title: "Tuples in Python",
      link: "https://www.youtube.com/embed/PipsOUDKrVk",
    },
    {
      id: 25,
      title: "Operations on Tuples in Python",
      link: "https://www.youtube.com/embed/XblLSduioJI",
    },
    {
      id: 26,
      title: "Solution & Shoutouts",
      link: "https://www.youtube.com/embed/IZBKXWrbqBM",
    },
    {
      id: 27,
      title: "Kaun Banega Crorepati (KBC)",
      link: "https://www.youtube.com/embed/Vs1Z7K70Mvw",
    },
    {
      id: 28,
      title: "F-strings in Python",
      link: "https://www.youtube.com/embed/ixmxgUf8yIg",
    },
    {
      id: 29,
      title: "Docstrings in Python",
      link: "https://www.youtube.com/embed/SJzsNd7SM0g",
    },
    {
      id: 30,
      title: "Recursion in Python",
      link: "https://www.youtube.com/embed/XYwJKFB8DUk",
    },
    {
      id: 31,
      title: "Sets in Python",
      link: "https://www.youtube.com/embed/l3kCO8cVA6o",
    },
    {
      id: 32,
      title: "Set Methods in Python",
      link: "https://www.youtube.com/embed/HOrutCnp2zo",
    },
    {
      id: 33,
      title: "Dictionaries in Python",
      link: "https://www.youtube.com/embed/j2G68uQtOwM",
    },
    {
      id: 34,
      title: "Dictionary Methods in Python",
      link: "https://www.youtube.com/embed/LmbFwaLjT9k",
    },
    {
      id: 35,
      title: "For Loop with Else in Python",
      link: "https://www.youtube.com/embed/qUkcIgErZzc",
    },
    {
      id: 36,
      title: "Exception Handling in Python",
      link: "https://www.youtube.com/embed/4LKo6dlku7M",
    },
    {
      id: 37,
      title: "Finally keyword in Python",
      link: "https://www.youtube.com/embed/r_iuC-IDpPM",
    },
    {
      id: 38,
      title: "Raising Custom Errors in Python",
      link: "https://www.youtube.com/embed/Phr4CNppYoM",
    },
    {
      id: 39,
      title: "Solution & Shoutouts",
      link: "https://www.youtube.com/embed/nyfeYAxP-EM",
    },
    {
      id: 40,
      title: "Secret Code Language",
      link: "https://www.youtube.com/embed/pOWJ6WgVRIU",
    },
    {
      id: 41,
      title: "Short Hand If Else Statements",
      link: "https://www.youtube.com/embed/Qqx_zNmQVGI",
    },
    {
      id: 42,
      title: "Enumerate Function in Python",
      link: "https://www.youtube.com/embed/kGnYc_h1geM",
    },
    {
      id: 43,
      title: "Virtual Environment in Python",
      link: "https://www.youtube.com/embed/nt6LlFTWOkg",
    },
    {
      id: 44,
      title: "How Import Works in Python",
      link: "https://www.youtube.com/embed/Pr7UOr35NcI",
    },
    {
      id: 45,
      title: "if __name__ == '__main__' ",
      link: "https://www.youtube.com/embed/y_CX2Rvitk8",
    },
    {
      id: 46,
      title: "os Module in Python",
      link: "https://www.youtube.com/embed/dkVYSsL90Oo",
    },
    {
      id: 47,
      title: "Solutions and Shoutouts",
      link: "https://www.youtube.com/embed/4lSQfOJKn7U",
    },
    {
      id: 48,
      title: "Local vs Global",
      link: "https://www.youtube.com/embed/RaG6GgcDt54",
    },
    {
      id: 49,
      title: "File IO in Python",
      link: "https://www.youtube.com/embed/eDBPlcWYses",
    },
    {
      id: 50,
      title: "read(), readlines(),Other Methods",
      link: "https://www.youtube.com/embed/l1FsnQxET9U",
    },
    {
      id: 51,
      title: "Seek(), Tell(), and Other Functions",
      link: "https://www.youtube.com/embed/PByYX-2l5Us",
    },
    {
      id: 52,
      title: "Lambda Functions in Python",
      link: "https://www.youtube.com/embed/UfFWf-PXUqE",
    },
    {
      id: 53,
      title: "Map, Filter, and Reduce in Python",
      link: "https://www.youtube.com/embed/OErhjT4f5Cs",
    },
    {
      id: 54,
      title: "'is' vs '==' in Python",
      link: "https://www.youtube.com/embed/TOemdfX_0xc",
    },
    {
      id: 55,
      title: "Exercise 5 - Snake Water Gun",
      link: "https://www.youtube.com/embed/dDsh7FT6-0I",
    },
    {
      id: 56,
      title: "Introduction to OOPs in Python",
      link: "https://www.youtube.com/embed/HQnoYzxOHMw",
    },
    {
      id: 57,
      title: "Classes and Objects in Python",
      link: "https://www.youtube.com/embed/a7baAGCBA9U",
    },
    {
      id: 58,
      title: "Constructors in Python",
      link: "https://www.youtube.com/embed/12HRkYld22c",
    },
    {
      id: 59,
      title: "Decorators in Python",
      link: "https://www.youtube.com/embed/PTBZ674EsvI",
    },
    {
      id: 60,
      title: "Getters and Setters in Python",
      link: "https://www.youtube.com/embed/2gbCT8h9uyk",
    },
    {
      id: 61,
      title: "Inheritance in Python",
      link: "https://www.youtube.com/embed/-KsfUaQEY9Y",
    },
    {
      id: 62,
      title: "Access Modifiers in Python",
      link: "https://www.youtube.com/embed/43FK20rWvKQ",
    },
    {
      id: 63,
      title: "Snake Water Gun Game ",
      link: "https://www.youtube.com/embed/GkfBpm6MN9A",
    },
    {
      id: 64,
      title: "Library Management System",
      link: "https://www.youtube.com/embed/mlDZTSH2FFc",
    },
    {
      id: 65,
      title: "Static Methods in Python",
      link: "https://www.youtube.com/embed/GcSVYNSsJxo",
    },
    {
      id: 66,
      title: "Instance Variables vs Class",
      link: "https://www.youtube.com/embed/tQdaeiF4j38",
    },
    {
      id: 67,
      title: " Library Management Software",
      link: "https://www.youtube.com/embed/uRIEjf2vCIg",
    },
    {
      id: 68,
      title: "Clear the Clutter",
      link: "https://www.youtube.com/embed/6KvnP13TnhY",
    },
    {
      id: 69,
      title: "Class Methods in Python",
      link: "https://www.youtube.com/embed/9ynmDLc5FYo",
    },
    {
      id: 70,
      title: "Class Methods  Constructors",
      link: "https://www.youtube.com/embed/FGlKJdy--p8",
    },
    {
      id: 71,
      title: "dir, __dict__ and help method",
      link: "https://www.youtube.com/embed/Wgo9TaBcuJ4",
    },
    {
      id: 72,
      title: "super keyword in Python",
      link: "https://www.youtube.com/embed/P648reefNh0",
    },
    {
      id: 73,
      title: "Magic/Dunder Methods in Python",
      link: "https://www.youtube.com/embed/DmgQVJXhuLQ",
    },
    {
      id: 74,
      title: "Method Overriding in Python",
      link: "https://www.youtube.com/embed/46_yfYC36JY",
    },
    {
      id: 75,
      title: "Exercise 7 Solution + Shoutouts",
      link: "https://www.youtube.com/embed/Wt9Shnzv_Yg",
    },
    {
      id: 76,
      title: "Exercise 8 - Merge the PDF",
      link: "https://www.youtube.com/embed/uUbvJ7ZEhPE",
    },
    {
      id: 77,
      title: "Operator Overloading in Python",
      link: "https://www.youtube.com/embed/D67-b2t-y4k",
    },
    {
      id: 78,
      title: "Single Inheritance in Python",
      link: "https://www.youtube.com/embed/U53_Gw55NI8",
    },
    {
      id: 79,
      title: "Multiple Inheritance in Python",
      link: "https://www.youtube.com/embed/4o7xSHgKlvI",
    },
    {
      id: 80,
      title: "Multilevel Inheritance in Python",
      link: "https://www.youtube.com/embed/Il7XMJJeXiA",
    },
    {
      id: 81,
      title: "Hybrid and Hierarchical Inheritance",
      link: "https://www.youtube.com/embed/B4Q8zxRkm_I",
    },
    {
      id: 82,
      title: "Merge the Pdf Solution in Python",
      link: "https://www.youtube.com/embed/qKKGemhBRVM",
    },
    {
      id: 83,
      title: "Shoutouts to Everyone",
      link: "https://www.youtube.com/embed/1WjwnlRXfHc",
    },
    {
      id: 84,
      title: "Time Module in Python",
      link: "https://www.youtube.com/embed/oTtIvV-Q1FY",
    },
    {
      id: 85,
      title: "Creating command line utility",
      link: "https://www.youtube.com/embed/3IAu6-pgw7I",
    },
    {
      id: 86,
      title: "Walrus Operator in Python",
      link: "https://www.youtube.com/embed/NCmMEEyzLT8",
    },
    {
      id: 87,
      title: "Shutil Module in Python",
      link: "https://www.youtube.com/embed/wII2JhNACJE",
    },
    {
      id: 88,
      title: "Shoutouts to Everyone",
      link: "https://www.youtube.com/embed/C9VP-56RXNM",
    },
    {
      id: 89,
      title: "Requests Module in Python",
      link: "https://www.youtube.com/embed/Nsb3bLIlO4w",
    },
    {
      id: 90,
      title: "Exercise 10: News App in Python",
      link: "https://www.youtube.com/embed/BGzFp9mwFQ4",
    },
    {
      id: 91,
      title: "Generators in Python",
      link: "https://www.youtube.com/embed/ixd-u3pmsUc",
    },
    {
      id: 92,
      title: "Function Caching in Python",
      link: "https://www.youtube.com/embed/K8gjSwc3Rlo",
    },
    {
      id: 93,
      title: "News App Solution & Shoutout",
      link: "https://www.youtube.com/embed/bnAz7Kb2efE",
    },
    {
      id: 94,
      title: "Exercise 11 - Drink Water Reminder",
      link: "https://www.youtube.com/embed/1i4piFhpnm8",
    },
    {
      id: 95,
      title: "Regular Expressions in Python",
      link: "https://www.youtube.com/embed/TCWOwavqFrw",
    },
    {
      id: 96,
      title: "AsyncIO in Python",
      link: "https://www.youtube.com/embed/lgoB3_-ejnI",
    },
    {
      id: 97,
      title: "Multithreading in Python",
      link: "https://www.youtube.com/embed/ICbU6zAKtqQ",
    },
    {
      id: 98,
      title: "MultiProcessing in Python",
      link: "https://www.youtube.com/embed/zGe-9LfnAaA",
    },
    {
      id: 99,
      title: "Desktop Notification System",
      link: "https://www.youtube.com/embed/18vZnLqXMoM",
    },
    {
      id: 100,
      title: "Conclusion",
      link: "https://www.youtube.com/embed/5Pz8WGiMJ_c",
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
          Code With Harry
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

export default PythonCwh;

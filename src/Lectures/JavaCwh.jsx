import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const JavaCwh = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Java Introduction & Setup",
      link: "https://www.youtube.com/embed/ntLJmHOJ0ME",
    },
    {
      id: 2,
      title: "Java Hello World Program",
      link: "https://www.youtube.com/embed/zIdg7hkqNE0",
    },
    {
      id: 3,
      title: "Java Variables & Data Types",
      link: "https://www.youtube.com/embed/X0zdAG7gfgs",
    },
    {
      id: 4,
      title: "Java Literals",
      link: "https://www.youtube.com/embed/b2VJmyarV3I",
    },
    {
      id: 5,
      title: "User Input in Java",
      link: "https://www.youtube.com/embed/HRfmLqqvzUs",
    },
    {
      id: 6,
      title: "Exercise 1: Percentage Calculator",
      link: "https://www.youtube.com/embed/C5me8SeuW9M",
    },
    {
      id: 7,
      title: "Java Chapter 1 - Practice Set",
      link: "https://www.youtube.com/embed/d9oF3MNzmuk",
    },
    {
      id: 8,
      title: "Operators & Expressions in Java",
      link: "https://www.youtube.com/embed/pnn2VTSr1Ko",
    },
    {
      id: 9,
      title: "Associativity of Operators ",
      link: "https://www.youtube.com/embed/vh16INx13h4",
    },
    {
      id: 10,
      title: "Data Type & Increment/Decrement ",
      link: "https://www.youtube.com/embed/xGsUs3XQ0t0",
    },
    {
      id: 11,
      title: "Exercise 1 - Solutions ",
      link: "https://www.youtube.com/embed/HQxKktmOXQY",
    },
    {
      id: 12,
      title: "Java Chapter 2 - Practice Set",
      link: "https://www.youtube.com/embed/WC7B7LffdkI",
    },
    {
      id: 13,
      title: "Introduction to Strings in Java",
      link: "https://www.youtube.com/embed/tem1bKt2Osc",
    },
    {
      id: 14,
      title: "String Methods in Java",
      link: "https://www.youtube.com/embed/1SJK4Y4axXs",
    },
    {
      id: 15,
      title: "Practice Set on Java Strings",
      link: "https://www.youtube.com/embed/MO3GfaHwHsw",
    },
    {
      id: 16,
      title: "If-else Statement in Java",
      link: "https://www.youtube.com/embed/YPK6NYMJt_A",
    },
    {
      id: 17,
      title: "Relational and Logical Operators ",
      link: "https://www.youtube.com/embed/Y-c8gQV2Tuw",
    },
    {
      id: 18,
      title: "Switch Case Statements in Java",
      link: "https://www.youtube.com/embed/hdOtQSuPBRY",
    },
    {
      id: 19,
      title: "Questions on Conditionals & Switch",
      link: "https://www.youtube.com/embed/lGHzXsEoUkM",
    },
    {
      id: 20,
      title: "Exercise 2: Rock, Paper Scissors",
      link: "https://www.youtube.com/embed/UClkmZOZhhs",
    },
    {
      id: 21,
      title: "While Loops in Java",
      link: "https://www.youtube.com/embed/GE5C_So1y00",
    },
    {
      id: 22,
      title: "The do-while loop in Java",
      link: "https://www.youtube.com/embed/XFyNiI6ozO0",
    },
    {
      id: 23,
      title: "The for Loop in Java",
      link: "https://www.youtube.com/embed/XHgC6Md8L9o",
    },
    {
      id: 24,
      title: "break and continue in Java",
      link: "https://www.youtube.com/embed/HguqMkdIkcs",
    },
    {
      id: 25,
      title: "Practice Questions on Loops ",
      link: "https://www.youtube.com/embed/zY87HRloM18",
    },
    {
      id: 26,
      title: "Introduction to Arrays in Java",
      link: "https://www.youtube.com/embed/qMePCtjeqB4",
    },
    {
      id: 27,
      title: "For Each Loop in Java",
      link: "https://www.youtube.com/embed/-AJGE_8htCI",
    },
    {
      id: 28,
      title: "Multidimensional Arrays ",
      link: "https://www.youtube.com/embed/CfqjAKN-AwI",
    },
    {
      id: 29,
      title: "Practice Questions on Arrays ",
      link: "https://www.youtube.com/embed/XDlxr2wYNfU",
    },
    {
      id: 30,
      title: "Make IntelliJ IDEA look Amazing!",
      link: "https://www.youtube.com/embed/1etC1g0HNBg",
    },
    {
      id: 31,
      title: "Methods in Java",
      link: "https://www.youtube.com/embed/t6e5AyYWLFw",
    },
    {
      id: 32,
      title: "Method Overloading in Java",
      link: "https://www.youtube.com/embed/pFaB68naMiU",
    },
    {
      id: 33,
      title: "Variable Arguments (VarArgs)",
      link: "https://www.youtube.com/embed/PpRpiMReGXY",
    },
    {
      id: 34,
      title: "Recursion in Java",
      link: "https://www.youtube.com/embed/QLbG77JngYc",
    },
    {
      id: 35,
      title: "Questions on Java Methods",
      link: "https://www.youtube.com/embed/VXR3HKRg51w",
    },
    {
      id: 36,
      title: "Introduction to OOP in Java",
      link: "https://www.youtube.com/embed/5OrZpBbGKgc",
    },
    {
      id: 37,
      title: "Basic Terminologies in OOP",
      link: "https://www.youtube.com/embed/HHWPcyFmw2o",
    },
    {
      id: 38,
      title: "Creating Our Own Java Class",
      link: "https://www.youtube.com/embed/0HIR0rzj8pQ",
    },
    {
      id: 39,
      title: "Basic Questions on OOP",
      link: "https://www.youtube.com/embed/wQZCbojRawg",
    },
    {
      id: 40,
      title: "Access Modifiers,Getters & Setters",
      link: "https://www.youtube.com/embed/25zw-ljLLw0",
    },
    {
      id: 41,
      title: "Exercise 2 - Solution ",
      link: "https://www.youtube.com/embed/5XF_POby0Q0",
    },
    {
      id: 42,
      title: "Constructors in Java",
      link: "https://www.youtube.com/embed/Fxj4n8En8lw",
    },
    {
      id: 43,
      title: "Java Exercise 3: Guess the Number",
      link: "https://www.youtube.com/embed/2heXAHrmmsk",
    },
    {
      id: 44,
      title: "Exercise on Access Modifiers ",
      link: "https://www.youtube.com/embed/N3Xu1rO6feY",
    },
    {
      id: 45,
      title: "Inheritance in Java",
      link: "https://www.youtube.com/embed/XSuybcFfLx4",
    },
    {
      id: 46,
      title: "Constructors in Inheritance in Java",
      link: "https://www.youtube.com/embed/-b-_NNlCcng",
    },
    {
      id: 47,
      title: "this and super keyword in Java",
      link: "https://www.youtube.com/embed/R1SXNJElXHo",
    },
    {
      id: 48,
      title: "Method Overriding in Java",
      link: "https://www.youtube.com/embed/DSZI90Db24I",
    },
    {
      id: 49,
      title: "Dynamic Method Dispatch in Java",
      link: "https://www.youtube.com/embed/qbXNFOuD9k4",
    },
    {
      id: 50,
      title: "Exercise 3 - Solutions & Shoutouts",
      link: "https://www.youtube.com/embed/rfKz08bClBA",
    },
    {
      id: 51,
      title: "Exercise 4 - Online Library",
      link: "https://www.youtube.com/embed/iOaDMWkmc3Q",
    },
    {
      id: 52,
      title: "Practice Questions on Inheritance",
      link: "https://www.youtube.com/embed/dm_bclqGhuc",
    },
    {
      id: 53,
      title: "Abstract Class & Abstract Methods",
      link: "https://www.youtube.com/embed/vqV22AszAdw",
    },
    {
      id: 54,
      title: "Introduction to Interfaces in Java",
      link: "https://www.youtube.com/embed/VYhmL038G1I",
    },
    {
      id: 55,
      title: "Abstract Classes Vs Interfaces",
      link: "https://www.youtube.com/embed/qZEFslUVfx0",
    },
    {
      id: 56,
      title: "Why multiple inheritance",
      link: "https://www.youtube.com/embed/HnaVobvfSyc",
    },
    {
      id: 57,
      title: "Java Interfaces & Default Methods",
      link: "https://www.youtube.com/embed/D4TYED_gKTE",
    },
    {
      id: 58,
      title: "Inheritance in Interfaces",
      link: "https://www.youtube.com/embed/F_CrLyz5xW4",
    },
    {
      id: 59,
      title: "Polymorphism in Interfaces",
      link: "https://www.youtube.com/embed/08u8RlXca2I",
    },
    {
      id: 60,
      title: "Practice Questions on Abstract",
      link: "https://www.youtube.com/embed/-1ibsVnP64Q",
    },
    {
      id: 61,
      title: "Java Exercise 4: Solution",
      link: "https://www.youtube.com/embed/VysxZDROr64",
    },
    {
      id: 62,
      title: "Interpreted vs Compiled ",
      link: "https://www.youtube.com/embed/jtXJP_BqXes",
    },
    {
      id: 63,
      title: "Is Java interpreted or compiled?",
      link: "https://www.youtube.com/embed/luxOkCvJBcQ",
    },
    {
      id: 64,
      title: "Packages in Java",
      link: "https://www.youtube.com/embed/k7TwStbkK70",
    },
    {
      id: 65,
      title: "Creating Packages in Java",
      link: "https://www.youtube.com/embed/av816KIz8nM",
    },
    {
      id: 66,
      title: "Access Modifiers in Java",
      link: "https://www.youtube.com/embed/vgg9T4_0CNA",
    },
    {
      id: 67,
      title: "Practice Set on Java Package",
      link: "https://www.youtube.com/embed/MvmZgflfT8M",
    },
    {
      id: 68,
      title: "Creating a Custom Package",
      link: "https://www.youtube.com/embed/QjwtW7GHjcY",
    },
    {
      id: 69,
      title: "Multithreading in Java",
      link: "https://www.youtube.com/embed/YDH7f9dTXAs",
    },
    {
      id: 70,
      title: "Creating a Thread ",
      link: "https://www.youtube.com/embed/b_h4-_j6JmY",
    },
    {
      id: 71,
      title: "Creating a Java Thread ",
      link: "https://www.youtube.com/embed/7wpFNKnCpiQ",
    },
    {
      id: 72,
      title: "Java Thread Life Cycle",
      link: "https://www.youtube.com/embed/9O9tTS6LseI",
    },
    {
      id: 73,
      title: "Constructors from Thread class",
      link: "https://www.youtube.com/embed/DAHHFj39RRY",
    },
    {
      id: 74,
      title: "Java Thread Priorities",
      link: "https://www.youtube.com/embed/0s46eRixwnk",
    },
    {
      id: 75,
      title: "Java Thread Methods",
      link: "https://www.youtube.com/embed/rVDWb0stlfQ",
    },
    {
      id: 76,
      title: "Java Tutorial: Questions on Thread",
      link: "https://www.youtube.com/embed/AKuu92ELIrE",
    },
    {
      id: 77,
      title: "Exercise 5: Solution & Shoutouts!",
      link: "https://www.youtube.com/embed/O5mEqyUzRVA",
    },
    {
      id: 78,
      title: "Errors & Exception in Java",
      link: "https://www.youtube.com/embed/ZovnoASlIaE",
    },
    {
      id: 79,
      title: "Syntax Errors, Runtime Errors",
      link: "https://www.youtube.com/embed/gtszMcGWW10",
    },
    {
      id: 80,
      title: "Try Catch Block in Java",
      link: "https://www.youtube.com/embed/bMhDwdT5AHw",
    },
    {
      id: 81,
      title: "Handling Specific Exceptions",
      link: "https://www.youtube.com/embed/UXvMSMnYAzE",
    },
    {
      id: 82,
      title: "Nested Try-Catch in Java",
      link: "https://www.youtube.com/embed/To6tsfRADL4",
    },
    {
      id: 83,
      title: "The Exception class in Java",
      link: "https://www.youtube.com/embed/UZIIY5CK0TM",
    },
    {
      id: 84,
      title: "Throw vs Throws in Java",
      link: "https://www.youtube.com/embed/sOcZgWyoQuk",
    },
    {
      id: 85,
      title: "Finally Block in Java ",
      link: "https://www.youtube.com/embed/a0TkfbAGuKw",
    },
    {
      id: 86,
      title: "Practice Set on Errors & Exceptions",
      link: "https://www.youtube.com/embed/iH9Hkh9C-YM",
    },
    {
      id: 87,
      title: "Java Exercise 6: Custom Calculator",
      link: "https://www.youtube.com/embed/93CDUtPjCPk",
    },
    {
      id: 88,
      title: "Java Collections Framework",
      link: "https://www.youtube.com/embed/s8yrPZlvNP0",
    },
    {
      id: 89,
      title: "Collections Hierarchy in Java",
      link: "https://www.youtube.com/embed/M5DlD4VMNO8",
    },
    {
      id: 90,
      title: "How to View Java Documentation",
      link: "https://www.youtube.com/embed/3HO65WF1sPY",
    },
    {
      id: 91,
      title: "ArrayList in Java: Demo & Methods",
      link: "https://www.youtube.com/embed/hxUGjnVaPgE",
    },
    {
      id: 92,
      title: "LinkedList in Java",
      link: "https://www.youtube.com/embed/eAyUSV164Ro",
    },
    {
      id: 93,
      title: "ArrayDeque in Java",
      link: "https://www.youtube.com/embed/07HKJO4B96M",
    },
    {
      id: 94,
      title: "Hashing in Java",
      link: "https://www.youtube.com/embed/JVdMD3r7dSs",
    },
    {
      id: 95,
      title: "HashSet in Java",
      link: "https://www.youtube.com/embed/tqC_U2Y7rr4",
    },
    {
      id: 96,
      title: "Date and Time in Java",
      link: "https://www.youtube.com/embed/PCJRuBQa4Pk",
    },
    {
      id: 97,
      title: "The Date Class in Java",
      link: "https://www.youtube.com/embed/AykO23IwSLw",
    },
    {
      id: 98,
      title: "Calendar Class in Java",
      link: "https://www.youtube.com/embed/5v2XK-HIRnc",
    },
    {
      id: 99,
      title: "GregorianCalendar ",
      link: "https://www.youtube.com/embed/2a6zZBrT92o",
    },
    {
      id: 100,
      title: "java.time API -Classes & Methods",
      link: "https://www.youtube.com/embed/LfxKvn2Ri4E",
    },
    {
      id: 101,
      title: "DateTimeFormatter in Java",
      link: "https://www.youtube.com/embed/icQM98mzlG0",
    },
    {
      id: 102,
      title: "Advanced Java Practice Set",
      link: "https://www.youtube.com/embed/-b93mslJ2j8",
    },
    {
      id: 103,
      title: "Solution | Custom Calculator",
      link: "https://www.youtube.com/embed/KRIb4hm6uDI",
    },
    {
      id: 104,
      title: "Java Exercise 7:",
      link: "https://www.youtube.com/embed/IgPDDiFcA88",
    },
    {
      id: 105,
      title: "Generating our own JavaDocs ",
      link: "https://www.youtube.com/embed/IrSbN7Y2lOA",
    },
    {
      id: 106,
      title: "Tags for Documenting Classes",
      link: "https://www.youtube.com/embed/u7hFzG1n4mg",
    },
    {
      id: 107,
      title: "Javadocs: Method",
      link: "https://www.youtube.com/embed/gZJXbmC8Yno",
    },
    {
      id: 108,
      title: "Annotations in Java",
      link: "https://www.youtube.com/embed/jy8Glegc5Xo",
    },
    {
      id: 109,
      title: "Java Anonymous Classes",
      link: "https://www.youtube.com/embed/FTk7bGPAYpo",
    },
    {
      id: 110,
      title: "Java Generics",
      link: "https://www.youtube.com/embed/BsBK3UZ0RGM",
    },
    {
      id: 111,
      title: "File Handling in Java",
      link: "https://www.youtube.com/embed/Vy2l3lGAb2I",
    },
    {
      id: 112,
      title: "Advanced Java 2 - Practice Set",
      link: "https://www.youtube.com/embed/K4iaIuPx7Go",
    },
    {
      id: 113,
      title: "Exercise 7: Solutions ",
      link: "https://www.youtube.com/embed/j-k6ppZZ-ho",
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
        Java Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="java"
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

export default JavaCwh;

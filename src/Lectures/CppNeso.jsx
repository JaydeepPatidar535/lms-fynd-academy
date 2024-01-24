import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const CppNeso = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction to C++ Programming",
      link: "https://www.youtube.com/embed/s0g4ty29Xgg",
    },
    {
      id: 2,
      title: "Writing a Simple C++ Program",
      link: "https://www.youtube.com/embed/imNlJohlLPk",
    },
    {
      id: 3,
      title: "Installing Source Code Editor ",
      link: "https://www.youtube.com/embed/cnMziyeusQk",
    },
    {
      id: 4,
      title: "Compiling & Executing C++",
      link: "https://www.youtube.com/embed/BdnpFbODLc0",
    },
    {
      id: 5,
      title: "Compiling & Executing C++",
      link: "https://www.youtube.com/embed/m2FtsEvlmCA",
    },
    {
      id: 6,
      title: "Input and Output in C++",
      link: "https://www.youtube.com/embed/1Wrc91mp980",
    },
    {
      id: 7,
      title: "Namespaces in C++",
      link: "https://www.youtube.com/embed/ZZWTh142s4w",
    },
    {
      id: 8,
      title: "Comments in C++",
      link: "https://www.youtube.com/embed/1-OKPH1y4EA",
    },
    {
      id: 9,
      title: "Comments in C++ (Exercise)",
      link: "https://www.youtube.com/embed/O4gH4OWEaKU",
    },
    {
      id: 10,
      title: "The 'while' Statement in C++",
      link: "https://www.youtube.com/embed/iF4i423144E",
    },
    {
      id: 11,
      title: "The 'for' Statement in C++",
      link: "https://www.youtube.com/embed/yS8DUrQy_ow",
    },
    {
      id: 12,
      title: "Reading an Unknown Numbers",
      link: "https://www.youtube.com/embed/h44PrRlG8p4",
    },
    {
      id: 13,
      title: "The 'if-else' Statement in C++",
      link: "https://www.youtube.com/embed/9-BjXs1vMSc",
    },
    {
      id: 14,
      title: "The 'else-if' Statement in C++",
      link: "https://www.youtube.com/embed/cec5DV42wjI",
    },
    {
      id: 15,
      title: "C++ Program to Count Number ",
      link: "https://www.youtube.com/embed/a5TPJXyFu4c",
    },
    {
      id: 16,
      title: "Indentation and Formatting ",
      link: "https://www.youtube.com/embed/ruwWpt_fMSs",
    },
    {
      id: 17,
      title: "Primitive Built-in Types in C++",
      link: "https://www.youtube.com/embed/fXakvKtBd-M",
    },
    {
      id: 18,
      title: "Signed and Unsigned Types in C++",
      link: "https://www.youtube.com/embed/ycd0w28-4Uk",
    },
    {
      id: 19,
      title: "Machine-Level Representation ",
      link: "https://www.youtube.com/embed/PP4_f-cXoOg",
    },
    {
      id: 20,
      title: "Type Conversions in C++",
      link: "https://www.youtube.com/embed/uI10H1jzw00",
    },
    {
      id: 21,
      title: "Literals in C++",
      link: "https://www.youtube.com/embed/g1ntDgsLFAY",
    },
    {
      id: 22,
      title: "Escape Sequences in C++",
      link: "https://www.youtube.com/embed/zpQ3PPM2SdI",
    },
    {
      id: 23,
      title: "Variables in C++",
      link: "https://www.youtube.com/embed/fZbSl58orNs",
    },
    {
      id: 24,
      title: "Identifiers in C++",
      link: "https://www.youtube.com/embed/_80lLRCKgGo",
    },
    {
      id: 25,
      title: "Scope of a Name in C++",
      link: "https://www.youtube.com/embed/H5nsqGPRkmU",
    },
    {
      id: 26,
      title: "Nested Scopes in C++",
      link: "https://www.youtube.com/embed/kecbsrH3m2s",
    },
    {
      id: 27,
      title: "Compound Types in C++ ",
      link: "https://www.youtube.com/embed/GIQkZfBtb9Y",
    },
    {
      id: 28,
      title: "Compound Types in C++ (Pointers)",
      link: "https://www.youtube.com/embed/o-ET7t9MgJI",
    },
    {
      id: 29,
      title: "const Qualifier in C++",
      link: "https://www.youtube.com/embed/ruNFTpEebrU",
    },
    {
      id: 30,
      title: "References to const in C++",
      link: "https://www.youtube.com/embed/-dDxZwyLX7A",
    },
    {
      id: 31,
      title: "Pointers and const in C++",
      link: "https://www.youtube.com/embed/Xtq6JXfFwgc",
    },
    {
      id: 32,
      title: "Top-Level and Low-Level const",
      link: "https://www.youtube.com/embed/UGYotTNzgUA",
    },
    {
      id: 33,
      title: "Constant Expressions",
      link: "https://www.youtube.com/embed/UfG7QlEMNsE",
    },
    {
      id: 34,
      title: "Pointers and constexpr in C++",
      link: "https://www.youtube.com/embed/djEp-dGuDLo",
    },
    {
      id: 35,
      title: "Type Aliases in C++",
      link: "https://www.youtube.com/embed/6ieRHv3XgeY",
    },
    {
      id: 36,
      title: "Pointers, const, and Type Aliases",
      link: "https://www.youtube.com/embed/odK0oeZBnVc",
    },
    {
      id: 37,
      title: "The auto Type Specifier in C++",
      link: "https://www.youtube.com/embed/n_Bc1Fb0y78",
    },
    {
      id: 38,
      title: "The decltype Type Specifier in C++",
      link: "https://www.youtube.com/embed/OVhwGJUKoxs",
    },
    {
      id: 39,
      title: "decltype and References in C++",
      link: "https://www.youtube.com/embed/OavjyHbxAok",
    },
    {
      id: 40,
      title: "The string Data Type in C++",
      link: "https://www.youtube.com/embed/04-dOWYTi-0",
    },
    {
      id: 41,
      title: "Operations on Strings (Part 1)",
      link: "https://www.youtube.com/embed/JkbbzIZpBD4",
    },
    {
      id: 42,
      title: "Operations on Strings (Part 2)",
      link: "https://www.youtube.com/embed/gB6w_iu8Quk",
    },
    {
      id: 43,
      title: "Operations on Strings (Part 3)",
      link: "https://www.youtube.com/embed/k6nU0WmA-vY",
    },
    {
      id: 44,
      title: "Dealing with Characters String",
      link: "https://www.youtube.com/embed/sb0EE68Yk0I",
    },
    {
      id: 45,
      title: "Processing Every Character String",
      link: "https://www.youtube.com/embed/IEiiR5xUauI",
    },
    {
      id: 46,
      title: "Processing Some Characters String",
      link: "https://www.youtube.com/embed/Rg6Q5MnYbRc",
    },
    {
      id: 47,
      title: "The Vector Type in C++",
      link: "https://www.youtube.com/embed/H1cK1QXw6Zs",
    },
    {
      id: 48,
      title: "Defining and Initializing Vectors",
      link: "https://www.youtube.com/embed/CoETsc36Q5U",
    },
    {
      id: 49,
      title: "Adding Elements to a Vector ",
      link: "https://www.youtube.com/embed/8MWMDFA2QQc",
    },
    {
      id: 50,
      title: "Some more Vector Operations",
      link: "https://www.youtube.com/embed/Mhj-JkEHQ4E",
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
          Neso Academy
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
              className="md:w-[960px] xl:w-[960px] 2xl:w-[960px] md:h-[400px] lg:h-[500px] xl:h-[555px] 2xl:h-[555px] mt-6 md:mt-0"
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
export default CppNeso;

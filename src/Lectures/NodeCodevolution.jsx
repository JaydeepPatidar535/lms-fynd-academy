import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const NodeCodevolution = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction",
      link: "https://www.youtube.com/embed/LAUi8pPlcUM",
    },
    {
      id: 2,
      title: "ECMAScript",
      link: "https://www.youtube.com/embed/HXpPKhWOkAs",
    },
    {
      id: 3,
      title: "Chrome's V8 Engine",
      link: "https://www.youtube.com/embed/2mWb7j1A3c8",
    },
    {
      id: 4,
      title: "JavaScript Runtime",
      link: "https://www.youtube.com/embed/BFHUfKtoNkw",
    },
    {
      id: 5,
      title: "What is Node.js?",
      link: "https://www.youtube.com/embed/XQT6XiJt4DE",
    },
    {
      id: 6,
      title: "Hello World",
      link: "https://www.youtube.com/embed/tt1R-DEhvxg",
    },
    {
      id: 7,
      title: "Browser vs Node.js",
      link: "https://www.youtube.com/embed/sl-5haKNXGE",
    },
    {
      id: 8,
      title: "Modules",
      link: "https://www.youtube.com/embed/uatPQZVnng4",
    },
    {
      id: 9,
      title: "Local Modules",
      link: "https://www.youtube.com/embed/4gWoKrwGui4",
    },
    {
      id: 10,
      title: "Module Exports",
      link: "https://www.youtube.com/embed/hvOrwICaEJY",
    },
    {
      id: 11,
      title: "Module Scope",
      link: "https://www.youtube.com/embed/RR5zEGU7TqY",
    },
    {
      id: 12,
      title: "Module Wrapper",
      link: "https://www.youtube.com/embed/ce90lLhDI_Y",
    },
    {
      id: 13,
      title: "Module Caching",
      link: "https://www.youtube.com/embed/JQfOtwfDohY",
    },
    {
      id: 14,
      title: "Import Export Patterns",
      link: "https://www.youtube.com/embed/F_GmxjP80so",
    },
    {
      id: 15,
      title: "Module.Exports vs Exports",
      link: "https://www.youtube.com/embed/ghUIlSNRru0",
    },
    {
      id: 16,
      title: "ES Modules",
      link: "https://www.youtube.com/embed/g98XlFOiXz0",
    },
    {
      id: 17,
      title: "Importing JSON and Watch Mode",
      link: "https://www.youtube.com/embed/Es7SzBBc6qE",
    },
    {
      id: 18,
      title: "Built-in Modules",
      link: "https://www.youtube.com/embed/kRG8QpOKZE4",
    },
    {
      id: 19,
      title: "Path Module",
      link: "https://www.youtube.com/embed/p995SdRXw_E",
    },
    {
      id: 20,
      title: "Callback Pattern",
      link: "https://www.youtube.com/embed/z03tYranyWs",
    },
    {
      id: 21,
      title: "Events Module",
      link: "https://www.youtube.com/embed/Su0-Y9coU3s",
    },
    {
      id: 22,
      title: "Extending from EventEmitter",
      link: "https://www.youtube.com/embed/UK2uQjgsoI4",
    },
    {
      id: 23,
      title: "Character Sets and Encoding",
      link: "https://www.youtube.com/embed/0LYXkL0pr1M",
    },
    {
      id: 24,
      title: "Streams and Buffers",
      link: "https://www.youtube.com/embed/br8VB99qPzE",
    },
    {
      id: 25,
      title: "Asynchronous JavaScript",
      link: "https://www.youtube.com/embed/QvIC2z8ADtU",
    },
    {
      id: 26,
      title: "fs Module",
      link: "https://www.youtube.com/embed/Z_p1yFGS0Ak",
    },
    {
      id: 27,
      title: "fs Promise Module",
      link: "https://www.youtube.com/embed/wG2-vF4QyZ0",
    },
    {
      id: 28,
      title: "Streams",
      link: "https://www.youtube.com/embed/qnzC6vpBuxw",
    },
    {
      id: 29,
      title: "Pipes",
      link: "https://www.youtube.com/embed/ej79ByltLOI",
    },
    {
      id: 30,
      title: "HTTP Module",
      link: "https://www.youtube.com/embed/3Z-pAgra-tw",
    },
    {
      id: 31,
      title: "Creating a Node Server",
      link: "https://www.youtube.com/embed/x1cEbRIrOu4",
    },
    {
      id: 32,
      title: "JSON Response",
      link: "https://www.youtube.com/embed/eTXEL921gT4",
    },
    {
      id: 33,
      title: "HTML Response",
      link: "https://www.youtube.com/embed/50YtINv8Y-o",
    },
    {
      id: 34,
      title: "HTML Template",
      link: "https://www.youtube.com/embed/osX3gNkRlK0",
    },
    {
      id: 35,
      title: "HTTP Routing",
      link: "https://www.youtube.com/embed/S1QOZU5jOcw",
    },
    {
      id: 36,
      title: "Web Framework",
      link: "https://www.youtube.com/embed/_eeZQwPqteM",
    },
    {
      id: 37,
      title: "Node Runtime Recap",
      link: "https://www.youtube.com/embed/pt1HV6-d1YM",
    },
    {
      id: 38,
      title: "libuv",
      link: "https://www.youtube.com/embed/mVx_PzR9SPo",
    },
    {
      id: 39,
      title: "Thread Pool",
      link: "https://www.youtube.com/embed/I1sqnbJ1Fno",
    },
    {
      id: 40,
      title: "Thread Pool Size",
      link: "https://www.youtube.com/embed/3JYNNf3Iljo",
    },
    {
      id: 41,
      title: "Network I/O",
      link: "https://www.youtube.com/embed/qCC56uJh3bk",
    },
    {
      id: 42,
      title: "Event Loop",
      link: "https://www.youtube.com/embed/L18RHG2DwwA",
    },
    {
      id: 43,
      title: "Microtask Queues",
      link: "https://www.youtube.com/embed/M3sbOSJvhxg",
    },
    {
      id: 44,
      title: "Timer Queue",
      link: "https://www.youtube.com/embed/0eLD_uf8ieo",
    },
    {
      id: 45,
      title: "I/O Queue",
      link: "https://www.youtube.com/embed/RWCC4aWMlGw",
    },
    {
      id: 46,
      title: "I/O Polling",
      link: "https://www.youtube.com/embed/tVWFg6y6Wdg",
    },
    {
      id: 47,
      title: "Check Queue",
      link: "https://www.youtube.com/embed/6Mu_bhHmh2Q",
    },
    {
      id: 48,
      title: "Close Queue",
      link: "https://www.youtube.com/embed/XmOc2fCTKeQ",
    },
    {
      id: 49,
      title: "What is npm?",
      link: "https://www.youtube.com/embed/3eCIJHgEI28",
    },
    {
      id: 50,
      title: "package.json",
      link: "https://www.youtube.com/embed/bSuFQY0fB8Y",
    },
    {
      id: 51,
      title: "Installing Packages",
      link: "https://www.youtube.com/embed/exWXjqCSSRE",
    },
    {
      id: 52,
      title: "Using Packages",
      link: "https://www.youtube.com/embed/5oDSVJ7ZCXc",
    },
    {
      id: 53,
      title: "Dependencies",
      link: "https://www.youtube.com/embed/xpHziG_PNqY",
    },
    {
      id: 54,
      title: "Versioning",
      link: "https://www.youtube.com/embed/LuV5upokyBY",
    },
    {
      id: 55,
      title: "Global Packages",
      link: "https://www.youtube.com/embed/Ns0dG5QKI80",
    },
    {
      id: 56,
      title: "npm Scripts",
      link: "https://www.youtube.com/embed/XHtYRaIzNUM",
    },
    {
      id: 57,
      title: "Publishing an npm Package",
      link: "https://www.youtube.com/embed/IND8P7M3-Ng",
    },
    {
      id: 58,
      title: "Building CLI Tools",
      link: "https://www.youtube.com/embed/y-zS9XV_kRM",
    },
    {
      id: 59,
      title: "CLI Options",
      link: "https://www.youtube.com/embed/oIg08Z0bqsY",
    },
    {
      id: 60,
      title: "Interactive CLI Tools",
      link: "https://www.youtube.com/embed/sJdqdGxRbXY",
    },
    {
      id: 61,
      title: "Cluster Module",
      link: "https://www.youtube.com/embed/SHR-KmfRIsU",
    },
    {
      id: 62,
      title: "Worker Threads Module",
      link: "https://www.youtube.com/embed/Wm4MZwfEZd4",
    },
    {
      id: 63,
      title: "Deploying Node.js App",
      link: "https://www.youtube.com/embed/yln_CffenYw",
    },
    {
      id: 64,
      title: "Wrapping Up",
      link: "https://www.youtube.com/embed/bp41nA6UyY4",
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
          Codevolution
        </span>{" "}
        NodeJs Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="nodejs"
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

export default NodeCodevolution;

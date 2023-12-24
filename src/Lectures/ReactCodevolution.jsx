import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const ReactCodevolution = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction to ReactJS",
      link: "https://www.youtube.com/embed/QFaFIcGhPoM",
    },
    {
      id: 2,
      title: "Hello World in ReactJS",
      link: "https://www.youtube.com/embed/9hb_0TZ_MVI",
    },
    {
      id: 3,
      title: "Folder Structure in ReactJS",
      link: "https://www.youtube.com/embed/9VIiLJL0H4Y",
    },
    {
      id: 4,
      title: "Components in ReactJS",
      link: "https://www.youtube.com/embed/Y2hgEGPzTZY",
    },
    {
      id: 5,
      title: "Functional Components",
      link: "https://www.youtube.com/embed/Cla1WwguArA",
    },
    {
      id: 6,
      title: "Class Components in ReactJS",
      link: "https://www.youtube.com/embed/lnV34uLEzis",
    },
    {
      id: 7,
      title: "Hooks Update in ReactJS",
      link: "https://www.youtube.com/embed/oecI26cWqzk",
    },
    {
      id: 8,
      title: "JSX in ReactJS",
      link: "https://www.youtube.com/embed/7fPXI_MnBOY",
    },
    {
      id: 9,
      title: "Props in ReactJS",
      link: "https://www.youtube.com/embed/m7OWXtbiXX8",
    },
    {
      id: 10,
      title: "State in ReactJS",
      link: "https://www.youtube.com/embed/4ORZ1GmjaMc",
    },
    {
      id: 11,
      title: "setState in ReactJS",
      link: "https://www.youtube.com/embed/uirRaVjRsf4",
    },
    {
      id: 12,
      title: "Destructuring Props and State ",
      link: "https://www.youtube.com/embed/5_PdMS9CLLI",
    },
    {
      id: 13,
      title: "Event Handling in ReactJS",
      link: "https://www.youtube.com/embed/Znqv84xi8Vs",
    },
    {
      id: 14,
      title: "Binding Event Handlers ",
      link: "https://www.youtube.com/embed/kVWpBtRjkCk",
    },
    {
      id: 15,
      title: "Methods as Props in ReactJS",
      link: "https://www.youtube.com/embed/QpfyjwhY9kg",
    },
    {
      id: 16,
      title: "Conditional Rendering ",
      link: "https://www.youtube.com/embed/7o5FPaVA9m0",
    },
    {
      id: 17,
      title: "List Rendering in ReactJS",
      link: "https://www.youtube.com/embed/5s8Ol9uw-yM",
    },
    {
      id: 18,
      title: "Lists and Keys in ReactJS",
      link: "https://www.youtube.com/embed/0sasRxl35_8",
    },
    {
      id: 19,
      title: "Index as Key Anti-pattern ",
      link: "https://www.youtube.com/embed/xlPxnc5uUPQ",
    },
    {
      id: 20,
      title: "Styling and CSS Basics ",
      link: "https://www.youtube.com/embed/j5P9FHiBVNo",
    },
    {
      id: 21,
      title: "Basics of Form Handling",
      link: "https://www.youtube.com/embed/7Vo_VCcWupQ",
    },
    {
      id: 22,
      title: "Component Lifecycle Methods",
      link: "https://www.youtube.com/embed/qnN_FuFNq2g",
    },
    {
      id: 23,
      title: "Component Mounting Lifecycle",
      link: "https://www.youtube.com/embed/KDXZibVdiEI",
    },
    {
      id: 24,
      title: "Component Updating Lifecycle",
      link: "https://www.youtube.com/embed/DyPkojd1fas",
    },
    {
      id: 25,
      title: "Fragments in ReactJS",
      link: "https://www.youtube.com/embed/bHdh1T0-US4",
    },
    {
      id: 26,
      title: "Pure Components in ReactJS",
      link: "https://www.youtube.com/embed/YCRuTT31qR0",
    },
    {
      id: 27,
      title: "memo in ReactJS",
      link: "https://www.youtube.com/embed/7TaBhrnPH78",
    },
    {
      id: 28,
      title: "Refs in ReactJS",
      link: "https://www.youtube.com/embed/FXa9mMTKOu8",
    },
    {
      id: 29,
      title: "Refs with Class Components",
      link: "https://www.youtube.com/embed/8aCXVC9Qmto",
    },
    {
      id: 30,
      title: "Forwarding Refs in ReactJS",
      link: "https://www.youtube.com/embed/RLWniwmfdq4",
    },
    {
      id: 31,
      title: "Portals in ReactJS",
      link: "https://www.youtube.com/embed/HpHLa-5Wdys",
    },
    {
      id: 32,
      title: "Error Boundary in ReactJS",
      link: "https://www.youtube.com/embed/DNYXgtZBRPE",
    },
    {
      id: 33,
      title: "Higher Order Components (Part 1)",
      link: "https://www.youtube.com/embed/B6aNv8nkUSw",
    },
    {
      id: 34,
      title: "Higher Order Components (Part 2)",
      link: "https://www.youtube.com/embed/rsBQj6X7UK8",
    },
    {
      id: 35,
      title: "Higher Order Components (Part 3)",
      link: "https://www.youtube.com/embed/l8V59zIdBXU",
    },
    {
      id: 36,
      title: "Render Props (Part 1) in ReactJS",
      link: "https://www.youtube.com/embed/NdapMDgNhtE",
    },
    {
      id: 37,
      title: "Render Props (Part 2) in ReactJS",
      link: "https://www.youtube.com/embed/EZil2OTyB4w",
    },
    {
      id: 38,
      title: "Context (Part 1) in ReactJS",
      link: "https://www.youtube.com/embed/j3j8St50fNY",
    },
    {
      id: 39,
      title: "Context (Part 2) in ReactJS",
      link: "https://www.youtube.com/embed/lTjQjWemKgE",
    },
    {
      id: 40,
      title: "Context (Part 3) in ReactJS",
      link: "https://www.youtube.com/embed/A9WlkhdLnn0",
    },
    {
      id: 41,
      title: "HTTP and React in ReactJS",
      link: "https://www.youtube.com/embed/GTmjthNvrxY",
    },
    {
      id: 42,
      title: "HTTP GET Request in ReactJS",
      link: "https://www.youtube.com/embed/NEYrSUM4Umw",
    },
    {
      id: 43,
      title: "HTTP Post Request in ReactJS",
      link: "https://www.youtube.com/embed/x9UEDRbLhJE",
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
          Codevolution
        </span>{" "}
        Reactjs Course{" "}
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

export default ReactCodevolution;

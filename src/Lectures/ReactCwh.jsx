import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const ReactCwh = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction to React Js",
      link: "https://www.youtube.com/embed/-mJFZp84TIY",
    },
    {
      id: 2,
      title: "Creating our first react app ",
      link: "https://www.youtube.com/embed/hnVOvvbQrwA",
    },
    {
      id: 3,
      title: "JavaScript Refresher",
      link: "https://www.youtube.com/embed/kFe-RRaOy48",
    },
    {
      id: 4,
      title: "Understanding JSX",
      link: "https://www.youtube.com/embed/JvC7aA24m4Q",
    },
    {
      id: 5,
      title: "Setup + Adding Bootstrap to React",
      link: "https://www.youtube.com/embed/wa0IVAIqbo0",
    },
    {
      id: 6,
      title: "Understanding Props and PropTypes",
      link: "https://www.youtube.com/embed/xvm3X1oyTL8",
    },
    {
      id: 7,
      title: "Understanding State & Handling",
      link: "https://www.youtube.com/embed/leBpCqU8wdg",
    },
    {
      id: 8,
      title: "Adding more Logic to TextUtils",
      link: "https://www.youtube.com/embed/7BsjAdjx2Z0",
    },
    {
      id: 9,
      title: "Exercise 1: Enhancing TextUtils",
      link: "https://www.youtube.com/embed/KislX1yzZOQ",
    },
    {
      id: 10,
      title: "Creating 'Enable Dark Mode'",
      link: "https://www.youtube.com/embed/Sx2y4TjRZ9g",
    },
    {
      id: 11,
      title: "Exercise 1: Solutions + Shoutouts",
      link: "https://www.youtube.com/embed/9pqQZqcgkeg",
    },
    {
      id: 12,
      title: "Dark Mode & Refactoring ",
      link: "https://www.youtube.com/embed/vEzt66n2LZY",
    },
    {
      id: 13,
      title: "Adding+Auto Dismissing Alert",
      link: "https://www.youtube.com/embed/n_KtBVxBTb4",
    },
    {
      id: 14,
      title: "Exercise 2: Adding Custom Color",
      link: "https://www.youtube.com/embed/hWo5-vkJsj0",
    },
    {
      id: 15,
      title: "Changing title dynamically ",
      link: "https://www.youtube.com/embed/8eSQ1o6zir0",
    },
    {
      id: 16,
      title: "React Router Setup + Usage",
      link: "https://www.youtube.com/embed/WNU1BEZIjxg",
    },
    {
      id: 17,
      title: "[Free] Building + Hosting React",
      link: "https://www.youtube.com/embed/Fi75tq9JikI",
    },
    {
      id: 18,
      title: "Purchasing Domain+Hosting  ",
      link: "https://www.youtube.com/embed/YYVY1bPHaWE",
    },
    {
      id: 19,
      title: "Fixing Issues & Wrapping up ",
      link: "https://www.youtube.com/embed/kEvfVw5Sq5c",
    },
    {
      id: 20,
      title: "Exercise 2: Solutions ",
      link: "https://www.youtube.com/embed/Ghp1Mi43dxQ",
    },
    {
      id: 21,
      title: "Fixing few more Textutils Issues",
      link: "https://www.youtube.com/embed/tBaCrmZ_e80",
    },
    {
      id: 22,
      title: "Project 2 Setup ",
      link: "https://www.youtube.com/embed/x9p-4QGh-OI",
    },
    {
      id: 23,
      title: "Structure of our NewsMonkey App",
      link: "https://www.youtube.com/embed/9xjuIe4KM-4",
    },
    {
      id: 24,
      title: "Fetching API Key from News API",
      link: "https://www.youtube.com/embed/fSFlvm56JwM",
    },
    {
      id: 25,
      title: "Understanding state in class  ",
      link: "https://www.youtube.com/embed/OmoRSF1Ta6A",
    },
    {
      id: 26,
      title: "Looping through an array  ",
      link: "https://www.youtube.com/embed/ANKGfdi8Ki4",
    },
    {
      id: 27,
      title: "Using Fetch API in React",
      link: "https://www.youtube.com/embed/cIqgQn-XBIQ",
    },
    {
      id: 28,
      title: "Adding Previous & Next Buttons ",
      link: "https://www.youtube.com/embed/FOjrXXdiCMs",
    },
    {
      id: 29,
      title: "Adding loading spinner & variable ",
      link: "https://www.youtube.com/embed/sUGwamqnJnY",
    },
    {
      id: 30,
      title: "Adding Categories & propTypes ",
      link: "https://www.youtube.com/embed/L3zCEwGpK9I",
    },
    {
      id: 31,
      title: "Fetching News category wise ",
      link: "https://www.youtube.com/embed/y9ns0Cpp2do",
    },
    {
      id: 32,
      title: "Adding time, author and news ",
      link: "https://www.youtube.com/embed/tEm62tTwZE0",
    },
    {
      id: 33,
      title: "Refactoring News component",
      link: "https://www.youtube.com/embed/ZJMd2mN0sbs",
    },
    {
      id: 34,
      title: "React Component Lifecycle ",
      link: "https://www.youtube.com/embed/abjeWy4sZiU",
    },
    {
      id: 35,
      title: "Adding Infinite Scroll ",
      link: "https://www.youtube.com/embed/yLox5lhwaEU",
    },
    {
      id: 36,
      title: "Adding a top loading bar ",
      link: "https://www.youtube.com/embed/j_Gk58cOB2A",
    },
    {
      id: 37,
      title: "Hiding API Key by Adding Custom ",
      link: "https://www.youtube.com/embed/fg_Rc5cBAK8",
    },
    {
      id: 38,
      title: "Introduction to React Hooks",
      link: "https://www.youtube.com/embed/esrFnNV5Btc",
    },
    {
      id: 39,
      title: "Changing Class based NewsMonkey ",
      link: "https://www.youtube.com/embed/aSSVGdVk6fo",
    },
    {
      id: 40,
      title: "Sticky Navbar & NewsMonkey",
      link: "https://www.youtube.com/embed/7lrneLoa72s",
    },
    {
      id: 41,
      title: "Introduction to MERN stack",
      link: "https://www.youtube.com/embed/YhJ-lPiCfyc",
    },
    {
      id: 42,
      title: "Project 3: iNotebook ",
      link: "https://www.youtube.com/embed/kZbaAVJHdZw",
    },
    {
      id: 43,
      title: "iNotebook db & Express Server ",
      link: "https://www.youtube.com/embed/jWIeK3ueOm8",
    },
    {
      id: 44,
      title: "Creating Routes & Schema ",
      link: "https://www.youtube.com/embed/HpszyPglBtQ",
    },
    {
      id: 45,
      title: "Storing Data into the Database",
      link: "https://www.youtube.com/embed/weIrv6WbIec",
    },
    {
      id: 46,
      title: "Adding Data Validation ",
      link: "https://www.youtube.com/embed/N4GHLaCSXUg",
    },
    {
      id: 47,
      title: "Creating ThunderClient Collections ",
      link: "https://www.youtube.com/embed/vqCirjK61HI",
    },
    {
      id: 48,
      title: "Understanding Password Hashing",
      link: "https://www.youtube.com/embed/inEhzp3nD0M",
    },
    {
      id: 49,
      title: "Hashing Passwords using bcryptjs",
      link: "https://www.youtube.com/embed/nSIo0kHZcic",
    },
    {
      id: 50,
      title: "Creating Login Endpoint",
      link: "https://www.youtube.com/embed/j9fcNuNx-DA",
    },
    {
      id: 51,
      title: "Creating a middleware ",
      link: "https://www.youtube.com/embed/qY0PZ-z61EQ",
    },
    {
      id: 52,
      title: "Fetching all notes & Adding a Note",
      link: "https://www.youtube.com/embed/nXKUJipczn0",
    },
    {
      id: 53,
      title: "Updating an existing Note",
      link: "https://www.youtube.com/embed/2rwfG4H2FCk",
    },
    {
      id: 54,
      title: "Endpoint for deleting a Note",
      link: "https://www.youtube.com/embed/vdfCuvV9WaE",
    },
    {
      id: 55,
      title: "iNotebook React Project Setup",
      link: "https://www.youtube.com/embed/hfjQLssL0hs",
    },
    {
      id: 56,
      title: "Creating Navbar and Routes",
      link: "https://www.youtube.com/embed/x1Zs1kPqyxQ",
    },
    {
      id: 57,
      title: "Introduction to React Context API",
      link: "https://www.youtube.com/embed/3u9GZQN7ZUQ",
    },
    {
      id: 58,
      title: "useContext hook",
      link: "https://www.youtube.com/embed/coM0JK6o3mo",
    },
    {
      id: 59,
      title: "useLocation Hook in React",
      link: "https://www.youtube.com/embed/fqIZnugmDhY",
    },
    {
      id: 60,
      title: "iNotebook: Fetching Notes ",
      link: "https://www.youtube.com/embed/94BdnDVHrP0",
    },
    {
      id: 61,
      title: "iNotebook: Adding NoteItem",
      link: "https://www.youtube.com/embed/GsVXwTeMn4o",
    },
    {
      id: 62,
      title: "Adding font awesome icons ",
      link: "https://www.youtube.com/embed/pH37pK7kalA",
    },
    {
      id: 63,
      title: "Adding AddNote component ",
      link: "https://www.youtube.com/embed/EseqvMqulAQ",
    },
    {
      id: 64,
      title: "Adding 'delete note' functionality ",
      link: "https://www.youtube.com/embed/MQpI6pc6J6s",
    },
    {
      id: 65,
      title: "Adding 'fetch notes' functionality ",
      link: "https://www.youtube.com/embed/x-mYMGf7P6M",
    },
    {
      id: 66,
      title: "Adding a Modal ",
      link: "https://www.youtube.com/embed/J5hGX5_XZDk",
    },
    {
      id: 67,
      title: "Updating Notes on editt",
      link: "https://www.youtube.com/embed/lcJXF2Svo-c",
    },
    {
      id: 68,
      title: "Adding Frontend Validation ",
      link: "https://www.youtube.com/embed/W8SmVTL-ToY",
    },
    {
      id: 69,
      title: "Adding Login Component ",
      link: "https://www.youtube.com/embed/S0nmMn2n82k",
    },
    {
      id: 70,
      title: "Adding SignUp Component ",
      link: "https://www.youtube.com/embed/rw5NZB4P_0Q",
    },
    {
      id: 71,
      title: "Adding Alerts to iNotebook",
      link: "https://www.youtube.com/embed/1mH7SPeFwbg",
    },
    {
      id: 72,
      title: "Fetching User Specific ",
      link: "https://www.youtube.com/embed/MP-_pkakBao",
    },
    {
      id: 73,
      title: "Introduction to Redux",
      link: "https://www.youtube.com/embed/JZQWKYjfZlQ",
    },
    {
      id: 74,
      title: "Setting up React Application ",
      link: "https://www.youtube.com/embed/hFyLMMj8Ncg",
    },
    {
      id: 75,
      title: "Creating Reducer & Action ",
      link: "https://www.youtube.com/embed/jGCW8ZUrcqE",
    },
    {
      id: 76,
      title: "Creating Redux Store",
      link: "https://www.youtube.com/embed/-uqTWF0GfxA",
    },
    {
      id: 77,
      title: "Accessing State in Redux",
      link: "https://www.youtube.com/embed/TQGmTwrp_60",
    },
    {
      id: 78,
      title: "Updating State Different ",
      link: "https://www.youtube.com/embed/UX6Kf48qCvs",
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
         Code With Harry
        </span>{" "}
        ReactJs Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="reactjs"
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
export default ReactCwh;

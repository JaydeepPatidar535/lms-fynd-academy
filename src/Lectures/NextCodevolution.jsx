import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const NextCodevolution = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction",
      link: "https://www.youtube.com/embed/9P8mASSREYM",
    },
    {
      id: 2,
      title: "Hello World",
      link: "https://www.youtube.com/embed/RY6B7JSBRRg",
    },
    {
      id: 3,
      title: "Project Structure",
      link: "https://www.youtube.com/embed/e-3UPyuOCq0",
    },
    {
      id: 4,
      title: "Routing Section Intro",
      link: "https://www.youtube.com/embed/fUG8h5XopnU",
    },
    {
      id: 5,
      title: "Routing with Pages",
      link: "https://www.youtube.com/embed/hvYKrqnY8LM",
    },
    {
      id: 6,
      title: "Nested Routes",
      link: "https://www.youtube.com/embed/f-6GAntaum4",
    },
    {
      id: 7,
      title: "Dynamic Routes",
      link: "https://www.youtube.com/embed/Ql5kyJaYbls",
    },
    {
      id: 8,
      title: "Nested Dynamic Routes",
      link: "https://www.youtube.com/embed/nfAxNTmme64",
    },
    {
      id: 9,
      title: "Catch All Routes",
      link: "https://www.youtube.com/embed/ZHn726VDoIY",
    },
    {
      id: 10,
      title: "Link Component Navigation",
      link: "https://www.youtube.com/embed/sigcnKAPddM",
    },
    {
      id: 11,
      title: "Navigating Programmatically",
      link: "https://www.youtube.com/embed/8jhLvnm7fmE",
    },
    {
      id: 12,
      title: "Custom 404 Page",
      link: "https://www.youtube.com/embed/vpSDQawRpEk",
    },
    {
      id: 13,
      title: "Routing Summary",
      link: "https://www.youtube.com/embed/TaDGyvh2Ud0",
    },
    {
      id: 14,
      title: "Pre-rendering and Data Fetching ",
      link: "https://www.youtube.com/embed/GOdu5C8JzL8",
    },
    {
      id: 15,
      title: "Pre-rendering",
      link: "https://www.youtube.com/embed/BeXbCgRxifs",
    },
    {
      id: 16,
      title: "Static Generation",
      link: "https://www.youtube.com/embed/keP1PygtJ8c",
    },
    {
      id: 17,
      title: "Static Generation getStaticProps",
      link: "https://www.youtube.com/embed/7UouvxZ6OaM",
    },
    {
      id: 18,
      title: "Pages vs Components",
      link: "https://www.youtube.com/embed/OYzrF4wuDKs",
    },
    {
      id: 19,
      title: "More on getStaticProps",
      link: "https://www.youtube.com/embed/yoEHWwEVvzY",
    },
    {
      id: 20,
      title: "Inspecting Static Generation Builds",
      link: "https://www.youtube.com/embed/AWbYJgsXHQ4",
    },
    {
      id: 21,
      title: "Running Static Generation Builds",
      link: "https://www.youtube.com/embed/QcUU89xKu70",
    },
    {
      id: 22,
      title: "SSG with Dynamic Parameters",
      link: "https://www.youtube.com/embed/1XEe-ng57GA",
    },
    {
      id: 23,
      title: "SSG with getStaticPaths",
      link: "https://www.youtube.com/embed/TOIRxWQPgi0",
    },
    {
      id: 24,
      title: "Inspecting getStaticPaths Builds",
      link: "https://www.youtube.com/embed/Isrmm6XhAdA",
    },
    {
      id: 25,
      title: "Fetching Paths for getStaticPaths",
      link: "https://www.youtube.com/embed/NaYs1Gdg4AE",
    },
    {
      id: 26,
      title: "getStaticPaths fallback false",
      link: "https://www.youtube.com/embed/ssVYQLGUHiI",
    },
    {
      id: 27,
      title: "getStaticPaths fallback true",
      link: "https://www.youtube.com/embed/j4nAZaPQzwc",
    },
    {
      id: 28,
      title: "getStaticPaths fallback blocking",
      link: "https://www.youtube.com/embed/5-qPviQG0AQ",
    },
    {
      id: 29,
      title: "Incremental Static Regeneration",
      link: "https://www.youtube.com/embed/d5unMDna5ng",
    },
    {
      id: 30,
      title: "Inspecting ISR Builds",
      link: "https://www.youtube.com/embed/FZTaD32ueE8",
    },
    {
      id: 31,
      title: "Server-side Rendering",
      link: "https://www.youtube.com/embed/3eUZeuGXo_U",
    },
    {
      id: 32,
      title: "SSR with getServerSideProps",
      link: "https://www.youtube.com/embed/cPqG8-NoxM0",
    },
    {
      id: 33,
      title: "SSR with Dynamic Parameters",
      link: "https://www.youtube.com/embed/UP8s2_8jxIQ",
    },
    {
      id: 34,
      title: "getServerSideProps context",
      link: "https://www.youtube.com/embed/DgLb5E6omTg",
    },
    {
      id: 35,
      title: "Inspecting SSR Builds",
      link: "https://www.youtube.com/embed/IbA9z9iMEJs",
    },
    {
      id: 36,
      title: "Client-side Data Fetching",
      link: "https://www.youtube.com/embed/k9b_tIhnkls",
    },
    {
      id: 37,
      title: "SWR for Client-side Data Fetching",
      link: "https://www.youtube.com/embed/CQ5yHU1wYOo",
    },
    {
      id: 38,
      title: "Pre-rendering + Client side ",
      link: "https://www.youtube.com/embed/yFvLLPBubfw",
    },
    {
      id: 39,
      title: "Pre-rendering & Data ",
      link: "https://www.youtube.com/embed/cBWzJlVWuR0",
    },
    {
      id: 40,
      title: "API Routes Section Intro",
      link: "https://www.youtube.com/embed/5QDrrirlgmI",
    },
    {
      id: 41,
      title: "API Routes",
      link: "https://www.youtube.com/embed/aZkZUduCauo",
    },
    {
      id: 42,
      title: "API GET Request",
      link: "https://www.youtube.com/embed/GgzWFxIiwK4",
    },
    {
      id: 43,
      title: "API POST Request",
      link: "https://www.youtube.com/embed/wqHGLjuXuHo",
    },
    {
      id: 44,
      title: "Dynamic API Routes",
      link: "https://www.youtube.com/embed/tuxk_VbocBk",
    },
    {
      id: 45,
      title: "API DELETE Request",
      link: "https://www.youtube.com/embed/je8jPi8KOY4",
    },
    {
      id: 46,
      title: "Catch All API Routes",
      link: "https://www.youtube.com/embed/Y8HJCfWRMTE",
    },
    {
      id: 47,
      title: "APIs and Pre-rendering",
      link: "https://www.youtube.com/embed/lmB340ym6SE",
    },
    {
      id: 48,
      title: "API Routes Summary",
      link: "https://www.youtube.com/embed/_v_irwUqBUM",
    },
    {
      id: 49,
      title: "Styling Section Intro",
      link: "https://www.youtube.com/embed/V2SJpj2Jrx4",
    },
    {
      id: 50,
      title: "Global Styles",
      link: "https://www.youtube.com/embed/k0UTW9dwfbk",
    },
    {
      id: 51,
      title: "Component Level Styles",
      link: "https://www.youtube.com/embed/NHr1HduGz08",
    },
    {
      id: 52,
      title: "SASS Support",
      link: "https://www.youtube.com/embed/_14sPRuHcYw",
    },
    {
      id: 53,
      title: "CSS in JS",
      link: "https://www.youtube.com/embed/Tj22PRt2hiU",
    },
    {
      id: 54,
      title: "Styling Summary",
      link: "https://www.youtube.com/embed/c0RnUgZSIDs",
    },
    {
      id: 55,
      title: "Miscellaneous Section Intro",
      link: "https://www.youtube.com/embed/xm108xB0LT0",
    },
    {
      id: 56,
      title: "App Layout",
      link: "https://www.youtube.com/embed/9g_3Zsoj17I",
    },
    {
      id: 57,
      title: "Head Component",
      link: "https://www.youtube.com/embed/vWWd5ezQTic",
    },
    {
      id: 58,
      title: "Image Component",
      link: "https://www.youtube.com/embed/ZRZngn_GdXY",
    },
    {
      id: 59,
      title: "Absolute Imports & Module Paths",
      link: "https://www.youtube.com/embed/V-ntY44UvhM",
    },
    {
      id: 60,
      title: "Static HTML Export",
      link: "https://www.youtube.com/embed/T2Z6JVzz854",
    },
    {
      id: 61,
      title: "TypeScript Support",
      link: "https://www.youtube.com/embed/2SLLvO9OK10",
    },
    {
      id: 62,
      title: "Preview Mode",
      link: "https://www.youtube.com/embed/BYvH0G02uuI",
    },
    {
      id: 63,
      title: "Redirects",
      link: "https://www.youtube.com/embed/NNxkIOlMBDc",
    },
    {
      id: 64,
      title: "Environment Variables",
      link: "https://www.youtube.com/embed/vS86x_e0zBk",
    },
    {
      id: 65,
      title: "Miscellaneous Summary",
      link: "https://www.youtube.com/embed/BxdXXnL0xLw",
    },
    {
      id: 66,
      title: "Authentication Section Intro",
      link: "https://www.youtube.com/embed/d3cfV2Y0_p0",
    },
    {
      id: 67,
      title: "Authentication in Next.js",
      link: "https://www.youtube.com/embed/Lfgdc8r8CRE",
    },
    {
      id: 68,
      title: "NextAuth Setup",
      link: "https://www.youtube.com/embed/Aiqzfmy9A_4",
    },
    {
      id: 69,
      title: "Sign In and Sign Out",
      link: "https://www.youtube.com/embed/K08z-qiySZg",
    },
    {
      id: 70,
      title: "Client-side Authentication",
      link: "https://www.youtube.com/embed/B5wyB5QiseU",
    },
    {
      id: 71,
      title: "Securing Pages Client-side",
      link: "https://www.youtube.com/embed/vCpqiRabmDk",
    },
    {
      id: 72,
      title: "NextAuth Provider",
      link: "https://www.youtube.com/embed/dhLo-GhOPRw",
    },
    {
      id: 73,
      title: "Server-side Authentication",
      link: "https://www.youtube.com/embed/ae8lxOOhOtY",
    },
    {
      id: 74,
      title: "Securing Pages Server-side",
      link: "https://www.youtube.com/embed/jbcChDTnPuU",
    },
    {
      id: 75,
      title: "Securing API Routes",
      link: "https://www.youtube.com/embed/ODL0Dlh7ZFE",
    },
    {
      id: 76,
      title: "Connecting to a Database",
      link: "https://www.youtube.com/embed/H4ptrFimcSM",
    },
    {
      id: 77,
      title: "Callbacks",
      link: "https://www.youtube.com/embed/TcnRPXPM68Q",
    },
    {
      id: 78,
      title: "Authentication Summary",
      link: "https://www.youtube.com/embed/9wjWM0ZpDuU",
    },
    {
      id: 79,
      title: "Deploying Next.js Apps to Vercel",
      link: "https://www.youtube.com/embed/KmxAH7ng8Qw",
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
        NextJs Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="nextjs"
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

export default NextCodevolution;

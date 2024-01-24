import React, { useState } from "react";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const NextCwh = () => {
  // Define an array of lectures with their video links
  const lectures = [
    {
      id: 1,
      title: "Introduction to Next.js",
      link: "https://www.youtube.com/embed/DZKOunP-WLQ",
    },
    {
      id: 2,
      title: "Our First Next.js Website",
      link: "https://www.youtube.com/embed/ne_h515wcv4",
    },
    {
      id: 3,
      title: "File-Based Routing in Next.js",
      link: "https://www.youtube.com/embed/zSxopWQF4cg",
    },
    {
      id: 4,
      title: "JavaScript and React Refresher",
      link: "https://www.youtube.com/embed/5Dd6JHmyLEc",
    },
    {
      id: 5,
      title: "Project 1: Hunting Coder",
      link: "https://www.youtube.com/embed/9C5FS4bw4mM",
    },
    {
      id: 6,
      title: "Head and Script Component",
      link: "https://www.youtube.com/embed/0oRZFuVZV3E",
    },
    {
      id: 7,
      title: "Image Component in Next.js",
      link: "https://www.youtube.com/embed/yvA5vQ6-B7w",
    },
    {
      id: 8,
      title: "Creating Multiple Pages",
      link: "https://www.youtube.com/embed/32KkgR2xSLw",
    },
    {
      id: 9,
      title: "Link Component in Next.js",
      link: "https://www.youtube.com/embed/_wpd1k3gN08",
    },
    {
      id: 10,
      title: "Component Level CSS",
      link: "https://www.youtube.com/embed/_fEf0J10gs4",
    },
    {
      id: 11,
      title: "Adding Global Styles",
      link: "https://www.youtube.com/embed/dT4OExlRasA",
    },
    {
      id: 12,
      title: "Styled JSX in Next.js",
      link: "https://www.youtube.com/embed/pwHf-3stDeE",
    },
    {
      id: 13,
      title: "Cleanup of Hunting Coder Blog",
      link: "https://www.youtube.com/embed/eLhlh2RZKRk",
    },
    {
      id: 14,
      title: "Displaying Navbar on All Pages",
      link: "https://www.youtube.com/embed/40AkRpYSV04",
    },
    {
      id: 15,
      title: "Creating Blog and Blogpost ",
      link: "https://www.youtube.com/embed/ccgK9ZCRU8w",
    },
    {
      id: 16,
      title: "Adding Blog JSONs as Data",
      link: "https://www.youtube.com/embed/XkFiZyYdJMo",
    },
    {
      id: 17,
      title: "Introduction to API Routes ",
      link: "https://www.youtube.com/embed/gCssfulsemc",
    },
    {
      id: 18,
      title: "Creating Endpoints Get Blogposts",
      link: "https://www.youtube.com/embed/dDRDJfG2EAY",
    },
    {
      id: 19,
      title: "Using the API Endpoints",
      link: "https://www.youtube.com/embed/T_aH6sRlj6A",
    },
    {
      id: 20,
      title: "Fetching BlogPost ",
      link: "https://www.youtube.com/embed/a0V9B9EsQY0",
    },
    {
      id: 21,
      title: "Prerendering Strategies ",
      link: "https://www.youtube.com/embed/rabU9vZBoTg",
    },
    {
      id: 22,
      title: "Server Side Rendering ",
      link: "https://www.youtube.com/embed/ZvGoW9p9at0",
    },
    {
      id: 23,
      title: "Static Site Generation ",
      link: "https://www.youtube.com/embed/ZvitCMlb9-0",
    },
    {
      id: 24,
      title: "Rendering HTML Text ",
      link: "https://www.youtube.com/embed/3nFlaIPs2PY",
    },
    {
      id: 25,
      title: "Creating an API to Save ",
      link: "https://www.youtube.com/embed/nPsrKMmRlCE",
    },
    {
      id: 26,
      title: "Designing the /contact FrontEnd ",
      link: "https://www.youtube.com/embed/jp2lI31UUtw",
    },
    {
      id: 27,
      title: "Designing the About Page",
      link: "https://www.youtube.com/embed/Rd8gCtJ5aLo",
    },
    {
      id: 28,
      title: "Styling Fixes in Hunting ",
      link: "https://www.youtube.com/embed/k_UvCSj8A4k",
    },
    {
      id: 29,
      title: "Adding Infinite Scroll",
      link: "https://www.youtube.com/embed/GRUmg3SujN4",
    },
    {
      id: 30,
      title: "Adding Responsive Design ",
      link: "https://www.youtube.com/embed/E2dlagIvE6g",
    },
    {
      id: 31,
      title: "Deploying Hunting Coder",
      link: "https://www.youtube.com/embed/uBt7_-RIJjM",
    },
    {
      id: 32,
      title: "Adding huntingcoder.com ",
      link: "https://www.youtube.com/embed/6cxxSgNF6-I",
    },
    {
      id: 33,
      title: "Project 2: Codeswear.com ",
      link: "https://www.youtube.com/embed/NYXxqmUvRec",
    },
    {
      id: 34,
      title: "Codeswear.com Project ",
      link: "https://www.youtube.com/embed/A_iHEF82ULg",
    },
    {
      id: 35,
      title: "Creating Pages for Codeswear.com",
      link: "https://www.youtube.com/embed/kcwInHtJOkU",
    },
    {
      id: 36,
      title: "Creating NavBar, Footer ",
      link: "https://www.youtube.com/embed/Fpqz4VPXlN8",
    },
    {
      id: 37,
      title: "Designing the Tshirts Page ",
      link: "https://www.youtube.com/embed/1sPWvaiSbkM",
    },
    {
      id: 38,
      title: "Designing Mugs, Sticker Page ",
      link: "https://www.youtube.com/embed/LxmXE7-Lh7w",
    },
    {
      id: 39,
      title: "Designing the Cart Sidebar ",
      link: "https://www.youtube.com/embed/u9_ePWVESU0",
    },
    {
      id: 40,
      title: "Designing Product Page ",
      link: "https://www.youtube.com/embed/ALF4Tzlm9YQ",
    },
    {
      id: 41,
      title: "Adding Pincode Serviceability ",
      link: "https://www.youtube.com/embed/SzExD4Sn-xM",
    },
    {
      id: 42,
      title: "Creating Cart State  Codeswear.com",
      link: "https://www.youtube.com/embed/sS-GyagLhJg",
    },
    {
      id: 43,
      title: "Improving Sidebar & Checkout ",
      link: "https://www.youtube.com/embed/4_FkvAoC_zw",
    },
    {
      id: 44,
      title: "Creating Orders Page  ",
      link: "https://www.youtube.com/embed/9EAALKzzaz0",
    },
    {
      id: 45,
      title: "Creating Login & Signup ",
      link: "https://www.youtube.com/embed/pc2F7ECVc14",
    },
    {
      id: 46,
      title: "Adding MongoDB Database ",
      link: "https://www.youtube.com/embed/Z6FzMFXHaq4",
    },
    {
      id: 47,
      title: "Creating APIs for Codeswear.com",
      link: "https://www.youtube.com/embed/2TdzZcVR_4g",
    },
    {
      id: 48,
      title: "Displaying Tshirts  Codeswear.com",
      link: "https://www.youtube.com/embed/bufV6bW96Bc",
    },
    {
      id: 49,
      title: "Displaying Tshirt Variants ",
      link: "https://www.youtube.com/embed/iLd7e2RcFFs",
    },
    {
      id: 50,
      title: "Replacing Dummy Codeswear.com",
      link: "https://www.youtube.com/embed/H6lhnl-1GqY",
    },
    {
      id: 51,
      title: 'Making the "Buy Now" Button ',
      link: "https://www.youtube.com/embed/QHFlaFG8udo",
    },
    {
      id: 52,
      title: "Adding React Toastify",
      link: "https://www.youtube.com/embed/fAgMyd05A60",
    },
    {
      id: 53,
      title: "Customizing Hoodies",
      link: "https://www.youtube.com/embed/L_QiA3ka9HA",
    },
    {
      id: 54,
      title: "Creating Signup for Codeswear.com",
      link: "https://www.youtube.com/embed/OHlwNYFryuw",
    },
    {
      id: 55,
      title: "Creating Login  for Codeswear.com",
      link: "https://www.youtube.com/embed/DikbWjymyPE",
    },
    {
      id: 56,
      title: "Adding Encryption Codeswear.com",
      link: "https://www.youtube.com/embed/12C1nBvTxl4",
    },
    {
      id: 57,
      title: "Introduction to JWT",
      link: "https://www.youtube.com/embed/tJ5Yfw183pI",
    },
    {
      id: 58,
      title: "Adding Login and Logout Buttons",
      link: "https://www.youtube.com/embed/aDvpxiHOd1E",
    },
    {
      id: 59,
      title: "Adding React Top Loading Bar",
      link: "https://www.youtube.com/embed/nIjJBDvCbc8",
    },
    {
      id: 60,
      title: "Creating Orders Page",
      link: "https://www.youtube.com/embed/YyNiq8s6LzU",
    },
    {
      id: 61,
      title: "Adding Environment Variables ",
      link: "https://www.youtube.com/embed/j2p4OwS5JwU",
    },
    {
      id: 62,
      title: "Adding Payment Gateway",
      link: "https://www.youtube.com/embed/7VwmgpcDs9Y",
    },
    {
      id: 63,
      title: "Initiating Order and Redirecting ",
      link: "https://www.youtube.com/embed/5VE82TqOaiM",
    },
    {
      id: 64,
      title: "Creating Order and Orders Page ",
      link: "https://www.youtube.com/embed/9irZtvl5yjg",
    },
    {
      id: 65,
      title: "Pincode to City & State",
      link: "https://www.youtube.com/embed/PUqDmrzFv_0",
    },
    {
      id: 66,
      title: "Out of Stock Check ",
      link: "https://www.youtube.com/embed/5JHcQIV-Elo",
    },
    {
      id: 67,
      title: "Fixing Checkout Issues",
      link: "https://www.youtube.com/embed/2r45xXlv2cM",
    },
    {
      id: 68,
      title: "Showing Sidebar Few Pages",
      link: "https://www.youtube.com/embed/yS07_L8Ze5M",
    },
    {
      id: 69,
      title: "PayTM Checksum Tampering Check",
      link: "https://www.youtube.com/embed/M3lEFTouYMM",
    },
    {
      id: 70,
      title: "Displaying Out of Stock Items",
      link: "https://www.youtube.com/embed/uicIKWuuueE",
    },
    {
      id: 71,
      title: "PinCodes JSON + Avoiding ",
      link: "https://www.youtube.com/embed/aQRDHGCuzJs",
    },
    {
      id: 72,
      title: "Creating MyAccount Section r",
      link: "https://www.youtube.com/embed/2M-ppGLItCE",
    },
    {
      id: 73,
      title: "Forgot Password Page",
      link: "https://www.youtube.com/embed/RCdG2frnyxw",
    },
    {
      id: 74,
      title: "Deploying Codeswear.com ",
      link: "https://www.youtube.com/embed/G_9U6PPJNiE",
    },
    {
      id: 75,
      title: " Dashboard for Codeswear.com",
      link: "https://www.youtube.com/embed/eV7j6B-IFoA",
    },
    {
      id: 76,
      title: "Creating Pages for the Dashboard",
      link: "https://www.youtube.com/embed/0pxed8jZtEQ",
    },
    {
      id: 77,
      title: "Populating Pages with Template",
      link: "https://www.youtube.com/embed/1Jk4U1zKh2M",
    },
    {
      id: 78,
      title: "Creating Form for Adding Product",
      link: "https://www.youtube.com/embed/NkGhs_n1PCg",
    },
    {
      id: 79,
      title: "Displaying Products in Material",
      link: "https://www.youtube.com/embed/BN8Phb1O6xo",
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
        NextJs Course
      </h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 p-4">
          <div className="flex items-center justify-center h-max my-4">
            <iframe
              title="nextjs"
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

export default NextCwh;

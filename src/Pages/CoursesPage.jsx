import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";

const CoursesPage = () => {
  const allCoursesData = [
    {
      title: "Love Babbar DSA Course",
      category: "DSA",
      link: "/lovebabbardsa",
      imageUrl:
        "https://i.ytimg.com/vi/WQoB2z67hvY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASA9_LqyjZXRFwTd4zcXZI-SUHcA",
    },
    {
      title: "Nodejs course by Technical Thapa",
      category: "Nodejs",
      link: "/nodetechnicalthapa",
      imageUrl:
        "https://i.ytimg.com/vi/IIpiLZGTWuo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgwPqcoFvg-k7uc3CnVQ0l6gBMAQ",
    },
    {
      title: "Code Step by step Nodejs Course",
      category: "Nodejs",
      link: "/nodecodestep",
      imageUrl:
        "https://i.ytimg.com/vi/zaLfOjNEOaQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGTZ3E3IXn_OggiODPIKesO_4ggA",
    },
    {
      title: "Striver A2Z DSA Series",
      category: "DSA",
      link: "/striverdsa",
      imageUrl:
        "https://i.ytimg.com/vi/h3uDCJ5mvgw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW3LOvtXk01PvxoBtaF8rukNhjQg",
    },
    {
      title: "Java with DSA by Kunal Kushwaha",
      category: "DSA",
      link: "/javadsakunal",
      imageUrl:
        "https://i.ytimg.com/vi/rZ41y93P2Qo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBS99SHcK2eiRNg239b790oT6wPNQ",
    },
    {
      title: "Namste JavaScript by Akshay Saini",
      category: "JavaScript",
      link: "/javascriptakshay",
      imageUrl:
        "https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEKFeZJ9rNZqMkNlDZmB9yweaHEg",
    },
    {
      title: "DSA by Code With Harry",
      category: "DSA",
      link: "/cwhdsa",
      imageUrl:
        "https://i.ytimg.com/vi/5_5oE5lgrhw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQOq0qiqpW6l2SzU6VHARSBo3aLQ",
    },
    {
      title: "Python Course by CodeWith Harry",
      category: "Python",
      link: "/pythoncwh",
      imageUrl:
        "https://i.ytimg.com/vi/7wnove7K-ZQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSTeHTyT5nUsw4vKLnnQfQP7HzDA",
    },
    {
      title: "Node.js Tutorial by Codevolution",
      category: "Nodejs",
      link: "/nodecodevolution",
      imageUrl:
        "https://i.ytimg.com/vi/LAUi8pPlcUM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwwF3wWDv_fuWo7tzEEdUH-i5wXg",
    },
    {
      title: "Reactjs Tutorial for Beginners by Codevolution",
      category: "React",
      link: "/reactcodevolution",
      imageUrl:
        "https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNd090zhR3S_d4NW2jrmOjjt2E5g",
    },
    {
      title: "React Redux Tutorial by Codevolution",
      category: "React",
      link: "/reduxcodevolution",
      imageUrl:
        "https://i.ytimg.com/vi/9boMnm5X9ak/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc6VmsGHWjkxeJ9LNmfcl0hcHCoQ",
    },
    {
      title: "Next.js tutorial for Beginners by Codevolution",
      category: "Nextjs",
      link: "/nextcodevolution",
      imageUrl:
        "https://i.ytimg.com/vi/9P8mASSREYM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAco2uHZRiRSUYoAC7rCD0AQHA_vA",
    },
    {
      title: "Java by Shradha Khapra",
      category: "Java",
      link: "/javaapnacollege",
      imageUrl:
        "https://i.ytimg.com/vi/yRpLlJmRo2w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2X_0aPou7ac_e8ptvdwHqQB13bQ",
    },
    {
      title: "Next.js Tutorial in hindi by Code step by step",
      category: "Nextjs",
      link: "/nextcodestep",
      imageUrl:
        "https://i.ytimg.com/vi/YIqLzP0sVdc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYTNN8rxG6ngqLsTplHCB0WcY3TQ",
    },
    {
      title: "JavaScript Course by CodeWithHarry",
      category: "JavaScript",
      link: "/javascriptcwh",
      imageUrl:
        "https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDm5t8Z3uhpFcB-rdopNWpdCmvrlQ",
    },
    {
      title: "Java Tutorial for Beginners by CodeWithHarry",
      category: "Java",
      link: "/javacwh",
      imageUrl:
        "https://i.ytimg.com/vi/ntLJmHOJ0ME/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnJo55et4zflgyRXBpwoX_DAVVKw",
    },
    {
      title: "Python Course by Navin Reddy",
      category: "Python",
      link: "/pythonnavin",
      imageUrl:
        "https://i.ytimg.com/vi/QXeEoD0pB3E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3npa5ALtruCI4mVidy_y9Mw34aw",
    },
    {
      title: "Reactjs Tutorial in hindi by CodeWithHarry",
      category: "React",
      link: "/reactcwh",
      imageUrl:
        "https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCozGgvj6TRsUi50SmoSE7jJ6wjqA",
    },
    {
      title: "Nodejs by Piyush Garg",
      category: "Nodejs",
      link: "/nodepiyush",
      imageUrl:
        "https://i.ytimg.com/vi/ohIAiuHMKMI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMwMCr-EzG88eRxhPV_FSsClT3mw",
    },
    {
      title: "Java Course by Navin Reddy",
      category: "Java",
      link: "/javanavin",
      imageUrl:
        "https://i.ytimg.com/vi/bm0OyhwFDuY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2orPbvoMeN_2YMyr-P8hoS7KmA",
    },
    {
      title: "Complete Pyhton Course by WsCube Tech",
      category: "Python",
      link: "/pythonws",
      imageUrl:
        "https://i.ytimg.com/vi/OZIRAavoGng/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2uiGKYscqdUVzesD8eouFbeQ5QA",
    },
    {
      title: "React Course by Hitesh Choudhary",
      category: "React",
      link: "/reacthitesh",
      imageUrl:
        "https://i.ytimg.com/vi/eCU7FfMl5WU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjHvkgau9-trZe60vQ9KiwpTNpJA",
    },
    {
      title: "Core Java by Durga Sir",
      category: "Java",
      link: "/corejavadurga",
      imageUrl:
        "https://i.ytimg.com/vi/eTXd89t8ngI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzz4OOoWrJloVFGbAbdyWBfBQGsA",
    },
    {
      title: "Python By Durga Sir",
      category: "Python",
      link: "/pythondurga",
      imageUrl:
        "https://i.ytimg.com/vi/CtbckFw0pJs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAL1cAwOOI9rmdbYTWd52UNUKfByg",
    },
    {
      title: "Nextjs Authentication course by Hitesh Choudhary",
      category: "Nextjs",
      link: "/nexthitesh",
      imageUrl:
        "https://i.ytimg.com/vi/iPGXk-i-VYU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdAQWzGiJWwN8ANd3tqik5UpEn2A",
    },
    {
      title: "C++ Placement course by Apna College",
      category: "C++",
      link: "/cppapna",
      imageUrl:
        "https://i.ytimg.com/vi/z9bZufPHFLU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaogj9WlE8AhxGRRyiTwtVm99V6g",
    },
    {
      title: "Next.js by CodeWithHarry",
      category: "Nextjs",
      link: "/nextcwh",
      imageUrl:
        "https://i.ytimg.com/vi/DZKOunP-WLQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5OH3ilH6Z-WC_VkW7G21_Sgf2LQ",
    },
    {
      title: "C++ Programming by Neso Academy",
      category: "C++",
      link: "/cppneso",
      imageUrl:
        "https://i.ytimg.com/vi/s0g4ty29Xgg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDflnVVdyG-w7gx6Cx_V7ZEwPBZYw",
    },
    {
      title: "Javascript by Hitesh Choudhary",
      category: "JavaScript",
      link: "/javascripthitesh",
      imageUrl:
        "https://i.ytimg.com/vi/Hr5iLG7sUa0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBze4aFF_VvRDRl0QfV1D4M4_M2ng",
    },
    {
      title: "Javascript by Navin Reddy",
      category: "JavaScript",
      link: "/javascriptnavin",
      imageUrl:
        "https://i.ytimg.com/vi/PlbupGCBV6w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC0cRWl-pkuAIGbvkxFdN3S2rdew",
    },
    {
      title: "C++ Tutorial by CodeWithHarry",
      category: "C++",
      link: "/cppcwh",
      imageUrl:
        "https://i.ytimg.com/vi/j8nAHeVKL08/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWx1orFWsDos2lkr1WiBI721Pgxw",
    },
    {
      title: "Nextjs for Beginners by Dave Gray",
      category: "Nextjs",
      link: "/nextdavegray",
      imageUrl:
        "https://i.ytimg.com/vi/6h649f2fB9Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGl1UBCDQvJfBNLMXKW_HATdZnPg",
    },
    {
      title: "C++ by PW SKills",
      category: "C++",
      link: "/cpppw",
      imageUrl:
        "https://i.ytimg.com/vi/bL-o2xBENY0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQeA6EN23gtMpoQRrizvDaW9PT-g",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const filteredCourses =
    selectedCategory === "All categories"
      ? allCoursesData
      : allCoursesData.filter((course) => course.category === selectedCategory);

  const categories = [
    "All categories",
    "DSA",
    "Java",
    "Python",
    "C++",
    "React",
    "JavaScript",
    "Nodejs",
    "Nextjs",
  ];


  return (
    <AuthenticatedHomeLayout>
      <div className="py-16 md:py-8">
        <div className="hidden md:flex justify-center">
          {/* Render categories only on screens larger than md (medium) */}
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`text-gray-900 border border-white hover:border-gray-200 ${
                selectedCategory === category
                  ? "bg-blue-700 text-white"
                  : "dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white text-gray-900"
              } rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
                selectedCategory === category
                  ? "dark:text-white dark:focus:ring-gray-800"
                  : "dark:text-white dark:focus:ring-gray-800"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Link to={course.link}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={course.imageUrl}
                  alt={course.title}
                />
              </Link>
              <h4 className="mt-3 mb-5 font-bold text-center text-white-500 hover:text-white-700 transition-colors">
                <Link to={course.link}>{course.title}</Link>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </AuthenticatedHomeLayout>
  );
};

export default CoursesPage;
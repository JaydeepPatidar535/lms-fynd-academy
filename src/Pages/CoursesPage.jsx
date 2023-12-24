import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthenticatedHomeLayout from "../Layouts/AuthenticatedHomeLayout";


import { BrowserRouter as Router } from 'react-router-dom';

const CoursesPage = () => {
  const allCoursesData = [
    {
      title: <Link to="/lovebabbardsa">Love Babbar DSA Course</Link>,
      category: "DSA",
      imageUrl:
        "https://i.ytimg.com/vi/WQoB2z67hvY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASA9_LqyjZXRFwTd4zcXZI-SUHcA",
    },
    {
      title: <Link to="/nodetechnicalthapa">Nodejs course by Technical Thapa</Link>,
      category: "Nodejs",
      imageUrl:
        "https://i.ytimg.com/vi/IIpiLZGTWuo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgwPqcoFvg-k7uc3CnVQ0l6gBMAQ",
    },
    {
      title: <Link to="/nodecodestep">Code Step by step Nodejs Course</Link>,
      category: "Nodejs",
      imageUrl:
        "https://i.ytimg.com/vi/zaLfOjNEOaQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGTZ3E3IXn_OggiODPIKesO_4ggA",
    },
    {
      title: <Link to="/striverdsa">Striver A2Z DSA Series</Link>,
      category: "DSA",
      imageUrl:
        "https://i.ytimg.com/vi/h3uDCJ5mvgw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW3LOvtXk01PvxoBtaF8rukNhjQg",
    },
    {
      title: <Link to="/javadsakunal">Java with DSA by Kunal Kushwaha</Link>,
      category: "DSA",
      imageUrl:
        "https://i.ytimg.com/vi/rZ41y93P2Qo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBS99SHcK2eiRNg239b790oT6wPNQ",
    },
    {
      title: <Link to="/javascriptakshay">Namste JavaScript by Akshay Saini</Link>,
      category: "JavaScript",
      imageUrl:
        "https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEKFeZJ9rNZqMkNlDZmB9yweaHEg",
    },
    {
      title: <Link to="/cwhdsa">DSA by Code With Harry</Link>,
      category: "DSA",
      imageUrl:
        "https://i.ytimg.com/vi/5_5oE5lgrhw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQOq0qiqpW6l2SzU6VHARSBo3aLQ",
    },

    
    {
      title: <Link to="/pythoncwh">Python Course by CodeWith Harry</Link>,
      category: "Python",
      imageUrl:
        "https://i.ytimg.com/vi/7wnove7K-ZQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSTeHTyT5nUsw4vKLnnQfQP7HzDA",
    },
    {
      title: <Link to="/nodecodevolution">Node.js Tutorial by Codevolution</Link>,
      category: "Nodejs",
      imageUrl:
        "https://i.ytimg.com/vi/LAUi8pPlcUM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwwF3wWDv_fuWo7tzEEdUH-i5wXg",
    },
    {
      title: <Link to="/reactcodevolution">Reactjs Tutorial for Beginners by Codevolution</Link>,
      category: "React",
      imageUrl:
        "https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNd090zhR3S_d4NW2jrmOjjt2E5g",
    },
   
    {
      title: <Link to="/reduxcodevolution">React Redux Tutorial by Codevolution</Link>,
      category: "React",
      imageUrl:
        "https://i.ytimg.com/vi/9boMnm5X9ak/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc6VmsGHWjkxeJ9LNmfcl0hcHCoQ",
    },
    {
      title: <Link to="/nextcodevolution">Next.js tutorial for Beginners by Codevolution</Link>,
      category: "Nextjs",
      imageUrl:
        "https://i.ytimg.com/vi/9P8mASSREYM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAco2uHZRiRSUYoAC7rCD0AQHA_vA",
    },
    {
      title: <Link to="/javaapnacollege">Java by Shradha Khapra</Link>,
      category: "Java",
      imageUrl:
        "https://i.ytimg.com/vi/yRpLlJmRo2w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2X_0aPou7ac_e8ptvdwHqQB13bQ",
    },
    {
      title: <Link to="/nextcodestep">Next.js Tutorial in hindi by Code step by step</Link>,
      category: "Nextjs",
      imageUrl:
        "https://i.ytimg.com/vi/YIqLzP0sVdc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYTNN8rxG6ngqLsTplHCB0WcY3TQ",
    },
    {
      title: <Link to="/javascriptcwh">JavaScript Course by CodeWithHarry</Link>,
      category: "JavaScript",
      imageUrl:
        "https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDm5t8Z3uhpFcB-rdopNWpdCmvrlQ",
    },
    {
      title: <Link to="/javacwh">Java Tutorial for Beginners by CodeWithHarry</Link>,
      category: "Java",
      imageUrl:
        "https://i.ytimg.com/vi/ntLJmHOJ0ME/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnJo55et4zflgyRXBpwoX_DAVVKw",
    },
    {
      title: <Link to="/pythonnavin">Python Course by Navin Reddy</Link>,
      category: "Python",
      imageUrl:
        "https://i.ytimg.com/vi/QXeEoD0pB3E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3npa5ALtruCI4mVidy_y9Mw34aw",
    },
    {
      title: <Link to="/reactcwh">Reactjs Tutorial in hindi by CodeWithHarry</Link>,
      category: "React",
      imageUrl:
        "https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCozGgvj6TRsUi50SmoSE7jJ6wjqA",
    },
    {
      title: <Link to="/nodepiyush">Nodejs by Piyush Garg</Link>,
      category: "Nodejs",
      imageUrl:
        "https://i.ytimg.com/vi/ohIAiuHMKMI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMwMCr-EzG88eRxhPV_FSsClT3mw",
    },
    {
      title: <Link to="/javanavin">Java Course by Navin Reddy</Link>,
      category: "Java",
      imageUrl:
        "https://i.ytimg.com/vi/bm0OyhwFDuY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt2orPbvoMeN_2YMyr-P8hoS7KmA",
    },
    {
      title: <Link to="/pythonws">Complete Pyhton Course by WsCube Tech</Link>,
      category: "Python",
      imageUrl:
        "https://i.ytimg.com/vi/OZIRAavoGng/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2uiGKYscqdUVzesD8eouFbeQ5QA",
    },
    {
      title: <Link to="/reacthitesh">React Course by Hitesh Choudhary</Link>,
      category: "React",
      imageUrl:
        "https://i.ytimg.com/vi/eCU7FfMl5WU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjHvkgau9-trZe60vQ9KiwpTNpJA",
    },
    {
      title: <Link to="/corejavadurga">Core Java by Durga Sir</Link>,
      category: "Java",
      imageUrl:
        "https://i.ytimg.com/vi/eTXd89t8ngI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzz4OOoWrJloVFGbAbdyWBfBQGsA",
    },
    {
      title: <Link to="/pythondurga">Python By Durga Sir</Link>,
      category: "Python",
      imageUrl:
        "https://i.ytimg.com/vi/CtbckFw0pJs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAL1cAwOOI9rmdbYTWd52UNUKfByg",
    },
    {
      title: <Link to="/nexthitesh">Nextjs Authentication course by Hitesh Choudhary</Link>,
      category: "Nextjs",
      imageUrl:
        "https://i.ytimg.com/vi/iPGXk-i-VYU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdAQWzGiJWwN8ANd3tqik5UpEn2A",
    },
    {
      title: <Link to="/cppapna">C++ Placement course by Apna College</Link>,
      category: "C++",
      imageUrl:
        "https://i.ytimg.com/vi/z9bZufPHFLU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaogj9WlE8AhxGRRyiTwtVm99V6g",
    },
    {
      title: <Link to="/nextcwh">Next.js by CodeWithHarry</Link>,
      category: "Nextjs",
      imageUrl:
        "https://i.ytimg.com/vi/DZKOunP-WLQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5OH3ilH6Z-WC_VkW7G21_Sgf2LQ",
    },
    {
      title: <Link to="/cppneso">C++ Programming by Neso Academy</Link>,
      category: "C++",
      imageUrl:
        "https://i.ytimg.com/vi/s0g4ty29Xgg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDflnVVdyG-w7gx6Cx_V7ZEwPBZYw",
    },
    {
      title: <Link  to="/javascripthitesh">Javascript by Hitesh Choudhary</Link>,
      category: "JavaScript",
      imageUrl:
        "https://i.ytimg.com/vi/Hr5iLG7sUa0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBze4aFF_VvRDRl0QfV1D4M4_M2ng",
    },
    {
      title: <Link  to="/javascriptnavin">Javascript by Navin Reddy</Link>,
      category: "JavaScript",
      imageUrl:
        "https://i.ytimg.com/vi/PlbupGCBV6w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC0cRWl-pkuAIGbvkxFdN3S2rdew",
    },
    {
      title: <Link  to="/cppcwh">C++ Tutorial by CodeWithHarry</Link>,
      category: "C++",
      imageUrl:
        "https://i.ytimg.com/vi/j8nAHeVKL08/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWx1orFWsDos2lkr1WiBI721Pgxw",
    },
    {
      title: <Link  to="/nextdavegray">Nextjs for Beginners by Dave Gray</Link>,
      category: "Nextjs",
      imageUrl:
        "https://i.ytimg.com/vi/6h649f2fB9Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGl1UBCDQvJfBNLMXKW_HATdZnPg",
    },
    {
      title: <Link to="/cpppw">C++ by PW SKills</Link>,
      category: "C++",
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
    
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-10">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              className="h-auto max-w-sm rounded-lg"
              src={course.imageUrl}
              alt={course.title}
            />
            <h4 className="mt-3 mb-5 font-bold text-center text-white-500 hover:text-white-700 transition-colors">
              {course.title}
            </h4>
          </div>
        ))}
      </div>
    </AuthenticatedHomeLayout>
  );
};

export default CoursesPage;

import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomePageImage from "../Assets/Images/homePageMainImage.png";

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex flex-col sm:flex-row items-center justify-center gap-10 mx-6 sm:mx-16 h-[90vh]">
        <div className="w-full sm:w-1/2 space-y-6 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-semibold">
            Find out the best <br />
            <span className="text-yellow-500 font-bold">Online Courses on YouTube</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-200">
            We have a large library of courses taught by highly skilled and qualified faculties on YouTube.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/login">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore Courses
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 mt-4 sm:mt-0">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex items-center justify-center mt-6 sm:mt-0">
          <img alt="homepage" src={HomePageImage} className="max-w-full h-auto" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;

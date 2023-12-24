import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {

    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                             
                        Affordable and Accessible Education 
                        with Structured YouTube Courses
                        </h1>
                        <p className="text-xl text-gray-200">
                        Our goal is to make quality education affordable and accessible worldwide. 
                        Through a user-friendly Learning Management System (LMS), we aim to help 
                        students easily discover and access valuable educational content from YouTube, 
                        simplifying their learning journey in the decentralized online environment. 
                        We strive to empower aspiring teachers and students to share knowledge, skills, 
                        and creativity, contributing to the growth and well-being of humanity.

                        </p>
                    </section>

                    <div className="w-1/2">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                            }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                        />
                    </div>
                </div>

                <div className="carousel w-1/2 m-auto my-16">
                    {celebrities && celebrities.map(celebrity => (<CarouselSlide 
                                                                    {...celebrity} 
                                                                    key={celebrity.slideNumber} 
                                                                    totalSlides={celebrities.length}
                                                                    
                                                                />))}
                    
                </div>


            </div>
        </HomeLayout>  
    );
}   


export default AboutUs;
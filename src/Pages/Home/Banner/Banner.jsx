import React from "react";
import "./banner.css";
import Container from "../../../Components/Container";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="main-banner">
      <Container>
        <div className="flex items-center justify-center w-full h-[90vh]">
          <div className="text-center">
            <h2 className="text-white lg:text-[36px] text-[24px] font-semibold">
              Develop your mind and skills
            </h2>
            <h4 className="text-white lg:text-[22px] text-[18px] font-light pt-3">
              MORE THAN 1200 ONLINE COURSES
            </h4>
            <p className="lg:w-3/5 lg:block hidden w-full mx-auto text-white py-3">
              Want to get professional knowledge in the fast-developing IT
              sphere? Pract offers a wide variety of online courses for everyone
              willing to enter the world of information technologies.
            </p>
            <div className="mt-3">
              <Link
                to="/course"
                className="px-5 py-[8px] bg-primary text-white rounded"
              >
                Our Courses
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;

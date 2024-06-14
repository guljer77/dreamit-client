import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import TeacherImg from "./../../assets/teacher.jpg";
import { Link } from "react-router-dom";

function TeacherCard() {
  return (
    <Link to="/" className="bg-gray-50 block shadow-md rounded lg:mb-0 mb-5">
      <img src={TeacherImg} alt="" className="w-full h-auto rounded-t" />
      <div className="p-5">
        <h4 className="text-[18px] font-medium">Jacob Jones</h4>
        <h6 className="text-[16px] font-normal py-2">WEB DESIGN INSTRUCTOR</h6>
        <div className="flex items-center justify-start space-x-3 text-primary">
          <Link>
            <FaFacebookF />
          </Link>
          <Link>
            <FaLinkedinIn />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default TeacherCard;

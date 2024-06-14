import React from "react";
import Container from "../Container";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookSquare,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#2B3940]">
      <Container>
        <div className="lg:grid grid-cols-4 pt-20 pb-12">
          <div className="lg:pb-0 pb-10">
            <h4 className="text-white lg:text-[20px] text-[16px] font-bold">Courses</h4>
            <ul className="pt-10 space-y-2">
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> React.Js
                </Link>
              </li>
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> Next.Js
                </Link>
              </li>
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> PHP
                </Link>
              </li>
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> Javascript
                </Link>
              </li>
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> Node Js
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:pb-0 pb-10">
            <h4 className="text-white lg:text-[20px] text-[16px] font-bold">Quick Links</h4>
            <ul className="pt-10 space-y-2">
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> About Us
                </Link>
              </li>
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> Contact Us
                </Link>
              </li>
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> Our Services
                </Link>
              </li>
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> Privacy Policy
                </Link>
              </li>
              <li className="text-white/50">
                <Link className="flex items-center gap-1 text-[16px] font-medium">
                  <FaAngleRight className="" /> Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:pb-0 pb-10">
            <h4 className="text-white lg:text-[20px] text-[16px] font-bold">Contact</h4>
            <div className="pt-10">
              <div className="flex items-center gap-1 pb-2">
                <span className="text-white/50">
                  <IoLocation />
                </span>
                <span className="text-[16px] font-medium text-white/50">
                  Street, Dhaka, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-1 pb-2">
                <span className="text-white/50">
                  <FaPhoneAlt />
                </span>
                <span className="text-[16px] font-medium text-white/50">
                  +880 1792790977
                </span>
              </div>
              <div className="flex items-center gap-1 pb-3">
                <span className="text-white/50">
                  <FaEnvelope />
                </span>
                <span className="text-[16px] font-medium text-white/50">
                  guljer.net@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-[30px] h-[30px] flex items-center justify-center border-white/50 border text-white/80">
                  <FaTwitter className="inline-block" />
                </span>
                <span className="w-[30px] h-[30px] flex items-center justify-center border-white/50 border text-white/80">
                  <FaFacebookSquare className="inline-block" />
                </span>
                <span className="w-[30px] h-[30px] flex items-center justify-center border-white/50 border text-white/80">
                  <FaYoutube className="inline-block" />
                </span>
                <span className="w-[30px] h-[30px] flex items-center justify-center border-white/50 border text-white/80">
                  <FaLinkedinIn className="inline-block" />
                </span>
              </div>
            </div>
          </div>
          <div className="lg:pb-0 pb-10">
            <h4 className="text-white lg:text-[20px] text-[16px] font-bold">Newsletter</h4>
            <div className="pt-10">
              <p className="text-[15px] text-white/50">
                Dolor amet sit justo amet elitr clita ipsum elitr est.
              </p>
              <form action="">
                <div className="flex items-center justify-between border mt-5 border-white/70 p-1 rounded-sm">
                  <input type="text" placeholder="Your Email" className="outline-0 w-[70%] bg-transparent" />
                  <input type="submit" value="Sign Up" className="bg-primary w-[30%] rounded-sm py-[6px] cursor-pointer text-white" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p className="py-3 text-white text-center">
            &copy;All Right Reserved Md.Guljer Hossain
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

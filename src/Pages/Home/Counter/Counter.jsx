import React from "react";
import { LuFileBadge } from "react-icons/lu";
import { FaUserFriends, FaBookOpen, FaRegStar } from "react-icons/fa";
import Container from "../../../Components/Container";
import Image1 from "./../../../assets/home-17.jpg";
import Image2 from "./../../../assets/home-18.jpg";
function Counter() {
  return (
    <div className="lg:mt-32 mt-0 pb-10">
      <Container>
        <div className="lg:flex items-center justify-between gap-10">
          <div className="lg:w-1/2 lg:block hidden relative">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" className="absolute -top-20 right-0" />
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="lg:grid grid-cols-2 gap-5">
              <div className="lg:mb-0 mb-10">
                <span className="text-[32px] text-primary pb-3">
                  <FaUserFriends />
                </span>
                <span className="text-[36px] font-light block py-3">3045+</span>
                <span className="text-[16px] font-semibold block">Satisfied students</span>
              </div>
              <div className="lg:mb-10 mb-10">
                <span className="text-[32px] text-primary pb-3">
                  <FaBookOpen />
                </span>
                <span className="text-[36px] font-light block py-3">7852+</span>
                <span className="text-[16px] font-semibold block">Available courses</span>
              </div>
              <div className="lg:mb-10 mb-10">
                <span className="text-[32px] text-primary pb-3">
                  <LuFileBadge />
                </span>
                <span className="text-[36px] font-light block py-3">9862+</span>
                <span className="text-[16px] font-semibold block">Graduates</span>
              </div>
              <div className="lg:mb-0 mb-10">
                <span className="text-[32px] text-primary pb-3">
                  <FaRegStar />
                </span>
                <span className="text-[36px] font-light block py-3">145+</span>
                <span className="text-[16px] font-semibold block">Best teachers</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Counter;

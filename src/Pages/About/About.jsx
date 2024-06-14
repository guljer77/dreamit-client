import React from "react";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import AboutImg from "../../assets/about-us.jpg";
import { BiLike } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiWallet } from "react-icons/gi";
import Container from "../../Components/Container";

function About() {
  return (
    <>
      <CommonBanner heading={"About Us"} />
      <Container>
        <div className="pt-10">
          <div className="lg:flex items-center justify-between pb-10 gap-10">
            <div className="lg:w-1/2 w-full lg:block hidden">
              <img src={AboutImg} alt="" className="w-full" />
            </div>
            <div className="lg:w-1/2 w-full">
              <h4 className="text-[34px] font-bold">Who we are</h4>
              <p className="text-[18px] font-semibold pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostru.
              </p>
              <p className="text-[15px] font-light py-5">
                Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit.
              </p>
              <button className="px-5 py-2 bg-primary text-white cursor-pointer rounded">Learn More</button>
            </div>
          </div>
          <div className="lg:grid grid-cols-4 gap-5">
            <div className="lg:mb-0 mb-5 border border-gray-300 rounded shadow-md p-5">
              <span className="text-[36px] pb-4 block text-primary">
                <BiLike />
              </span>
              <h6 className="text-[20px] font-normal">Individual Approach</h6>
              <hr className="border border-gray-200 my-5" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
            <div className="lg:mb-0 mb-5 border border-gray-300 rounded shadow-md p-5">
              <span className="text-[36px] pb-4 block text-primary">
                <FaUserFriends />
              </span>
              <h6 className="text-[20px] font-normal">Qualified Employees</h6>
              <hr className="border border-gray-200 my-5" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
            <div className="lg:mb-0 mb-5 border border-gray-300 rounded shadow-md p-5">
              <span className="text-[36px] pb-4 block text-primary">
                <TfiHeadphoneAlt />
              </span>
              <h6 className="text-[20px] font-normal">24/7 Online Support</h6>
              <hr className="border border-gray-200 my-5" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
            <div className="lg:mb-0 mb-5 border border-gray-300 rounded shadow-md p-5">
              <span className="text-[36px] pb-4 block text-primary">
                <GiWallet />
              </span>
              <h6 className="text-[20px] font-normal">
                Various Payment Methods
              </h6>
              <hr className="border border-gray-200 my-5" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;

import React from "react";
import Container from "../../../Components/Container";
import { BiLike } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiWallet } from "react-icons/gi";

function Advantage() {
  return (
    <div className="py-10">
      <Container>
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
            <h6 className="text-[20px] font-normal">Various Payment Methods</h6>
            <hr className="border border-gray-200 my-5" />
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Advantage;

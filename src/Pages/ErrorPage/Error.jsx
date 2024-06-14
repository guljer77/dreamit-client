import React from "react";
import Image from "./../../assets/error.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex items-center justify-center w-[100%] h-[100%]">
      <div className="w-[50%] h-[100vh]">
        <img src={Image} alt="" className="w-full h-[70vh] mb-10 block" />
        <Link
          to="/"
          className="bg-primary inline-bloc mt-10 px-5 py-2 rounded text-white"
        >
          Back To Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error;

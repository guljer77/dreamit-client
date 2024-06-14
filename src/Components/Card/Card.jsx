import React from "react";
import Image from "./../../assets/course.jpg";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

function Card({item}) {
  return (
    <Link to={`/details/${item?._id}`} className="lg:mb-0 mb-5 mt-5 block rounded shadow-md bg-gray-50">
      <img src={item?.image} alt="" className="w-full h-auto rounded-t"/>
      <div className="p-5">
        <span className="blog text-primary py-3 font-normal text-[16px]">
          Programming
        </span>
        <h6 className="text-[16px] pb-3 font-semibold">{item?.title}</h6>
        <h6 className="flex text-[15px] font-normal items-center gap-2"><span><SlCalender /></span> 3 Month</h6>
        <h6 className="text-[15px] font-normal">Total Class: 30</h6>
      </div>
      <hr className="my-3 border border-gray-500" />
      <div className="flex items-center justify-between pb-3 pt-2 px-5">
        <h4>Tk. {item?.price}/=</h4>
        <h6 className="px-3 py-1 bg-primary rounded text-white text-[14px]">Enrol Now</h6>
      </div>
    </Link>
  );
}

export default Card;

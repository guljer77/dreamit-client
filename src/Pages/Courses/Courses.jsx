import React from "react";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import Container from "../../Components/Container";
import Card from "../../Components/Card/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Courses() {
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/classes");
      return res.data;
    },
  });
  return (
    <>
      <CommonBanner heading={"Courses"} />
      <Container>
        <div className="pt-10">
          <div className="flex items-center justify-between">
            <div className="lg:block hidden ">
              <div className="flex items-center justify-start space-x-3">
                <span className="flex items-center gap-1 bg-primary px-2 py-[6px] text-white rounded cursor-pointer">
                  <BsFillGrid3X3GapFill /> Grid
                </span>
                <span className="flex items-center gap-1 bg-primary px-2 py-[6px] text-white rounded cursor-pointer">
                  <FaList /> List
                </span>
              </div>
            </div>
            <div className="">
              <form>
                <input
                  type="text"
                  placeholder="Search Your Course."
                  className="px-3 py-[6px] rounded outline-0 border border-primary"
                />
                <input
                  type="submit"
                  value={"Search"}
                  className="px-5 py-[6px] bg-primary text-white border border-primary rounded ml-2"
                />
              </form>
            </div>
          </div>
          <div className="lg:grid grid-cols-4 gap-5 pt-10">
            {classes?.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Courses;

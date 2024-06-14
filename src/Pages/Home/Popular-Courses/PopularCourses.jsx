import React from "react";
import Container from "../../../Components/Container";
import Card from "../../../Components/Card/Card";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function PopularCourses() {
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get("https://dream-it-server-five.vercel.app/classes");
      return res.data;
    },
  });
  return (
    <div className="py-10">
      <Container>
        <h4 className="main-heading">Popular Courses</h4>
        <div className="lg:grid grid-cols-4 gap-5">
          {
            classes?.slice(0,8).map((item, index)=><Card key={index} item={item} />) 
          }
        </div>
        <div className="text-center mt-10">
          <Link
            to="/courses"
            className="px-5 py-2 bg-primary text-white rounded"
          >
            All Courses
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default PopularCourses;

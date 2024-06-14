import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/UseSecureHooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { VscFolderActive } from "react-icons/vsc";
import Chart from "react-apexcharts";

function DashHome() {
  const options = {
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    {
      name: "series-2",
      data: [23, 12, 54, 61, 32, 56, 81, 19],
    },
    {
      name: "series-3",
      data: [24, 20, 5, 75, 42, 79, 72, 35],
    },
  ];
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure(`https://dream-it-server-five.vercel.app/users`);
      return res.data;
    },
  });
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure(`/classes`);
      return res.data;
    },
  });
  const totalTeacher = users?.filter(item => item?.role === "teacher");
  return (
    <div>
      <div className="lg:grid grid-cols-3 gap-5">
        <div className="bg-red-600 lg:mb-0 mb-5 text-white rounded shadow-md p-5">
          <span className="text-[34px]">
            <FaUsers />
          </span>
          <h4>Total User: {users?.length}</h4>
        </div>
        <div className="bg-red-600 lg:mb-0 mb-5 text-white rounded shadow-md p-5">
          <span className="text-[34px]">
            <GiTeacher />
          </span>
          <h4>Active Teacher: {totalTeacher?.length}</h4>
        </div>
        <div className="bg-red-600 lg:mb-0 mb-5 text-white rounded shadow-md p-5">
          <span className="text-[34px]">
            <VscFolderActive />
          </span>
          <h4>Total Classes: {classes?.length}</h4>
        </div>
      </div>
      <div className="mt-10">
        <Chart options={options} series={series} type="area" />
      </div>
    </div>
  );
}

export default DashHome;

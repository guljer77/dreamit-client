import React from "react";
import Chart from "react-apexcharts";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { VscFolderActive } from "react-icons/vsc";

function TeacherHome() {
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
  return (
    <div>
      <div className="lg:grid grid-cols-3 gap-5">
        <div className="bg-red-600 lg:mb-0 mb-5 text-white rounded shadow-md p-5">
          <span className="text-[34px]">
            <FaUsers />
          </span>
          <h4>Total User: 20</h4>
        </div>
        <div className="bg-red-600 lg:mb-0 mb-5 text-white rounded shadow-md p-5">
          <span className="text-[34px]">
            <GiTeacher />
          </span>
          <h4>Active Teacher: 20</h4>
        </div>
        <div className="bg-red-600 lg:mb-0 mb-5 text-white rounded shadow-md p-5">
          <span className="text-[34px]">
            <VscFolderActive />
          </span>
          <h4>Total Classes: 30</h4>
        </div>
      </div>
      <div className="mt-10">
        <Chart options={options} series={series} type="area" />
      </div>
    </div>
  );
}

export default TeacherHome;

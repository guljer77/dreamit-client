import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

function AllUser() {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users`);
      return res.data;
    },
  });

  const filterUser = users.filter(item => item?.role != "teacher" || item?.role != "admin");

  const addTeacher = id => {
    axios.patch(`http://localhost:5000/users/${id}`);
    refetch();
    toast.success("Add To Teacher SuccessFully");
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterUser?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>
                <span
                  onClick={() => addTeacher(item?._id)}
                  className="bg-primary p-2 rounded-md text-white cursor-pointer"
                >
                  Add Teacher
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllUser;

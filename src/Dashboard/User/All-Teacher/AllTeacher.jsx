import { useQuery } from "@tanstack/react-query";
import React from "react";

function AllTeacher() {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users`);
      return res.data;
    },
  });

  const filterUser = users?.filter(item => item?.role === "teacher" || item?.role === "admin");
  console.log(filterUser);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filterUser.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>{item?.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllTeacher;

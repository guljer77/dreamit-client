import React from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/UseSecureHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../Hooks/Auth/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function AllClass() {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure(`/classes/${user?.email}`);
      return res.data;
    },
  });
  const filterData = classes?.filter(item => item?.status === "active");
  const deleteHandle = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      refetch();
      if (result.isConfirmed) {
        axiosSecure.delete(`/classes/${id}`);
        toast.success("Class Has Ben Deleted");
      }
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between pb-10">
        <h4 className="text-[22px] font-medium">All Class</h4>
        <Link
          to="/teacher-dashboard/add-class"
          className="px-5 py-2 bg-primary text-white rounded"
        >
          Add Class
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.price} /=</td>
                <td>
                  <img src={item?.image} className="w-[80px] h-auto" alt="" />
                </td>
                <td className="flex items-center gap-2">
                  <Link
                    to={`/teacher-dashboard/edit-class/${item?._id}`}
                    className="flex items-center justify-center w-[35px] rounded cursor-pointer h-[35px] bg-primary text-white"
                  >
                    <FaPencilAlt />
                  </Link>
                  <span
                    onClick={() => deleteHandle(item?._id)}
                    className="flex items-center justify-center w-[35px] h-[35px] rounded cursor-pointer bg-red-600 text-white"
                  >
                    <FaTrash />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllClass;

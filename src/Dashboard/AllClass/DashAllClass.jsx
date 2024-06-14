import React from "react";
import useAxiosSecure from "../../Hooks/UseSecureHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

function DashAllClass() {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure(`/classes`);
      return res.data;
    },
  });
  const activeStatus = (id) =>{
    axiosSecure.put(`/classes/${id}`);
    refetch();
    toast.success("Item Has Active");
  }
  return (
    <div>
      <div className="pb-10">
        <h4 className="text-[22px] font-medium">All Class</h4>
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
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              classes?.map((item, index)=><tr key={index}>
              <td>{index + 1}</td>
              <td>{item?.title.slice(0,15)}...</td>
              <td>{item?.price} /=</td>
              <td>{item?.status}</td>
              <td>
                <img src={item?.image} className="w-[80px] h-auto" alt="" />
              </td>
              <td>
                <button onClick={()=> activeStatus(item?._id)} className="px-3 py-1 rounded-full bg-primary text-white">Set-Active</button>
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashAllClass;

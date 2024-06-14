import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/Auth/useAuth";
import useAxiosSecure from "../../Hooks/UseSecureHooks/useAxiosSecure";
import JoditEditor from "jodit-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

function EditClass() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    placeholder: "Start Typing..",
  };
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure(`/classes/${user?.email}`);
      return res.data;
    },
  });
  const findClass = classes?.find(item => item?._id === id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const fromData = new FormData();
    fromData.append("image", data.image[0]);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: fromData,
    })
      .then(res => res.json())
      .then(imageData => {
        if (imageData.success) {
          let imgUrl = null;
          if (imageData.success) {
            imgUrl = imageData.data.display_url;
          } else {
            imgUrl = data.image;
          }
          const { title, longText, price, duration, date } = data;
          const courseInfo = {
            title,
            longText,
            price,
            duration,
            date,
            description: content,
            image: imgUrl,
          };
          axiosSecure.patch(`/classes/${id}`, courseInfo);
          toast.success("Class Has Update");
          navigate("/teacher-dashboard/all-class")
        }
      });
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-10">
        <h4 className="text-[22px] font-medium">Add Class</h4>
        <Link
          to="/teacher-dashboard/all-class"
          className="px-5 py-2 bg-primary text-white rounded"
        >
          All Class
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              defaultValue={findClass?.title}
              {...register("title")}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              defaultValue={findClass?.longText}
              {...register("longText")}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              defaultValue={findClass?.price}
              {...register("price")}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              defaultValue={findClass?.duration}
              {...register("duration")}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              defaultValue={findClass?.date}
              {...register("date")}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
          </div>

          <div className="mb-4">
            <JoditEditor
              ref={editor}
              value={findClass?.description}
              config={config}
              onChange={newContent => setContent(newContent)}
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              {...register("image")}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
            <img src={findClass?.image} alt="" className="w-[120px] mt-5" />
          </div>
          <div>
            <input
              type="submit"
              value={"Add Class"}
              className="px-5 py-2 cursor-pointer rounded bg-primary text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditClass;

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/Auth/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/UseSecureHooks/useAxiosSecure";
import JoditEditor from "jodit-react";

function AddClass() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const editor = useRef(null);
	const [content, setContent] = useState('');
  const config = {
    placeholder:"Start Typing.."
  }
  const [axiosSecure] = useAxiosSecure();
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
        const imgUrl = imageData.data.display_url;
        const { title, longText, price, duration, date } = data;
        const courseInfo = {
          title,
          longText,
          price,
          duration,
          date,
          description: content,
          image: imgUrl,
          status:"pending",
          email: user?.email,
        };
        axiosSecure.post(`/classes`, courseInfo);
        toast.success("Classes Add Success");
        navigate("/teacher-dashboard/all-class");
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
              placeholder="Course Title.."
              {...register("title", { required: true })}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
            {errors.title && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Short Description.."
              {...register("longText", { required: true })}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
            {errors.longText && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Price.."
              {...register("price", { required: true })}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
            {errors.price && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Course Duration.."
              {...register("duration", { required: true })}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
            {errors.duration && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="date"
              {...register("date", { required: true })}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
            {errors.date && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            {/* <textarea
              name=""
              id=""
              placeholder="Description Here..."
              {...register("description", { required: true })}
              className="p-3 w-full outline-0 border border-gray-400"
            ></textarea>
            {errors.description && (
              <span className="text-red-600">This field is required</span>
            )} */}
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onChange={newContent => setContent(newContent)}
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              {...register("image", { required: true })}
              className="px-3 py-2 w-full outline-0 border border-gray-400"
            />
            {errors.image && (
              <span className="text-red-600">This field is required</span>
            )}
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

export default AddClass;

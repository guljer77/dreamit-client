import React from "react";
import "./signUp.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "./../../Hooks/Auth/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import axios from "axios";

function SignUp() {
  const {
    user,
    userRegister,
    updateUser,
    googleAuthUser,
    loading,
    setLoading,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
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
        userRegister(data.email, data.password)
          .then(result => {
            updateUser(data.name, imgUrl)
              .then(() => {
                const userInfo = {
                  email: result?.user?.email,
                  name: result?.user?.displayName,
                };
                axios.put(
                  `http://localhost:5000/users/${result?.user?.email}`,
                  userInfo
                );
                navigate(from, { replace: true });
              })
              .catch(error => {
                setLoading(false);
                console.log(error.message);
              });
          })
          .catch(error => {
            setLoading(false);
            console.log(error.message);
          });
      });
  };
  const handleGoogle = () => {
    googleAuthUser()
      .then(result => {
        const userInfo = {
          email: result?.user?.email,
          name: result?.user?.displayName,
        };
        axios.put(
          `http://localhost:5000/users/${result?.user?.email}`,
          userInfo
        );
        navigate(from, { replace: true });
      })
      .catch(error => {
        setLoading(false);
        console.log(error.message);
      });
  };

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="bg-image flex items-center justify-center lg:p-0 p-5">
        <div className="lg:w-2/5 w-full bg-white shadow-sm rounded lg:p-14 p-8">
          <h4 className="text-center heading">
            Welcome! <span className="text-primary">Sign Up</span>
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Your Name."
                {...register("name", { required: true })}
                className="px-3 py-[6px] w-full outline-0 border"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 py-2">Name is Required</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter Your Email."
                {...register("email", { required: true })}
                className="px-3 py-[6px] w-full outline-0 border"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 py-2">Email is Required</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter Your Password."
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                className="px-3 py-[6px] w-full outline-0 border"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is Required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password Must be 8 Characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Must be a UpperCase and lowercase and number and Special
                  Characters
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="file"
                {...register("image", { required: true })}
                className="px-3 py-[6px] w-full outline-0 border"
              />
              {errors.image?.type === "required" && (
                <p className="text-red-600 py-2">Image is Required</p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-primary py-[6px] text-white uppercase text-[16px] font-semibold"
              >
                {loading ? (
                  <TbFidgetSpinner size={24} className="mx-auto animate-spin" />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <h6 className="text-center py-3">
            Already Have an Account? please{" "}
            <Link to="/login" className="text-primary underline">
              Login
            </Link>
          </h6>
          <hr className="border border-gray-300 mt-3" />
          <p className="bg-white w-[40px] text-center h-[30px] mx-auto font-medium relative -top-[14px]">
            Or
          </p>
          <div className="flex items-center justify-center space-x-3">
            <Link className="w-[35px] h-[35px] border border-primary text-[20px] flex items-center justify-center text-primary rounded-full">
              <FaFacebookSquare />
            </Link>
            <Link
              onClick={handleGoogle}
              className="w-[35px] h-[35px] border border-primary text-[20px] flex items-center justify-center text-primary rounded-full"
            >
              <FaGoogle />
            </Link>
            <Link className="w-[35px] h-[35px] border border-primary text-[20px] flex items-center justify-center text-primary rounded-full">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

import React from "react";
import "./login.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/Auth/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import axios from "axios";

function Login() {
  const { user, loginUserSet, googleAuthUser, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    loginUserSet(data.email, data.password)
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
            Welcome! <span className="text-primary">Login</span>
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter Your Email."
                {...register("email", { required: true })}
                className="px-3 py-[6px] w-full outline-0 border"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter Your Password."
                {...register("password", { required: true })}
                className="px-3 py-[6px] w-full outline-0 border"
              />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
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
            Are you new here? please{" "}
            <Link to="/signUp" className="text-primary underline">
              SignUp
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

export default Login;

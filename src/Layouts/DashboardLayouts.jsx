import React, { useState } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { IoMenu, IoCloseOutline, IoSpeedometer } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import Profile from "./../assets/man.png";
import { FaUsers, FaAngleDown, FaAngleUp, FaEye, FaHome } from "react-icons/fa";
import { MdOutlineNewspaper } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { CgLogOut } from "react-icons/cg";
import { useAuth } from "../Hooks/Auth/useAuth";

function DashboardLayouts() {
  const { logOutUser } = useAuth();
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        <Navigate to="/" />;
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="bg-white w-full fixed z-50 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="w-[23%] lg:block hidden bg-gray-100 py-5">
            <h4 className="uppercase text-center text-[18px] font-semibold">
              Guljer Hossain
            </h4>
          </div>
          <div className="lg:w-[77%] w-full">
            <div className="flex items-center justify-between px-5 lg:py-0 py-5">
              <div className="">
                <div onClick={() => setMenu(!menu)} className="lg:hidden block">
                  {menu ? (
                    <span className="text-[26px]">
                      <IoCloseOutline />
                    </span>
                  ) : (
                    <span className="text-[26px]">
                      <IoMenu />
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <span className="text-[26px]">
                  <IoIosNotifications />
                </span>
                <span className="text-[26px]">
                  <BsEnvelope />
                </span>
                <img
                  src={Profile}
                  alt=""
                  className="w-[45px] h-[45px] border border-primary rounded-full p-[2px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div className="lg:w-[23%] mt-[68px] lg:block hidden bg-gray-900 h-[100vh] fixed p-7 text-white">
          <ul>
            <li className="pb-5">
              <NavLink to="/dashboard">
                <span className="flex items-center gap-2">
                  <IoSpeedometer /> Dashboard
                </span>
              </NavLink>
            </li>
            <li className="pb-5">
              <NavLink>
                <span
                  onClick={() => setSubMenu(!subMenu)}
                  className="flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <FaUsers /> User
                  </span>
                  <span>{subMenu ? <FaAngleUp /> : <FaAngleDown />}</span>
                </span>
              </NavLink>
              {subMenu && (
                <ul className="pl-5 pt-3">
                  <li className="pb-3">
                    <NavLink to="/dashboard/all-teacher">
                      <span className="flex items-center gap-2">
                        <FaEye /> All Teacher
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/all-user">
                      <span className="flex items-center gap-2">
                        <FaEye /> All User
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="pb-5">
              <NavLink to="/dashboard/all-class">
                <span className="flex items-center gap-2">
                  <MdOutlineNewspaper /> All Classes
                </span>
              </NavLink>
            </li>
            <li className="pb-5">
              <NavLink to="/dashboard/total-enrol">
                <span className="flex items-center gap-2">
                  <PiStudent /> Total Enrol
                </span>
              </NavLink>
            </li>
            <li className="pb-5">
              <NavLink to="/">
                <span className="flex items-center gap-2">
                  <FaHome /> Back To Home
                </span>
              </NavLink>
            </li>
            <li className="pb-5">
              <a onClick={handleLogOut} href="">
                <span className="flex items-center gap-2">
                  <CgLogOut /> Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-[77%] mt-[68px] w-full p-7 ml-auto">
          <Outlet />
        </div>
      </div>
      {menu && (
        <div className="bg-gray-900 w-[280px] h-[100vh] fixed top-[85px] p-7 text-white">
          <ul>
            <li className="pb-5">
              <NavLink to="/dashboard">
                <span className="flex items-center gap-2">
                  <IoSpeedometer /> Dashboard
                </span>
              </NavLink>
            </li>
            <li className="pb-5">
              <NavLink>
                <span
                  onClick={() => setSubMenu(!subMenu)}
                  className="flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <FaUsers /> User
                  </span>
                  <span>{subMenu ? <FaAngleUp /> : <FaAngleDown />}</span>
                </span>
              </NavLink>
              {subMenu && (
                <ul className="pl-5 pt-3">
                  <li className="pb-3">
                    <NavLink to="/dashboard/all-teacher">
                      <span className="flex items-center gap-2">
                        <FaEye /> All Teacher
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/all-user">
                      <span className="flex items-center gap-2">
                        <FaEye /> All User
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="pb-5">
              <NavLink to="/dashboard/all-class">
                <span className="flex items-center gap-2">
                  <MdOutlineNewspaper /> All Classes
                </span>
              </NavLink>
            </li>
            <li className="pb-5">
              <NavLink to="/dashboard/total-enrol">
                <span className="flex items-center gap-2">
                  <PiStudent /> Total Enrol
                </span>
              </NavLink>
            </li>
            <li className="pb-5">
              <NavLink to="/">
                <span className="flex items-center gap-2">
                  <FaHome /> Back To Home
                </span>
              </NavLink>
            </li>
            <li className="pb-5">
              <a onClick={handleLogOut} href="">
                <span className="flex items-center gap-2">
                  <CgLogOut /> Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DashboardLayouts;

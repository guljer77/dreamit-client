import React, { useState } from "react";
import Container from "../Container";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useAuth } from "../../Hooks/Auth/useAuth";
import { useAdmin } from "../../Hooks/AdminHooks/useAdmin";
import { useTeacher } from "./../../Hooks/TeacherHooks/useTeacher";

function Header() {
  const { user, logOutUser } = useAuth();
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();

  const logoutHere = () => {
    logOutUser()
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="bg-white fixed z-50 top-0 left-0 w-full py-5 shadow-md">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-[22px] font-bold uppercase">
                Dream.<span className="text-primary">IT</span>
              </Link>
            </div>
            <div className="lg:block hidden">
              <ul className="flex items-center space-x-9">
                <li className="text-[17px] font-normal">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-[17px] font-normal">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="text-[17px] font-normal">
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="text-[17px] font-normal">
                  <NavLink
                    to="/teachers"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Teachers
                  </NavLink>
                </li>
                <li className="text-[17px] font-normal">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="">
              {user ? (
                <div>
                  <img
                    onClick={() => setProfile(!profile)}
                    src={user?.photoURL}
                    alt=""
                    className="w-[45px] h-[45px] p-1 rounded-full cursor-pointer border border-primary"
                  />
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/login">Login</Link>
                  <span>|</span>
                  <Link to="/signUp" className="lg:block hidden">
                    Register
                  </Link>
                </div>
              )}
            </div>
            <div className="lg:hidden block">
              <span onClick={() => setMenu(!menu)} className="text-[20px]">
                {menu ? <IoCloseOutline /> : <IoMenu />}
              </span>
            </div>
          </div>
        </Container>
      </div>
      {profile && (
        <div className="absolute z-50 top-[68px] rounded right-[80px] bg-gray-200 p-5">
          {user && isAdmin ? (
            <Link
              to="/dashboard"
              className="block px-[16px] bg-primary text-white py-[6px] rounded mb-2"
            >
              Dashboard
            </Link>
          ) : user && isTeacher ? (
            <Link
              to="/teacher-dashboard"
              className="block px-[16px] bg-primary text-white py-[6px] rounded mb-2"
            >
              Dashboard
            </Link>
          ) : (
            ""
          )}

          <Link className="block px-[16px] bg-primary text-white py-[6px] rounded mb-2">
            Profile
          </Link>
          <a
            href=""
            onClick={logoutHere}
            className="block px-[16px] bg-primary text-white py-[6px] rounded"
          >
            Logout
          </a>
        </div>
      )}
      {menu && (
        <div className="absolute top-[74px] left-0 w-full bg-white z-50">
          <ul className="flex flex-col shadow-md p-5">
            <li className="text-[15px] font-normal pb-2">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="text-[15px] font-normal pb-2">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li className="text-[15px] font-normal pb-2">
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Courses
              </NavLink>
            </li>
            <li className="text-[15px] font-normal pb-2">
              <NavLink
                to="/teachers"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Teachers
              </NavLink>
            </li>
            <li className="text-[15px] font-normal pb-2">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Contacts
              </NavLink>
            </li>
            <li className="text-[15px] font-normal pb-2">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

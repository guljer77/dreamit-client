import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Teachers from "../Pages/Teachers/Teachers";
import About from "../Pages/About/About";
import Courses from "../Pages/Courses/Courses";
import Contact from "../Pages/Contact/Contact";
import CourseDetails from "../Pages/Courses/CourseDetails";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import DashHome from "../Dashboard/Home/DashHome";
import AllUser from "../Dashboard/User/All-User/AllUser";
import AllTeacher from "../Dashboard/User/All-Teacher/AllTeacher";
import AdminRoute from "./AdminRoute";
import TeacherDashboard from "../Layouts/TeacherDashboard";
import TeacherRoute from "./TeacherRoute";
import AllClass from "../TeacherDash/TeacherClass/AllClass";
import AddClass from "../TeacherDash/TeacherClass/AddClass";
import DashAllClass from "../Dashboard/AllClass/DashAllClass";
import TeacherHome from "../TeacherDash/TeacherHome/TeacherHome";
import EditClass from "../TeacherDash/TeacherClass/EditClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/details/:id",
        element: <CourseDetails />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayouts />
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashHome />,
      },
      {
        path: "/dashboard/all-user",
        element: <AllUser />,
      },
      {
        path: "/dashboard/all-teacher",
        element: <AllTeacher />,
      },
      {
        path: "/dashboard/all-class",
        element: <DashAllClass />,
      },
    ],
  },
  {
    path: "/teacher-dashboard",
    element: (
      <TeacherRoute>
        <TeacherDashboard />
      </TeacherRoute>
    ),
    children: [
      {
        path: "/teacher-dashboard",
        element: <TeacherHome />,
      },
      {
        path: "/teacher-dashboard/all-class",
        element: <AllClass />,
      },
      {
        path: "/teacher-dashboard/add-class",
        element: <AddClass />,
      },
      {
        path: "/teacher-dashboard/edit-class/:id",
        element: <EditClass />,
      },
    ],
  },
]);

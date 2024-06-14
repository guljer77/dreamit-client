import React from "react";
import { useAuth } from "../Hooks/Auth/useAuth";
import { useTeacher } from "../Hooks/TeacherHooks/useTeacher";
import Loader from "../Components/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";

function TeacherRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isTeacher, isTeacherLoading] = useTeacher();
  console.log(isTeacher);
  if (loading || isTeacherLoading) {
    return <Loader />;
  }
  if (user && isTeacher) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default TeacherRoute;

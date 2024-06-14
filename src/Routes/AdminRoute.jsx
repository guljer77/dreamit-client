import React from "react";
import { useAuth } from "../Hooks/Auth/useAuth";
import { useAdmin } from "../Hooks/AdminHooks/useAdmin";
import Loader from "../Components/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";

function AdminRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoute;

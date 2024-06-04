import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserById } from "../../store/slices/authSlice";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(false);

  useEffect(() => {
    dispatch(getUserById()).then((res) => {
      if (res.payload._id.length) {
        return <Navigate to="/dashboard" />;
      } else {
        return <Navigate to="/login" />;
      }
    });
  }, []);

  return children;
};

export default ProtectedRoute;

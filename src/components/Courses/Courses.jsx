import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCourse, getCoursesByUser } from "../../store/slices/courseSlice";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../store/slices/authSlice";

const Courses = () => {
  const [userId, setUserId] = useState("");
  const [updatedCourseData, setUpdatedCourseData] = useState({}); // New state to hold updated course data
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses) || [];
  const status = useSelector((state) => state.courses.status);
  const error = useSelector((state) => state.courses.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserById()).then((res) => {
      setUserId(res?.payload?._id);
    });
  }, []);

  useEffect(() => {
    if (status === "idle" && userId) {
      dispatch(getCoursesByUser(userId));
    }
  }, [status, dispatch, userId]);

  const handleDeleteCourse = (courseId) => {
    console.log(courseId);
    dispatch(deleteCourse(courseId));
    alert("Course Deleted Successfully");
  };

  const handleUpdateCourse = (courseId) => {
    console.log(courseId);
    navigate(`/edit-course/${courseId}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCourseData({ ...updatedCourseData, [name]: value });
  };

  return (
    <div>
      <div className="space-y-4">
        {status === "loading" ? (
          <div>Loading...</div>
        ) : status === "failed" ? (
          <div>Error: {error}</div>
        ) : (
          courses?.map((course, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-sm items-center"
            >
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg `}
                >
                  <span className={`text-sm font-bold `}>{course.title}</span>
                </div>
                <div className="ml-4 font-semibold">{""}</div>
              </div>
              <div className="text-sm text-gray-500">{course.description}</div>
              <div className="font-semibold text-slate-950">{course.price}</div>
              <div className="flex justify-around">
                <button
                  className="text-green-500"
                  onClick={() => handleUpdateCourse(course._id)}
                >
                  Update
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteCourse(course._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;

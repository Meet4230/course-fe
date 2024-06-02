import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCourse, getCoursesByUser } from "../../store/slices/courseSlice";
import { getUserDetails } from "../../api/user";
import { getUserId } from "../../store/slices/authSlice";
const Courses = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses) || [];
  console.log(typeof courses);
  const status = useSelector((state) => state.courses.status);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    getUserDetails().then((data) => {
      setUserId(data._id);
    });
  }, []);

  useEffect(() => {
    if (status === "idle" && userId) {
      dispatch(getCoursesByUser(userId));
    }
  }, [status, dispatch, userId]);

  const handleDeleteCourse = (courseId) => {
    dispatch(deleteCourse(courseId));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Courses</h2>
        <a href="#" className="text-blue-500">
          View all
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4 font-semibold">
        <div>Course</div>
        <div>Description</div>
        <div>Price</div>
        <div className="text-center">Actions</div>
      </div>
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
                <button className="text-blue-500">Edit</button>
                <button className="text-green-500">Update</button>
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteCourse(userId)}
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

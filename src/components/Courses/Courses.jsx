import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCourse,
  getCoursesByUser,
  updateCourse,
} from "../../store/slices/courseSlice";
import { getUserDetails } from "../../api/user";

const Courses = () => {
  const [userId, setUserId] = useState("");
  const [updatedCourseData, setUpdatedCourseData] = useState({}); // New state to hold updated course data
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses) || [];
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

  const handleUpdateCourse = (courseId) => {
    dispatch(updateCourse({ courseId, updateData: updatedCourseData }));
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
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                />
                {/* Update button */}
                <button
                  className="text-green-500"
                  onClick={() => handleUpdateCourse(course.courseId)}
                >
                  Update
                </button>
                {/* Delete button */}
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteCourse(course.courseId)}
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

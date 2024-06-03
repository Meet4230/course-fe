import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCourseById, updateCourse } from "../../store/slices/courseSlice";
const EditCourse = () => {
  const params = useParams();
  const courseId = params.id;
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCourseById(courseId)).then((data) => {
      setCourseData(data.payload);
    });
  }, [courseId]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: courseData,
  });

  const onSubmit = async (data) => {
    dispatch(updateCourse(data));
    alert("Data Updated Successfully");
    navigate("/dashboard");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-4 w-[500px] bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
            })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCourse;

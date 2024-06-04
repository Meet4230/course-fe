import React, { useState } from "react";
import { useEffect } from "react";

import Calendar from "../Calendar/Calendar";
import Courses from "../Courses/Courses";
import WorkingHours from "../WorkingHours/WorkingHours";
import Students from "../Students/Students";
import CompletedTask from "../CompltedTask/CompletedTask";
import Lessons from "../Lessons/Lessons";
import { useDispatch } from "react-redux";
import { setLogin, getUserById, setLogout } from "../../store/slices/authSlice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById()).then((res) => {
      setUser(res.payload);
    });
  }, []);

  return (
    <>
      <header className="flex h-16">
        <div className="mx-auto flex w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6"></div>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <Link
              to="/add-course"
              className="text-gray-700 hover:text-gray-900"
            >
              Add Course
            </Link>
            <Link
              to="/login"
              onClick={() => dispatch(setLogout())}
              className="text-gray-700 hover:text-gray-900"
            >
              Logout
            </Link>

            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
              <span className="text-end lg:block hidden">
                <span className="font-semibold block">
                  {user?.userName || "John Mason"}
                </span>
                <span className="font-light text-xs block">
                  {user?.email || "johnmason@gmail.com"}
                </span>
              </span>
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </a>
          </div>
        </div>
      </header>

      <main>
        <div className="mx-auto flex flex-wrap w-full items-start justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap w-full lg:w-3/4 md:px-4 px-0 mb-4">
            <div className="bg-white lg:p-8 p-4 rounded-lg w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <h3 className="text-3xl mb-4">
                    Welcome back,{" "}
                    <span className="font-semibold">
                      {user?.userName || "John Mason"}
                    </span>
                  </h3>
                  <p className="text-slate-400">
                    Your students completed{" "}
                    <span className="text-orange-400">80%</span> of the tasks.
                    <br />
                    Progress is{" "}
                    <span className="text-orange-400">very good!</span>
                  </p>
                </div>
                <div>
                  <img
                    className="w-full"
                    src="src\assets\students.jpg"
                    alt="Students"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white lg:p-8 p-4 rounded-lg flex flex-col">
                  <Students />
                </div>
                <div className="bg-white lg:p-8 p-4 rounded-lg flex flex-col">
                  <WorkingHours />
                </div>
              </div>
            </div>

            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <Courses />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:px-4 px-0 mb-4">
            <div className="bg-white lg:p-8 p-4 rounded-lg mb-10 mt-6">
              <Calendar />
              <Lessons />
              <CompletedTask />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;

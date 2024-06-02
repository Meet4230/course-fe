import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../api/user";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await registerUser(data);
      return result;
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create Your Account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    {...register("userName", {
                      required: "Username is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.userName && <span>{errors.userName.message}</span>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password && <span>{errors.password.message}</span>}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white font-medium text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  className="group relative w-1/2 flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 9.5c3.6 0 6.4 1.2 8.4 3.2l6.2-6.2c-3.7-3.5-8.5-5.6-14.6-5.6C13.3.9 5.3 8.2 3.3 18.1l7.6 5.6c1.1-4.7 5.2-8.2 10.1-8.2"
                      fill="#EA4335"
                    />
                    <path
                      d="M47.6 20.3H24v7.4h13.5c-1.1 5.5-5.7 8.4-10.2 8.4-3.2 0-5.7-1.1-7.6-3l-6.3 6.3c3.3 3.2 7.8 5.3 13.8 5.3 9.6 0 16.9-6.6 16.9-16.5 0-1-.1-2-.2-2.6"
                      fill="#34A853"
                    />
                    <path
                      d="M7.9 24c-.3 1.2-.4 2.4-.4 3.6s.1 2.4.4 3.6l7.6-5.6c-.3-.9-.5-1.9-.5-2.9s.2-2.1.5-2.9l-7.6-5.6c-.3 1.2-.4 2.4-.4 3.6s.1 2.4.4 3.6"
                      fill="#FBBC05"
                    />
                    <path
                      d="M24 47.5c6 0 11.2-2 15.2-5.5l-7.6-6.2c-1.6 1.1-3.6 1.7-5.7 1.7-4.5 0-8.6-2.9-10.2-8.4l-7.6 5.6c2 9.9 10.1 17.2 19.6 17.2"
                      fill="#4285F4"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm font-medium text-gray-500">
              Already have an account?{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

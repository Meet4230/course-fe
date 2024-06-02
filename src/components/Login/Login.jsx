import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../store/slices/authSlice";
function getGoogleOAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: `http://localhost:8000/api/sessions/oauth/google`,
    client_id: ` 328249712432-bg3ke8p5b81ut2v7s35hlame10ko48qo.apps.googleusercontent.com`,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
}

export default function Login() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(getGoogleOAuthURL());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(adminLogin(data))
      .unwrap()
      .then((response) => {
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <h2 className="mt-6 text-center text-3xl font-medium non-italic text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium non-italic py-2 text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", { required: true })}
                  autoComplete="email"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                {errors.emailRequired && <span>email is required</span>}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium non-italic py-2  text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register("password", { required: true })}
                  autoComplete="current-password"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                {errors.passwordRequired && <span>password is required</span>}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm font-medium non-italic text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium non-italic text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium non-italic rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Link to={url}>
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
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

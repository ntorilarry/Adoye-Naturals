import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/login`,
      data: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      validateStatus: () => true,
    })
      .then((response) => {
        console.log(response);
        // toast.success('Login Successfully')
        // navigate("/")
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        toast.error("Invalid Username or Password");
      });
  };
  return (
    <div>
      <Toaster />
      <Navbar />
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-col justify-center pt-10 pb-14 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
            <p className="mt-6 text-center text-sm text-text">
              No account?{" "}
              <Link
                to="/register"
                className="font-semibold text-primary hover:text-primary-accent"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
              <h1 className="text-center text-3xl font-semibold text-heading">
                Welcome Back!
              </h1>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col space-y-4"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-heading"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-heading"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/forget-password"
                    className="text-sm font-medium text-[#3B0B01] hover:text-primary-accent"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-[#3B0B01] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;

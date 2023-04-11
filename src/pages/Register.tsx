import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-col justify-center pt-10 pb-14 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
            <p className="mt-6 text-center text-sm text-text">
              No account?{" "}
              <Link 
                to="/login"
                className="font-semibold text-primary hover:text-primary-accent"
              >
                Sign In
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
              <h1 className="text-center text-3xl font-semibold text-heading">
                Register
              </h1>

              <form className="mt-6 flex flex-col space-y-4">
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
                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-[#3B0B01] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                >
                  Sign Up
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

export default Register;

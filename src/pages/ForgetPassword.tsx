import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function FogetPassword() {
  const [email, setEmail] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/reset-password`,
      data: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      validateStatus: () => true,
    })
      .then((response) => {
        console.log(response);
        toast.success("Password reset link has been sent to your email");
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        toast.error("Invalid email");
      });
  };
  return (
    <div>
      <Navbar />
      <Toaster/>
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-col justify-center pt-10 pb-14 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
              <h1 className="text-center text-3xl font-semibold text-heading">
                Forget Password
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
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-[#3B0B01] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                >
                  Reset
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

export default FogetPassword;

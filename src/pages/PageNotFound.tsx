import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function PageNotFound() {
  return (
    <div className="bg-white">
      <div className="flex flex-1 items-center justify-center h-screen">
        <div className="flex w-full max-w-2xl flex-col items-center px-6 text-center md:px-10">
          <Player
            src="https://assets7.lottiefiles.com/packages/lf20_kcsr6fcp.json"
            className="player"
            loop
            autoplay
            // style={{ height: '250px', width: '250px' }}
          />
          <h2 className="mt-6 text-[#5d5d5d] text-2xl font-semibold text-heading">
            The page your were looking for could not be found.
          </h2>
          <p className="mt-4 font-medium text-text text-[#5d5d5d] ">
            It seems this page is missing. Please check the URL or go home.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-[#4d4d4d] shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;

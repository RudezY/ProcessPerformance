import React from "react";
import AVBG from "../assets/AVBG.jpg";

function Homepage() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={AVBG}
        alt="/"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-center text-black drop-shadow-lg-white">
            Neale Smith
          </h1>
          <h2 className="flex sm:text-3xl font-bold text-center text-2xl pt-4 text-black">
            Identify and Develop your process
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Homepage;

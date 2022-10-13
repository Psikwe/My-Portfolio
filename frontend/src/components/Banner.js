import React from "react";
import "./Home.css";

function Banner() {
  return (
    <div className="grid lg:grid-cols-2 container mx-auto mt-6">
      <div className="text-center self-center">
        <h1 className="text-5xl">Dennis Boateng</h1>
        <h3 className="text-3xl mt-4">Softwae Engineer</h3>
      </div>
      <div className="bg-indigo-500 rounded-full">
        <img
          className="object-cover h-18 w-96 border-solid border-4 border-sky-500"
          src="/assets/images/me.jpg"
        />
      </div>
    </div>
  );
}

export default Banner;

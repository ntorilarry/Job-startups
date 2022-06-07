import React from "react";
import Testy from "../assets/CONT.png";

function Test() {
  return (
    <div className="w-full">
      <img src={Testy} alt="" />
      <h1 className="text-4xl text-center font-semibold tracking-tight text-[#112d58]">
        {" "}
        Come on, join with us !
      </h1>
      <p className="text-center font-light ">
        Create an account and refer your friend{" "}
      </p>
    </div>
  );
}

export default Test;

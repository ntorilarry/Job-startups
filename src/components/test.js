import React from "react";
import Testy from "../assets/CONT.png";

function Test() {
  return (
    <div className="w-full">
      <img className="w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="50"
        data-aos-once="true"
        src={Testy}
        alt=""
      />
    </div>
  );
}

export default Test;

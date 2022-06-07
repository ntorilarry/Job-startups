import React from "react";
import FootImg from "../assets/footerr.png";

function Footer() {
  return (
    <div>
      <div
        className="w-full h-[100vh] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${FootImg})` }}
      ></div>
    </div>
  );
}

export default Footer;

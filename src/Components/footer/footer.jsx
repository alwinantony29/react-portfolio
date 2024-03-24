import React from "react";
import SocialLinks from "../SocialLinks";

const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-grayscale-950 sm:mt-20 p-2 backdrop-opacity-20">
      <SocialLinks />
      <div className=" flex justify-center pb-4 text-white">
        <span>
          Developed with ❤ by <em>Alwin Antony</em>
        </span>
      </div>
    </div>
  );
};

export default Footer;

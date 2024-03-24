import React from "react";

const WorkExperienceCard = ({
  role,
  company,
  description,
  image,
  duration,
}) => {
  return (
    <div className="flex flex-wrap sm:justify-between w-full h-full ">
      <div className="flex justify-center flex-col gap-1 w-full sm:w-[40%] p-5  text-grayscale-50">
        <div className="flex justify-between text-white font-bold  text-[20px] ">
          <span>{role || ""}</span>
          <span>{company || ""}</span>
        </div>
        <span className="text-sm ">{duration}</span>
        <span className="mt-2 text-secondary text-[14px] leading-[18px]">
          {description || ""}
        </span>
      </div>
      <div className="w-full sm:w-[40%] flex items-center justify-center ">
        <img
          className="rounded w-[90%] sm:w-auto shadow-xl"
          src={image}
          alt={company}
        />
      </div>
    </div>
  );
};

export default WorkExperienceCard;

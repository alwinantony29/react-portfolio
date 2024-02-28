import React from "react";
import { vidyalai } from "../assets";

const WorkExperienceCard = ({
  role = "Full Stack web developer Intern",
  company = "Vidyalai",
  description = "Design, develop, test, deploy, and maintain web apps.  Troubleshoot and debug web application.  Collaborated with other team members to ensure high quality and industry standards.  Wrote and maintained detailed documentation to ensure code is easily understood and maintained by other developers.",
  image = vidyalai,
  duration = "Aug 2023 - Feb 2024",
}) => {
  return (
    <div className="flex flex-wrap sm:justify-between w-full h-full ">
      <div className="flex justify-center flex-col gap-1 w-full sm:w-[40%] p-5  text-grayscale-50">
        <div className="flex justify-between text-white font-bold  text-[20px] ">
          <span>{role}</span>
          <span>{company}</span>
        </div>
        <span className="text-sm ">{duration}</span>
        <span className="mt-2 text-secondary text-[14px] leading-[18px]">
          {description}
        </span>
      </div>
      <div className="w-full sm:w-[40%] flex items-center justify-center">
        <img className="rounded w-[90%] sm:w-auto " src={image} alt="Vidyalai" />
      </div>
    </div>
  );
};

export default WorkExperienceCard;

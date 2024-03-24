import React from "react";
import { motion } from "framer-motion";

const WorkExperienceCard = ({
  role,
  company,
  description,
  image,
  duration,
}) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row flex-wrap sm:justify-between w-full h-full ">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 75,
          damping: 20,
        }}
        className="flex justify-center flex-col gap-1 w-full sm:w-[40%] p-5  text-grayscale-50"
      >
        <div className="flex justify-between text-white font-bold  text-[20px] ">
          <span>{role || ""}</span>
          <span>{company || ""}</span>
        </div>
        <span className="text-sm ">{duration}</span>
        <span className="mt-2 text-secondary text-[14px] leading-[18px]">
          {description || ""}
        </span>
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 75,
          damping: 20,
        }}
        className="w-full sm:w-[40%] flex items-center justify-center "
      >
        <img
          className="rounded w-[90%] sm:w-auto shadow-xl"
          src={image}
          alt={company}
        />
      </motion.div>
    </div>
  );
};

export default WorkExperienceCard;

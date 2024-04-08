import { motion } from "framer-motion";
import { projects } from "../Constants/constants";
import { githubIcon } from "../assets";

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={` max-w-7xl mx-auto relative z-0 `}
          style={{ marginLeft: "" }}
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
          <Component />
        </motion.section>
      </>
    );
  };

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div
      // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 75,
        damping: 20,
      }}
    >
      <div className="flex flex-col gap-3 text-grayscale-50 p-5 min-h-[420px] rounded-lg sm:w-[280px] w-full ">
        <div className="relative w-full">
          <img
            src={image}
            alt={name}
            className="shadow-lg rounded object-contain shadow-primary w-full"
          />
        </div>
        <div className="text-center">
          <h3 className="text-white font-bold  text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] sm:h-[110px] leading-[18px]">
            {description}
          </p>
        </div>
        <div className="flex justify-evenly justify-self-end h-12">
          <div className="flex justify-center items-center">
            <a
              className="flex justify-center"
              target="_blank"
              href={source_code_link}
            >
              <img
                src={githubIcon}
                alt="github"
                className="w-9 h-9 object-contain"
              />
            </a>
          </div>
          {demo_link && (
            <div className="flex justify-center items-center ">
              <a
                className="p-0 px-2 text-primary-600 flex border-2 rounded-3xl justify-center"
                href={demo_link}
                target="_blank"
              >
                Live
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>
      <div className=" flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

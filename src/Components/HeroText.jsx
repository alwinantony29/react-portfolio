import { m, LazyMotion, domAnimation } from "framer-motion";
import TypedText from "./Typed";
import BouncingLetters from "./BouncingLetters";

const HeroText = () => {
  const name = "Alwin";

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "SuperMario" }}
        >
          <m.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <BouncingLetters text={"Hey I'm "} />
          </m.div>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <BouncingLetters text={name} />
          </m.div>
        </m.h1>
      </LazyMotion>
      <TypedText
        inputs={[
          "MERN Stack Developer ",
          "Front End Developer ",
          "Back End Developer ",
        ]}
      />
    </div>
  );
};

export default HeroText;

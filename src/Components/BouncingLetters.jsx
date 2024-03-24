import React from "react";

const BouncingLetters = ({text}) => {
  return (
    <>
      {text.split("").map((char, index) => {
        if (char === " ") {
          return " ";
        }
        return (
          <span
            key={index}
            className="text-primary-400 bounce text-lg"
            style={{ fontSize: "1.2em" }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
};

export default BouncingLetters;

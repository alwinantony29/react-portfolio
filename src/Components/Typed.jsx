import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ inputs }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const defaultOptions = {
      strings: [],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, {
      ...defaultOptions,
      strings: inputs,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span
        style={{ whiteSpace: "pre", fontSize: "larger", fontWeight: "bolder" }}
        ref={typedRef}
      />
    </div>
  );
};

export default TypedText;

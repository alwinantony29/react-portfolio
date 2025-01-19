import { useEffect, useState, useRef } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isInViewport) {
        setIndex((i) => (i + 1) % images.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [images, isInViewport]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        ref={imageRef}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "tween",
        }}
        className="w-full h-full blob drop-shadow-div"
        style={{ backgroundImage: `url(${images[index]})` }}
      ></m.div>
    </LazyMotion>
  );
};

export default ImageSlider;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles.js";
import { navLinks } from "../../Constants/constants";
import { menu, close } from "../../assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
      ${styles.paddingX} w-full flex items-center py-5
      fixed top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex"></p>
        </Link>
        <ul
          className="list-none hidden sm:flex flex-row gap-10"
          style={{ color: "#FFFFFF" }}
        >
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer `}
                onClick={() => setActive(link.title)}
              >
                <Link to={link.id}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        {/* small screens */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28ox] h-[28px] object-contain cursor-pointer z-20 "
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt={menu}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: toggle ? 0 : "100%" }} // .
            transition={{ type: "tween", duration: 0.3 }} 
            className={`flex pt-10 text-grayscale-50 backdrop-blur-md p-6 black-gradient absolute top-0 right-0  h-screen w-screen z-10 `}
          >
            <ul
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="list-none flex justify-center flex-col gap-10 w-full items-center"
            >
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-gray-300" : ""
                    } font-poppins font-medium cursor-pointer text-lg`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <Link to={link.id}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

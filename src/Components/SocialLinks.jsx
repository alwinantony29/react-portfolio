/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: SocialLinks.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    // bg-grayscale-950
    <div className="w-full  flex justify-center items-center gap-3 p-3">
      <a href="https://github.com/alwinantony29" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-white hover:scale-[1.2] transition-all duration-75"
          icon={icons.faGithub}
        />
      </a>
      <a href="mailto:itzmealwii@gmail.com" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-white hover:scale-[1.2] transition-all duration-75"
          icon={icons.faEnvelope}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/alwin-antony-5227971b8"
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-3xl text-white hover:scale-[1.2] transition-all duration-75"
          icon={icons.faLinkedin}
        />
      </a>
      <a href="https://www.instagram.com/itz_me_alwiii/" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-white hover:scale-[1.2] transition-all duration-75"
          icon={icons.faInstagram}
        />
      </a>
    </div>
  );
};

export default SocialLinks;

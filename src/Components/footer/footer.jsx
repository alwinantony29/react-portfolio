import React from 'react'
import SocialLinks from '../SocialLinks'

const Footer = () => {
  return (
<div className="w-full flex flex-col bg-grayscale-950 mt-20">
        <SocialLinks />
        {/* bg-grayscale-950 */}
        <div className=" flex justify-center pb-4 text-grayscale-50">
          <span>
            Developed with ❤ by <em>Alwin Antony</em>
          </span>
        </div>
      </div>
        )
}

export default Footer
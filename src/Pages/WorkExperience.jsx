import React from "react";
import SectionTitle from "../Components/SectionTitle";
import WorkExperienceCard from "../Components/WorkExperienceCard";

const WorkExperience = () => {
  return (
    <div>
      <div
        id="work-experience"
        className="w-full overflow-hidden-web flex justify-center"
      >
        <div className="w-full min-h-[500px]  lg:w-[90%] relative mt-20 flex flex-col items-center">
          <div className="w-full">
            <SectionTitle
              title="WORK EXPERIENCE"
              subtitle="WHere I have worked so far"
            />
          </div>
          {[1].map((_) => (
            <WorkExperienceCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

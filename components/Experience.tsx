import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Tuvoc from "./works/Tuvoc";
import TMedia from "./works/TMedia";

const Experience = () => {
  const [workTuvoc, setWorkTuvoc] = useState(true);
  const [workTMedia, setWorkTMedia] = useState(false);
  
  const handleTuvoc = () => {
    setWorkTMedia(false);
    setWorkTuvoc(true);
  };
  const handleTMedia = () => {
    setWorkTMedia(true);
    setWorkTuvoc(false);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Career Highlights" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleTuvoc}
            className={`${workTuvoc
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Tuvoc
          </li>
          <li
            onClick={handleTMedia}
            className={`${workTMedia
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            TMedia
          </li>
        </ul>
        {workTMedia && <TMedia />}
        {workTuvoc && <Tuvoc />}
      </div>
    </section>
  );
};

export default Experience;

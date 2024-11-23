import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ameeupadhyay" target="_blank">
          <span className="w-12 h-12 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/amee812/"
          target="_blank"
        >
          <span className="w-12 h-12 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-48 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;

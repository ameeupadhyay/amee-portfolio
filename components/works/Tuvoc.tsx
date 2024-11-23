import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Tuvoc = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Developer
        <span className="text-textGreen tracking-wide">@Tuvoc</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Significantly contributed to diverse Node.js projects with Express, managing both MySQL and MongoDB databases.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Contributed to the development of a small MVP for user-centric validation alongside enhancing
          an ERP system for comprehensive process automation and data analysis.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Improved system performance through collaborative technical solutions in a team environment.
          Kept abreast with Node.js developments, adopting emerging technologies for ongoing project success.
        </li>
      </ul>
    </motion.div>
  );
};

export default Tuvoc;

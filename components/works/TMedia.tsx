import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const TMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Python Developer Intern
        <span className="text-textGreen tracking-wide">@TMedia</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2022 - May 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Interned as a Python Developer, working extensively with the Django framework.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Proficiently worked with datasets, manipulating and extracting data to CSV for analysis.
        </li>
        {/* <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et
          corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt
          sequi?
        </li> */}
      </ul>
    </motion.div>
  );
};

export default TMedia;

import React from "react";
import { motion } from "framer-motion";

function TechItem({ logo, title }) {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className="bg-blures rounded-[12px] p-[16px] flex flex-col items-center justify-between gap-[24px]"
    >
      <div className="text-[54px]">{logo}</div>
      <h4 className="text-white text-[16px] sm:text-[18px] lg:text-[20px]">{title}</h4>
    </motion.div>
  );
}

export default TechItem;

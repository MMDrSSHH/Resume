import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({ company, position, from, to, description }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: "all", once: true }}
      className="bg-blures text-white flex flex-col gap-[10px] items-start rounded-[24px] px-[24px] py-[18px]"
    >
      {/* company title */}
      <motion.p
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="text-[16px] sm:text-[18px] font-black"
      >
        {company}
      </motion.p>
      {/* position */}
      <motion.p
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="text-[12px] sm:text-[14px] font-extralight"
      >
        {position}
      </motion.p>
      {/* Time */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="flex gap-[10px] text-[10px] font-extralight"
      >
        {/* From */}
        <span>{from}</span>
        <span>—</span>
        {/* To */}
        <span>{to}</span>
      </motion.div>
      <motion.p
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className={`text-[14px] font-extralight leading-loose text-justify mt-[16px]`}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default ExperienceCard;

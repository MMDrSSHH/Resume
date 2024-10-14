"use client";

import React from "react";
import { motion } from "framer-motion";

function TechStackItem({
  icon,
  title,
  glareColor = "",
  glareClassName = "",
  className = "",
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "all" }}
      className={`flex flex-col gap-[64px] lg:gap-[105px] ${className}`}
      {...props}
    >
      {/* Icon and glare */}
      <div className="text-center relative">
        {/* Icon */}
        <div className="text-[160px] lg:text-[200px] flex justify-center">{icon}</div>
        {/* Glare behind the icon */}
        <div
          className={`absolute top-0 right-1/2 translate-x-1/2 blur-[80px] bg-opacity-20 w-[200px] aspect-square rounded-full ${glareColor} ${glareClassName}`}
        />
      </div>

      {/* Title */}
      <h3 className="text-white text-[16px] lg:text-[22px] font-medium text-center leading-relaxed">{title}</h3>
    </motion.div>
  );
}

export default TechStackItem;

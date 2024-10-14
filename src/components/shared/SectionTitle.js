import { motion } from "framer-motion";
import React, { forwardRef } from "react";

const SectionTitle = forwardRef(function SectionTitle(
  { children, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={`font-medium text-[28px] md:text-[36px] text-white text-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

export default motion.create(SectionTitle);

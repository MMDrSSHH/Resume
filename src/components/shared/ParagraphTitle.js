import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const ParagraphTitle = forwardRef(function ParagraphTitle(
  { children, className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={`bg-blures/40 rounded-[24px] py-[12px] px-[36px] font-medium text-[18px] inline-block ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

export default motion.create(ParagraphTitle);

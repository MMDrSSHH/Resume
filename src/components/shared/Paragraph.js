import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Paragraph = forwardRef(function Paragraph(
  { children, className = "", ...props },
  ref
) {
  return (
    <p
      ref={ref}
      className={`text-justify font-medium text-[14px] leading-loose ${className}`}
    >
      {children}
    </p>
  );
});

export default motion.create(Paragraph);

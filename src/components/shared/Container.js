import React from "react";

function Container({ children, className, ...props }) {
  return (
    <div className={`mx-auto w-[90%] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;

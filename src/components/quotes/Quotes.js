"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../shared/Container";

const quotes = [
  {
    quote: "Something something something DARK SIDE!!",
    from: "Palpatine",
  },
  {
    quote: "Life is a box of choclate, you'll never know what you gonna get...",
    from: "Forrest's mother",
  },
];

const randomPicker = (list) => {
  if (!Array.isArray(list)) {
    throw new Error("list must be an array");
  }

  const randIndex = Math.floor(Math.random() * list.length);

  return list[randIndex];
};

function Quotes() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    setQuote(randomPicker(quotes));
  }, []);
  return (
    <div dir="ltr" className={`h-screen`}>
      <div className="w-full h-full flex items-center justify-center text-white relative">
        <div className="w-[360px] aspect-square rounded-full bg-blures blur-[140px] absolute top-[20%] right-[5%] -z-10" />
        <div className="w-[440px] aspect-square rounded-full bg-blures blur-[140px] absolute top-[70%] -left-[5%] -z-10" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex flex-col items-center gap-[22px] md:gap-[36px]"
          >
            <p className="font-black text-[18px] md:text-[36px]">
              {quote?.quote}
            </p>
            <span className="text-[12px] md:text-[16px] self-end">' {quote?.from} '</span>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default Quotes;

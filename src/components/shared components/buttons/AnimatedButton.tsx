"use client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

interface Prop {
  btnText: string;
  href: string;
}
const AnimatedButton = ({ btnText, href }: Prop) => {
  const color = useMotionValue(COLORS_TOP[0]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });
  return (
    <Link href={href}>
      <motion.button
        style={{
          border,
          boxShadow,
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="flex-center group relative flex h-[60px] w-[220px] items-center gap-1.5 rounded-full text-gray-50 transition-colors dark:text-black max-sm:h-[50px] max-sm:w-[130px]"
      >
        {btnText}
      </motion.button>
    </Link>
  );
};

export default AnimatedButton;

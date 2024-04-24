"use client";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/testomonial/learner/learner5.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/testomonial/learner/learner4.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/testomonial/learner/learner3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/testomonial/learner/learner4.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/testomonial/learner/learner1.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="mb-10 flex w-full flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}

const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group  relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX,
                rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-[#202329] px-4 py-2 text-xs shadow-xl dark:bg-black"
            >
              <div className="absolute inset-x-10 -bottom-px z-30 h-px w-1/5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
              <div className="absolute -bottom-px left-10 z-30 h-px w-2/5 bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
              <div className="relative z-30 text-base font-bold text-white">
                {item.name}
              </div>
              <div className="text-xs text-white">{item.designation}</div>
            </motion.div>
          )}
          <Image
            onMouseMove={handleMouseMove}
            height={60}
            width={60}
            src={item.image}
            alt={item.name}
            className="relative !m-0 size-12 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500  group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};

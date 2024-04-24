import React, { useRef, useState } from "react"; // Import RefObject
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

interface Prop {
  Title: string;
  Point: string;
  href: string;
  subheading?: string;
  customeCss: string;
  icon: string;
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const TiltCard = ({
  Title,
  Point,
  subheading,
  customeCss,
  icon,
}: Prop) => {
  const ref = useRef<HTMLDivElement>(null); // Specify HTMLDivElement type

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: any) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative size-72 rounded-xl bg-gradient-to-br from-[#111] to-[#222] dark:from-[#999] dark:to-[#fff]"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid rounded-xl bg-black shadow-lg dark:bg-white"
      >
        <div
          className="flex-center h-[111px] w-full "
          style={{
            backgroundImage: isHovered ? 'url("/ellipse.svg")' : "",
            backgroundSize: "contain",
            borderRadius: 15,
          }}
        >
          <div
            className={`flex-center  size-[4.5rem] rounded-full border bg-white`}
          >
            <Image src={icon} height={28} width={28} alt="" />
          </div>
        </div>

        <div className=" w-full justify-around px-4 py-2">
          <h6 className="h6-bold text-center">{Title}</h6>
          <p className="p-text text-center">{Point}</p>

          {subheading && (
            <h5 className="text-center text-[1.05rem] text-white dark:text-black max-md:text-[1.10rem]">
              {subheading}
            </h5>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCard; // Correct export name

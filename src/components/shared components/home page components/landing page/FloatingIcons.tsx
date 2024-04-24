"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface Props {
  iconsUrl: string;
  customeCss: string;
  height: number;
  width: number;
  left?: boolean;
  right?: boolean;
}

export const CircleIcons = ({
  iconsUrl,
  customeCss,
  height,
  width,
  left,
  right,
}: Props) => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (left) {
      gsap.fromTo(
        animationRef.current,
        {
          x: "-300%", // Start from outside the viewport on the left
          opacity: 0.5, // Start with opacity 0
        },
        {
          x: 0, // Move to the original position
          opacity: 1, // Fade in to full opacity
          duration: 2, // Animation duration
          ease: "power3.out", // Easing function
          onComplete: () => {
            // Animation onComplete callback
            // Start the up and down animation
            const tl = gsap.timeline({ repeat: -1, yoyo: true });

            tl.to(animationRef.current, {
              duration: 2,
              y: -15, // Adjust the range of motion here
            }).to(animationRef.current, {
              duration: 2,
              y: 15, // Adjust the range of motion here
            });
          },
        }
      );
    } else if (right) {
      gsap.fromTo(
        animationRef.current,
        {
          x: "300%", // Start from outside the viewport on the left
          opacity: 0, // Start with opacity 0
        },
        {
          x: 0, // Move to the original position
          opacity: 1, // Fade in to full opacity
          duration: 2, // Animation duration
          ease: "power3.out", // Easing function
          onComplete: () => {
            // Animation onComplete callback
            // Start the up and down animation
            const tl = gsap.timeline({ repeat: -1, yoyo: true });

            tl.to(animationRef.current, {
              duration: 2,
              y: -15, // Adjust the range of motion here
            }).to(animationRef.current, {
              duration: 2,
              y: 15, // Adjust the range of motion here
            });
          },
        }
      );
    }
  }, [left, right]);

  return (
    <div
      ref={animationRef}
      className={`flex-center rounded-full bg-black dark:bg-white ${customeCss}`}
      style={{ opacity: 0 }} // Set initial opacity to 0
    >
      <Image src={iconsUrl} height={height} width={width} alt="" />
    </div>
  );
};

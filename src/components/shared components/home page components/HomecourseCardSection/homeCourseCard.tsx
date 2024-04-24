import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  Title: string;
  Point: string;
  href: string;
  subheading?: string;
  customeCss: string;
  icon: string;
}

const HomeCourseCard = ({
  Title,
  Point,
  href,
  subheading,
  customeCss,
  icon,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-[353px] w-[285px] rounded-[15px] border dark:border-gray-700  ${
        isHovered
          ? "cardShadow scale-105 bg-white duration-500 dark:bg-black"
          : "bg-white dark:bg-black"
      } dark:bg-black max-md:h-[290px] max-md:w-[235px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex-center h-[35%] w-full"
        style={{
          backgroundImage: isHovered ? 'url("/ellipse.svg")' : "",
          backgroundSize: "contain",
          borderRadius: 15,
        }}
      >
        <div className={`rounded-full ${customeCss} flex-center size-20`}>
          <Image src={icon} height={30} width={30} alt="" />
        </div>
      </div>

      {subheading && (
        <h5 className="-mb-8 mt-2 text-center text-[1.25rem] text-black dark:text-white max-md:text-[1.10rem]">
          {subheading}
        </h5>
      )}

      <div className="flex h-3/5 w-full flex-col items-center gap-5 p-5 max-md:p-3">
        <h3 className="h5-bold w-full text-center">{Title}</h3>
        <p className="w-full text-center text-[#8A90A2]">{Point}</p>
        <Link
          href={href}
          className={`flex-center ${isHovered ? "cyan text-white" : "dark:bg-[#464646]"} mx-auto w-[90%] rounded-[11px] border py-2 font-semibold text-black dark:border-none dark:text-white`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HomeCourseCard;

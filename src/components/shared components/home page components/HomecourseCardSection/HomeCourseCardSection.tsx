"use client";
import React from "react";
import { HomeCourseCardData } from "@/context/GlobalData";
import Image from "next/image";
import { TiltCard } from "./3Dcard";

const HomeCourseCardSection = () => {
  return (
    <main className="relative mt-20 w-full max-lg:mt-32 max-sm:mt-52 max-sm:hidden">
      <div className="absolute -ml-24 -mt-72 size-full">
        <Image
          src={"/HomeIcons/courseCardSectionIcons/shape1.svg"}
          height={1200}
          width={900}
          alt=""
        />
      </div>

      <div className="relative size-full py-10">
        <h2 className="h3-bold mx-auto mb-6 w-[35%] text-center max-lg:w-full">
          Who are our courses for Cloud Data Engineer
        </h2>

        <div className="z-20 mx-auto mt-10 flex w-[90%] flex-wrap items-center justify-center gap-6 px-10 max-sm:hidden">
          {HomeCourseCardData.map((item) => (
            <TiltCard
              key={item.id}
              Title={item.title}
              Point={item.Point}
              subheading={item.subheading}
              customeCss={item.customeCss}
              href={item.href}
              icon={item.icons}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomeCourseCardSection;

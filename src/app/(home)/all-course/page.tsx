import Coursecard from "@/components/All course/Coursecard";
import { SparklesCore } from "@/components/All course/LampAnimation";
import { Pacifico } from "next/font/google";
import React from "react";
const pacifico = Pacifico({ subsets: ["latin-ext"], weight: "400" });

const AllCourses = () => {
  return (
    <div className="AllCoursebackground-grid dark:AllCoursebackground-light-grid relative mx-auto w-full py-10">
      <div className="absolute mt-0 w-full">
        <SparklesCore
          background="transparent"
          className="h-[180vh]"
          particleDensity={20}
          particleColor="#6757A5"
          speed={0.5}
        />
      </div>
      <div className="relative z-40 w-full">
        <h2
          className={`h3-bold text-purple dark:text-purple z-20 mt-6 text-center ${pacifico.className}`}
        >
          All Course
        </h2>
        <h1 className="h2-bold z-20 text-center">All Courses by Data Vidhya</h1>

        <div className="relative size-full">
          <div className="absolute size-full"></div>
          <div className="relative my-10 flex size-full flex-wrap justify-center gap-16">
            {/* This cards will accepts only three points */}
            <Coursecard />
            <Coursecard />
            <Coursecard />
            <Coursecard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;

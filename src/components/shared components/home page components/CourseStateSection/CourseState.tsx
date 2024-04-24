import React from "react";
import Slider from "./Slider";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin-ext"], weight: "400" });

const CourseState = () => {
  return (
    <div className="mx-auto my-6 w-4/5 max-md:w-[95%] max-sm:my-2">
      <h3
        className={`h3-bold text-center ${pacifico.className} text-purple dark:text-purple`}
      >
        Courses Stats
      </h3>
      <h2 className="h2-bold mb-6 text-center">Project Covered in Courses</h2>
      <Slider />
    </div>
  );
};

export default CourseState;

import Image from "next/image";
import React from "react";

// Define common styles as CSS classes
const gradientImageClass = "z-10";
const cloudRocketImageClass = "z-10 mr-0";
const instructorInfoLineClass = "opacity-30 max-md:h-[250px]";

const InstructorInfo = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Gradient Images */}
      <div className="absolute -mt-14 ml-96 flex size-full -rotate-12 items-start justify-end">
        <Image
          src={"/GlobalGradient.svg"}
          height={600}
          width={500}
          alt=""
          className={`${gradientImageClass} mr-0 opacity-70`}
        />
      </div>

      <div className="absolute -ml-96 -mt-80 max-md:mt-[-22rem]">
        <Image
          src={"/GlobalGradient.svg"}
          height={600}
          width={500}
          alt=""
          className={`${gradientImageClass} max-md:opacity-50`}
        />
      </div>

      {/* Cloud Rocket Image */}
      <div className="absolute -ml-16 flex size-full items-start justify-end max-md:hidden">
        <Image
          src={"/cloudRocket.svg"}
          height={200}
          width={180}
          alt=""
          className={cloudRocketImageClass}
        />
      </div>

      {/* Instructor Info */}
      <div className="z-20 flex size-full max-lg:flex-col">
        <div className=" z-20 h-full w-1/2 max-lg:w-full">
          <div className="flex-center  m-0 size-full">
            <Image
              src={"/instructorDesign3.svg"}
              height={600}
              width={600}
              alt=""
            />
          </div>
          <div className=" flex-center   size-full">
            {/* <Image
              src={"/GlobalGradient.svg"}
              height={600}
              width={650}
              alt=""
            /> */}
          </div>
        </div>

        <div className="z-20 h-full w-3/5 px-6 pr-20 pt-28 text-left max-lg:mx-auto max-lg:w-[70%] max-lg:pr-2 max-lg:pt-10 max-lg:text-center max-md:-mt-20 max-sm:mt-2 max-sm:w-full max-sm:py-0 max-sm:text-left">
          <p className="h4-bold text-purple dark:text-purple">
            About Darshil Parmar
          </p>
          <h2 className="max-md:h4-bold h2-bold w-[90%] py-2 max-md:w-full">
            Freelance Data Engineer & Content Creator
          </h2>
          <p className="p-text w-[85%] py-2 max-md:w-full">
            At Data Vidhya, we believe that the best way to learn is through
            hands-on practice and building projects.
          </p>
          <p className="p-text w-[85%] py-2 max-md:w-full">
            That&apos;s why we offer courses that enable you to apply what
            you&apos;ve learned and see the results for yourself.
          </p>
          <p className="p-text w-[85%] py-2 max-lg:w-full max-md:w-full">
            With a strong understanding of fundamentals and modern data
            engineering tools, you&apos;ll be able to master high-demand skills
            and take your career to the next level
          </p>
        </div>
      </div>

      {/* Line Image */}
      <div className="absolute z-10 mt-[-25rem] h-32 w-full max-xl:-mt-56 max-lg:mt-40 max-md:mt-24 max-sm:mt-6">
        <Image
          src={"/instructorInfoLine1.svg"}
          height={600}
          width={1620}
          alt=""
          className={instructorInfoLineClass}
        />
      </div>
    </div>
  );
};

export default InstructorInfo;

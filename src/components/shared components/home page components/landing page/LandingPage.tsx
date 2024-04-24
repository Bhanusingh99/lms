import React from "react";

import { Plus_Jakarta_Sans, Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
import { Star } from "lucide-react";
import { CircleIcons } from "./FloatingIcons";
import { AnimatedTooltipPreview } from "../Tooltip";
import AnimatedButton from "../../buttons/AnimatedButton";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "700" });
const MontserratAlternates = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: "500",
});

const LandingPage = () => {
  return (
    <>
      <main className=" relative w-full ">
        <div className="absolute flex size-full justify-between  max-lg:h-[87vh] max-md:h-[69vh]">
          <div className="flex h-full w-1/4 flex-col justify-between">
            <div className="flex-center h-1/4 w-full">
              <CircleIcons
                height={50}
                width={50}
                left={true}
                iconsUrl="/HomeIcons/landingpage/landingPageicons/blueco.png"
                customeCss="size-[75px] max-lg:size-[55px] dark:bigShadow1 bigShadow  p-5 max-md:size-[45px] max-lg:p-3"
              />
            </div>
            <div className="flex h-1/4 w-full items-center">
              <CircleIcons
                height={50}
                width={80}
                left={true}
                iconsUrl="/HomeIcons/landingpage/landingPageicons/azon.png"
                customeCss="ml-10 size-[90px] max-lg:size-[75px] dark:bigShadow1 bigShadow max-md:size-[55px] max-sm:ml-0 max-lg:p-2"
              />
            </div>
            <div className="flex h-1/4 w-full items-center justify-end">
              <CircleIcons
                height={50}
                width={50}
                left={true}
                iconsUrl="/HomeIcons/landingpage/landingPageicons/vue.png"
                customeCss="size-[75px] p-5 max-lg:size-[55px] dark:bigShadow1 bigShadow max-md:size-[45px] max-lg:p-3 max-sm:justify-start mr-10 max-sm:mr-10"
              />
            </div>
            <div className="flex-center h-1/4 w-full">
              <CircleIcons
                height={50}
                width={50}
                left={true}
                iconsUrl="/HomeIcons/landingpage/landingPageicons/microsoftlogo.png"
                customeCss="size-[75px] max-lg:size-[55px] dark:bigShadow1 bigShadow p-5 max-md:size-[45px] max-lg:p-3"
              />
            </div>
          </div>

          <div className="h-full w-[30%] ">
            <div className="flex h-1/5 w-full items-center">
              <CircleIcons
                height={45}
                width={45}
                right={true}
                iconsUrl="/HomeIcons/landingpage/landingPageicons/googlecloud.png"
                customeCss=" size-[70px] max-lg:size-[60px] dark:bigShadow1 bigShadow max-md:size-[45px] max-sm:ml-0 max-lg:p-2"
              />
            </div>
            <div className="flex h-1/5 w-full items-center justify-end ">
              <CircleIcons
                height={30}
                width={30}
                right={true}
                iconsUrl="/HomeIcons/landingpage/landingPageicons/html.png"
                customeCss=" size-[65px] max-lg:size-[55px] dark:bigShadow1 bigShadow max-md:size-[45px] max-sm:ml-0 max-lg:p-2"
              />
            </div>
            <div className="flex h-1/5 w-full items-center justify-center ">
              <CircleIcons
                height={24}
                width={24}
                right={true}
                iconsUrl="/HomeIcons/landingpage/landingPageicons/vscode.png"
                customeCss=" size-[40px] max-lg:size-[35px] dark:bigShadow1 bigShadow max-md:size-[30px] max-sm:ml-0 max-lg:p-2"
              />
            </div>
            <div className=" flex h-1/5 w-full items-center justify-center max-sm:justify-end">
              <CircleIcons
                height={50}
                width={50}
                right={true}
                iconsUrl="/HomeIcons/landingpage/landingPageicons/drive.png"
                customeCss=" ml-20 size-[70px] max-lg:size-[60px] dark:bigShadow1 bigShadow  max-md:size-[50px] max-sm:ml-0 max-lg:p-2"
              />
            </div>
            <div className="flex h-1/5 w-full max-sm:justify-end">
              <CircleIcons
                height={50}
                width={50}
                right={true}
                iconsUrl="/HomeIcons/landingpage/landingPageicons/python.png"
                customeCss=" size-[80px] dark:bigShadow1 bigShadow max-lg:size-[70px] max-md:size-[50px] max-sm:ml-0 max-lg:p-3"
              />
            </div>
          </div>
        </div>

        <div className="flex-center z-20 size-full">
          <div className="z-20 mt-10 w-[70%] py-2 text-center max-lg:w-[90%] max-md:mt-10">
            <h1
              className={`${plusJakarta.className} h1-bold my-8 leading-[3.5rem] max-md:my-3`}
            >
              Modern Data Engineering
            </h1>
            <p className="p-text mx-auto my-4 w-4/5 leading-6 max-md:my-2 max-sm:w-[85%]">
              Dive into the Data Revolution with Comprehensive, Project-Based
              Learning. Transform Your Skills and Launch Your Career in Data
              Engineering - All Through a Hands-On, Step-by-Step Journey.
            </p>
            <p className="p-text my-6 leading-6">
              #Learn Data Engineering by Doing It
            </p>
            <div className="mx-auto my-9 flex w-1/2 items-center justify-between max-lg:w-4/5 max-sm:w-[90%]">
              <AnimatedButton btnText="Enroll now" href="all-course" />
              <AnimatedButton
                btnText="Course Info"
                href="all-course/course-info"
              />
            </div>

            <div className="flex-center mt-16 flex-col">
              <p
                className={`p-text text-[12px] ${MontserratAlternates.className}`}
              >
                Over{" "}
                <span className="font-semibold text-[#F68786]">
                  10k+ Learners
                </span>{" "}
                all over the world
              </p>

              <Image
                src={"/HomeIcons/landingpage/bendedline.svg"}
                width={110}
                height={20}
                alt="bendedline"
                className=" -ml-24"
              />
            </div>

            <div className="mx-auto my-10 flex h-[60px] w-[282px] items-center justify-between">
              <AnimatedTooltipPreview />
              <div className="-mt-10 ml-4 flex h-[30px] w-[72px] items-center justify-center gap-1.5 rounded-[20px] bg-[#202329] dark:bg-white">
                <p className="font-semibold text-white dark:text-black ">4.7</p>
                <Star
                  size={16}
                  className="font-semibold text-white dark:text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;

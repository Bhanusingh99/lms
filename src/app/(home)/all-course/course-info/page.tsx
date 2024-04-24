"use client";
import Accordion from "@/components/All course/course info/CourseAccordian";
import CourseInfoCard from "@/components/All course/course info/CourseInfoCard";
import Tags from "@/components/All course/course info/Tags";
import { HoverEffect } from "@/components/shared components/home page components/Animated card/HoverEffect";
import { projects } from "@/components/shared components/home page components/Animated card/TestingComponent";
import FaqsAccordion from "@/components/shared components/home page components/Faqs/faqsAccordion";
import TiltCard from "@/components/shared components/home page components/HomecourseCardSection/3Dcard";
import { FAQsData, HomeCourseCardData, courseData } from "@/context/GlobalData";
import { CalendarDays, Flag } from "lucide-react";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const pacifico = Pacifico({ subsets: ["latin-ext"], weight: "400" });

const testomonialData = [
  {
    name: "Aarav Patel",
    review:
      "Best course about data engineering. It provided me with comprehensive knowledge and practical skills to excel in the field.",
  },
  {
    name: "Aarushi Sharma",
    review:
      "I absolutely loved this data engineering course! The content was well-structured, and the instructors were knowledgeable and engaging.",
  },
  {
    name: "Aditya Singh",
    review:
      "This course exceeded my expectations. The hands-on projects were particularly helpful in solidifying my understanding of data engineering concepts.",
  },
  {
    name: "Akanksha Gupta",
    review:
      "As someone new to data engineering, I found this course to be incredibly informative and accessible.",
  },
  {
    name: "Amit Kumar",
    review:
      "An outstanding course! It covered a wide range of topics in data engineering, and the instructors did a fantastic job of breaking down complex concepts.",
  },
];

const TestomonialCard = () => {
  return (
    <div className="flex w-full justify-between">
      {testomonialData.map((item, index) => {
        return (
          <div
            key={index}
            className="testomonialEffect mx-5 flex h-[180px] w-[250px] flex-col justify-around border-[1.25px] border-gray-500 px-4 py-3"
          >
            <p className="text-[14px] text-white dark:text-black">
              {item.review}
            </p>
            <p className="w-full text-right text-[18px] font-medium text-white dark:text-black">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const CourseInfo = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <div className="course-info-grid-bg dark:course-info-light-grid-bg w-full">
      <div className="mx-auto flex w-[95%] max-md:flex-col">
        <div className="w-[55%]  px-10 py-4 max-md:w-full max-md:px-4">
          <h2 className="h2-bold mt-4">Modern Data Engineering Course</h2>
          <p className="p-text my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy.
          </p>
          <div className="flex w-full  gap-10 max-sm:flex-col max-sm:gap-2">
            <div className="my-2 flex items-center gap-2">
              <CalendarDays size={18} color="white" />
              <p className="text-white dark:text-black">
                Last updated: <span> Mar 30, 2024</span>
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <Flag color="white" size={18} />
              <p className="text-white dark:text-black">
                English (Auto) + 23 More
              </p>
            </div>
          </div>

          <div className="mt-10 flex w-full  flex-wrap gap-6 max-sm:gap-5">
            <Tags text="Apache Spark" />
            <Tags text="Data Engineering" />
            <Tags text="Innovation" />
            <Tags text="Data Bricks" />
            <Tags text="Data Engineering" />
            <Tags text="Innovation" />
            <Tags text="Data Bricks" />
            <p className="mt-2 font-semibold text-white dark:text-black">
              27+ more skills
            </p>
          </div>

          <Link
            href={"/"}
            className="flex-center mt-10 h-[50px] w-[200px] rounded-[10px] bg-[#6757A5] font-semibold text-white"
          >
            Book Your Seat
          </Link>
        </div>

        <div className=" w-[45%] max-md:w-full">
          <CourseInfoCard
            imgUrl="/img3.jpg"
            title="Modern Data Engineering Course"
            bp1="2 End-To-End Projects using Spark, AWS Glue
            & Databricks"
            bp2="Inner working and foundational understanding
            of Spark"
            bp3="Building Data Pipeline using Spark and
            Databricks"
            totalVideo={150}
            totalExercise={75}
            totalArtical={50}
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[90%]">
        <h3 className={`h3-bold text-center ${pacifico.className} text-purple`}>
          What&apos;s included
        </h3>
        <h2 className="h2-bold text-center">Modules covered in this course</h2>
        <div className=" mx-auto mt-2 flex max-w-[400px] justify-between text-[#8A90A2] dark:text-black max-md:text-[14px]">
          <p>4 modules</p>
          <p>150 Lactures</p>
          <p>70hr 45min Length</p>
        </div>

        <div className="mt-12 w-full">
          {/* @ts-ignore */}
          <Accordion items={courseData} />
        </div>
      </div>

      <div className="mx-auto mt-8 w-[90%]">
        <h3 className="h3-bold text-center">Who is this course for</h3>
        <div className="z-20 mx-auto mt-10 flex w-full flex-wrap items-center justify-center gap-10">
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

      <div className="mx-auto mt-16 w-[90%]">
        <h3 className={`${pacifico.className} h3-bold text-purple text-center`}>
          Bonuses
        </h3>
        <h2 className="h2-bold text-center">Bonuses You Get From Me</h2>
        <div className="mx-auto w-full px-8 max-md:w-full">
          <HoverEffect items={projects} />
        </div>
      </div>

      <div className="mt-10 w-full">
        <h3 className="h2-bold w-full px-24 max-md:px-4">
          Kind Words from our learners
        </h3>
        <div className="w-full ">
          <Marquee autoFill pauseOnHover direction="right" className="my-6">
            <TestomonialCard />
          </Marquee>
          <Marquee autoFill pauseOnHover>
            <TestomonialCard />
          </Marquee>
        </div>
      </div>

      <div className="mx-auto mt-16 w-[70%] max-sm:w-[90%]">
        <h3 className={`h3-bold text-center ${pacifico.className} text-purple`}>
          FAQs
        </h3>
        <h2 className="h2-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-6 size-full">
          {FAQsData.map((item, index) => (
            <FaqsAccordion
              key={index}
              title={item.title}
              content={item.content}
              border={index !== 5}
              isOpen={openAccordion === item.title}
              onToggle={() => handleAccordionToggle(item.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;

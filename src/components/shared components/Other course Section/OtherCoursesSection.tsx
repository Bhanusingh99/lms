import { Pacifico } from "next/font/google";
import React from "react";
import BasicCourseCard from "../home page components/course card/BasicCourseCard";

const pacifico = Pacifico({ subsets: ["latin-ext"], weight: "400" });

const OtherCoursesSection = () => {
  return (
    <main className="w-full">
      <div className="gradient relative mx-auto w-4/5 rounded-[30px] py-10 max-md:w-full">
        <h3
          className={`h3-bold text-center ${pacifico.className} text-purple dark:text-purple`}
        >
          Other Courses
        </h3>
        <h2 className="h2-bold mt-2 text-center">
          Other Courses by Data Vidhya
        </h2>

        <div className="mx-auto mt-8 flex h-screen w-[90%] items-center justify-center gap-10 max-lg:h-[200vh] max-lg:w-full max-lg:flex-col">
          <BasicCourseCard
            btnUrl="/"
            title="Apache Spark with Databricks for Data Engineering"
            bp1="2 End-To-End Projects using Spark, AWS Glue & Databricks"
            bp2="Inner working and foundational understanding of Spark"
            bp3="Building Data Pipeline using Spark and Databricks"
            imgUrl="/HomeIcons/data vidhya course/apache-spark-thumbnail.png"
          />
          <BasicCourseCard
            btnUrl="/"
            title="Apache Spark with Databricks for Data Engineering"
            bp1="2 End-To-End Projects using Spark, AWS Glue & Databricks"
            bp2="Inner working and foundational understanding of Spark"
            bp3="Building Data Pipeline using Spark and Databricks"
            imgUrl="/HomeIcons/data vidhya course/apache-spark-thumbnail.png"
          />
        </div>
      </div>
    </main>
  );
};

export default OtherCoursesSection;

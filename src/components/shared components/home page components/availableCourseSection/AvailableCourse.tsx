import React from "react";
import { Pacifico } from "next/font/google";
import ImageContainer from "./ImageContainer";
import TextContainer from "./TextContainer";
import AnimatedButton from "../../buttons/AnimatedButton";

const pacifico = Pacifico({ subsets: ["latin-ext"], weight: "400" });

const AvailableCourse = () => {
  return (
    <div className="my-6 w-full">
      <h2
        className={`${pacifico.className} mb-2 mt-16 text-center text-[32px] font-bold text-[#6757A5] max-lg:text-[28px] max-md:text-[24px]`}
      >
        Courses Available
      </h2>
      <h3 className="h3-bold text-center">Courses Covered In the Program</h3>

      <div className="mx-auto my-10 flex h-[250vh] w-[85%] max-lg:w-[95%] max-sm:hidden">
        <div className="h-full w-2/5">
          <div className=" h-[14%] w-full">
            <TextContainer
              heading="1. Python for Data Engineering"
              text="Learn to harness the power of Python for transforming and processing 
              data at scale in our hands-on 'Python for Data Engineering' course. 
              Build the skills needed to design robust data pipelines and optimize 
              data workflows effectively."
            />
          </div>
          <div className="h-[14%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/sqlImage.jpg" />
          </div>
          <div className="h-[14%] w-full">
            <TextContainer
              heading="3. Data Warehouse with Snowflake"
              text="Discover the modern approach to data warehousing 
              using Snowflake in our course. Learn to design, implement, 
              and manage a high-performance data warehouse for 
              seamless analytics and insights."
            />
          </div>
          <div className="h-[14%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/sparkImage.jpg" />
          </div>
          <div className="h-[14%] w-full ">
            <TextContainer
              heading="5. Workflow Orchestration (Airflow, Mage, Prefect) (Coming Soon)"
              text="Explore the world of workflow orchestration with our course covering
               Airflow, Luigi, Mage, and Prefect. Gain expertise in seamlessly coordinating
                and automating complex data pipelines for enhanced efficiency and productivity."
            />
          </div>
          <div className="h-[14%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/kafkaImage.jpg" />
          </div>
          <div className="h-[14%] w-full">
            <TextContainer
              heading="7-9. Cloud Computing AWS, GCP, Azure (Coming Soon)"
              text="Embark on a journey through major cloud platforms with our course on AWS, 
              GCP, and Azure. Acquire the skills to deploy, manage, 
              and optimize cloud-based solutions for diverse business needs."
            />
          </div>
        </div>
        <div className="h-full w-1/5">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="flex h-[15%] w-full justify-center">
              <div className="flex size-full flex-col items-center">
                <div className="flex-center linear size-20 rounded-full p-3 text-[34px] font-bold text-white">
                  {`0${index + 1}`}
                </div>
                <div
                  className={`h-48 w-1 bg-yellow-500 ${index === 6 ? "hidden" : ""}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-full w-2/5">
          <div className="size-full">
            <div className="h-[14%] w-full">
              <ImageContainer imgUrl="/HomeIcons/availableCourseImage/pythonImage.jpg" />
            </div>
            <div className="h-[14%] w-full">
              <TextContainer
                heading="2. SQL for Data Engineering"
                text="Unlock the potential of data manipulation and 
                management with our 'SQL for Data Engineering' course.
                Gain proficiency in crafting and optimizing complex 
                queries to build and maintain efficient data pipelines"
              />
            </div>
            <div className="h-[14%] w-full">
              <ImageContainer imgUrl="/HomeIcons/availableCourseImage/dataware.jpg" />
            </div>
            <div className="h-[14%] w-full">
              <TextContainer
                heading="4. Spark for Data Engineering"
                text="Learn to leverage the power of Apache Spark 
                for efficient and scalable data engineering in our
                comprehensive course. Master the art of processing
                and transforming data to build robust pipelines
                and drive data-centric applications"
              />
            </div>
            <div className="h-[14%] w-full">
              <ImageContainer imgUrl="/HomeIcons/availableCourseImage/workFlowImage.jpg" />
            </div>
            <div className="h-[14%] w-full">
              <TextContainer
                heading="6. Apache Kafka for DE (Coming Soon)"
                text="Dive into the realm of data engineering 
                with Apache Kafka in our course. Learn to build
                real-time, scalable data pipelines that enable
                efficient data movement and processing for diverse applications."
              />
            </div>
            <div className="h-[14%] w-full">
              <ImageContainer imgUrl="/HomeIcons/availableCourseImage/CloudImage.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 hidden h-[420vh] w-full max-sm:flex">
        <div className="h-full w-1/4">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="flex h-[14.30%] w-full justify-center">
              <div className="flex size-full flex-col items-center">
                <div className="flex-center linear size-16 rounded-full p-3 text-[34px] font-bold text-white max-sm:text-[30px]">
                  {`0${index + 1}`}
                </div>
                <div
                  className={`h-[22rem] w-1 bg-yellow-500 ${index === 6 ? "hidden" : ""}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-full w-3/4">
          <div className=" h-[7.1%] w-full">
            <TextContainer
              heading="1. Python for Data Engineering"
              text="Learn to harness the power of Python for transforming and processing 
              data at scale in our hands-on 'Python for Data Engineering' course. 
              Build the skills needed to design robust data pipelines and optimize 
              data workflows effectively."
            />
          </div>
          <div className="h-[7.1%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/pythonImage.jpg" />
          </div>

          <div className=" h-[7.1%] w-full">
            <TextContainer
              heading="2. SQL for Data Engineering"
              text="Unlock the potential of data manipulation and 
                management with our 'SQL for Data Engineering' course.
                Gain proficiency in crafting and optimizing complex 
                queries to build and maintain efficient data pipelines"
            />
          </div>
          <div className="h-[7.1%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/pythonImage.jpg" />
          </div>

          <div className=" h-[7.1%] w-full">
            <TextContainer
              heading="3. Data Warehouse with Snowflake"
              text="Discover the modern approach to data warehousing 
              using Snowflake in our course. Learn to design, implement, 
              and manage a high-performance data warehouse for 
              seamless analytics and insights."
            />
          </div>
          <div className="h-[7.1%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/pythonImage.jpg" />
          </div>

          <div className=" h-[7.1%] w-full">
            <TextContainer
              heading="4. Spark for Data Engineering"
              text="Learn to leverage the power of Apache Spark 
                for efficient and scalable data engineering in our
                comprehensive course. Master the art of processing
                and transforming data to build robust pipelines
                and drive data-centric applications"
            />
          </div>
          <div className="h-[7.1%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/pythonImage.jpg" />
          </div>

          <div className=" h-[7.1%] w-full">
            <TextContainer
              heading="5. Workflow Orchestration (Airflow, Mage, Prefect) (Coming Soon)"
              text="Explore the world of workflow orchestration with our course covering
               Airflow, Luigi, Mage, and Prefect. Gain expertise in seamlessly coordinating
                and automating complex data pipelines for enhanced efficiency and productivity."
            />
          </div>
          <div className="h-[7.1%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/pythonImage.jpg" />
          </div>

          <div className=" h-[7.1%] w-full">
            <TextContainer
              heading="6. Apache Kafka for DE (Coming Soon)"
              text="Dive into the realm of data engineering 
                with Apache Kafka in our course. Learn to build
                real-time, scalable data pipelines that enable
                efficient data movement and processing for diverse applications."
            />
          </div>
          <div className="h-[7.1%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/pythonImage.jpg" />
          </div>

          <div className=" h-[7.1%] w-full">
            <TextContainer
              heading="7-9. Cloud Computing AWS, GCP, Azure (Coming Soon)"
              text="Embark on a journey through major cloud platforms with our course on AWS, 
              GCP, and Azure. Acquire the skills to deploy, manage, 
              and optimize cloud-based solutions for diverse business needs."
            />
          </div>
          <div className="h-[7.1%] w-full">
            <ImageContainer imgUrl="/HomeIcons/availableCourseImage/pythonImage.jpg" />
          </div>
        </div>
      </div>

      <div className="flex-center mb-10 w-full">
        <AnimatedButton btnText="Enroll now" href="all-course" />
      </div>
    </div>
  );
};

export default AvailableCourse;

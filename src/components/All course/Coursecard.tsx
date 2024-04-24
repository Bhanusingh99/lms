import StarRating from "@/helper/GetStart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  heading?: string;
  rating?: number;
  reviews?: number;
  module?: number;
  totalLacture?: number;
  timeLength?: string;
  imgUrl?: string;
  bonus1?: string;
  bonus2?: string;
  bonus3?: string;
  redirectLink?: string;
}
const Coursecard = ({
  heading,
  rating,
  reviews,
  module,
  totalLacture,
  timeLength,
  imgUrl,
  bonus1,
  bonus2,
  bonus3,
  redirectLink,
}: Props) => {
  return (
    <Link
      href="/all-course/course-info"
      className=" card-shadow mx-auto  max-w-[400px] overflow-hidden rounded-lg border border-[#353a3c] bg-[#181a1b] p-5 py-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-white md:mx-0"
    >
      <Image
        src={"/img3.jpg"}
        height={200}
        width={360}
        alt="course image"
        className="rounded-[12px]"
      />
      <div className="w-full">
        <h6 className="h6-bold">Modern Data Engineering Course</h6>
        <div className="mt-1 flex w-full items-center gap-2 text-white dark:text-black">
          <p className="text-[18px] font-medium">5.0</p>{" "}
          <StarRating card={{ star: 4 }} />
        </div>

        <div className=" mt-2 flex w-full justify-between text-[#8A90A2] dark:text-black max-md:text-[14px]">
          <p>4 modules</p>
          <p>150 Lactures</p>
          <p>70hr 45min Length</p>
        </div>

        <div className=" flex-center mx-auto mb-1 mt-3 w-full  rounded-[10px] bg-purple-500 py-3 font-semibold text-white">
          Book Your Seat{" "}
        </div>
      </div>
    </Link>
  );
};

export default Coursecard;

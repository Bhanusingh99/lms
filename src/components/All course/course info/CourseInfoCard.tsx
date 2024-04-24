import {
  CircleCheck,
  CirclePlay,
  Clock3,
  FileCode2,
  MonitorSmartphone,
  Newspaper,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  imgUrl: string;
  title: string;
  bp1: string;
  bp2: string;
  bp3: string;
  totalVideo: number;
  totalExercise: number;
  totalArtical: number;
}
const CourseInfoCard = ({
  imgUrl,
  title,
  bp1,
  bp2,
  bp3,
  totalVideo,
  totalExercise,
  totalArtical,
}: props) => {
  return (
    <div className="card-shadow mx-auto mt-4 max-w-[432px] rounded-[20px] border border-gray-700 bg-[#202329] px-6 py-4 dark:bg-white">
      <Image
        src={imgUrl}
        height={220}
        width={380}
        alt="course info image"
        className="mx-auto rounded-[15px]"
      />
      <h6 className="h6-bold mt-2">{title}</h6>

      <div className="mt-2 w-full">
        <p className="mt-2 text-[18px] font-medium text-white dark:text-black">
          Bonus Includes:
        </p>
        <p className="mt-1 flex items-start gap-2 text-[15px] text-[#8A90A2]  max-sm:text-[13px]">
          <CircleCheck size={18} /> {bp1}
        </p>
        <p className="mt-1 flex items-start gap-2 text-[15px] text-[#8A90A2] max-sm:text-[13px]">
          <CircleCheck size={18} /> {bp2}
        </p>
        <p className="mt-1 flex items-start gap-2 text-[15px] text-[#8A90A2] max-sm:text-[13px]">
          <CircleCheck size={18} /> {bp3}
        </p>
      </div>

      <div className="mt-2 w-full">
        <p className="mt-2 text-[18px] font-medium text-white dark:text-black">
          This Course Includes:
        </p>
        <p className="mt-1 flex items-center gap-2 text-[15px] text-[#8A90A2]">
          <CirclePlay size={16} /> {totalVideo}+ Video Tutorials
        </p>
        <p className="mt-1 flex items-center gap-2 text-[15px] text-[#8A90A2]">
          <FileCode2 size={16} /> {totalExercise} Coding Exercises
        </p>
        <p className="mt-1 flex items-center gap-2 text-[15px] text-[#8A90A2]">
          <Newspaper size={16} /> {totalArtical} Articles
        </p>
        <p className="mt-1 flex items-center gap-2 text-[15px] text-[#8A90A2]">
          <MonitorSmartphone size={16} /> Multiple device access
        </p>
        <p className="mt-1 flex items-center gap-2 text-[15px] text-[#8A90A2]">
          <Clock3 size={16} /> Full Lifetime Access
        </p>
        <p className="mt-1 flex items-center gap-2 text-[15px] text-[#8A90A2]">
          <Trophy size={16} /> Certificate after completion
        </p>
      </div>

      <Link
        href={"/"}
        className="flex-center mx-auto mt-4 w-full rounded-[10px] bg-[#6757A5] px-4 py-2.5 text-white"
      >
        <p>Book Your seat</p>
      </Link>
    </div>
  );
};

export default CourseInfoCard;

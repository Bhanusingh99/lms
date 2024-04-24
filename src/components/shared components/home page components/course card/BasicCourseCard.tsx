import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  btnUrl: string;
  bp1: string;
  bp2: string;
  bp3: string;
  bp4?: string;
  title: string;
}
const BasicCourseCard = ({
  imgUrl,
  btnUrl,
  bp1,
  bp2,
  bp4,
  bp3,
  title,
}: Props) => {
  return (
    <div className="dar:shadow-blue-200 -mt-24 w-[400px] rounded-[30px] border border-gray-600 shadow-lg dark:border max-lg:mt-0 max-sm:w-[330px]">
      <div>
        <Image
          src={imgUrl}
          height={290}
          width={420}
          alt=""
          className="rounded-t-[30px] max-sm:w-[350px]"
        />
      </div>
      <div className="-mt-2 rounded-b-[30px] bg-black p-2 dark:bg-white">
        <h5 className="h5-bold my-4">{title}</h5>
        <div className="my-2 flex gap-3">
          <div className=" flex-center size-8 rounded-full bg-red-100 p-1 dark:bg-red-800/20">
            <Check color="red" />
          </div>
          <p className="text-white dark:text-black">{bp1}</p>
        </div>

        <div className="my-2 flex gap-3">
          <div className=" flex-center size-8 rounded-full bg-red-100 p-1 dark:bg-red-800/20">
            <Check color="red" />
          </div>
          <p className="text-white dark:text-black">{bp2}</p>
        </div>

        <div className="my-2 flex gap-3">
          <div className=" flex-center size-8 rounded-full bg-red-100 p-1 dark:bg-red-800/20">
            <Check color="red" />
          </div>
          <p className="text-white dark:text-black">{bp3}</p>
        </div>

        {bp4 && (
          <div className="my-2 flex gap-3">
            <div className=" flex-center size-8 rounded-full bg-black/50 p-1 dark:bg-red-100">
              <Check color="red" />
            </div>
            <p className="text-white dark:text-black">{bp4}</p>
          </div>
        )}

        <Link
          href={btnUrl}
          className="flex-center mx-auto my-4 w-[90%] rounded-[10px] bg-[#5CA2D4] py-3 font-bold text-white"
        >
          Book Your Seat
        </Link>
      </div>
    </div>
  );
};

export default BasicCourseCard;

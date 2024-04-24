import React from "react";

interface Prop {
  text: string;
}
const Tags = ({ text }: Prop) => {
  return (
    <div className="flex-center h-[45px] w-[153px] rounded-[30px] border text-white dark:text-black max-lg:w-[140px] max-lg:text-[15px] max-md:h-[33px] max-md:w-[135px] max-sm:text-[14px]">
      {text}
    </div>
  );
};

export default Tags;

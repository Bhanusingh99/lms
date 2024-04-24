import Link from "next/link";
import React from "react";

interface buttonProps {
  href: string;
  value: string;
  customeCss?: string;
}

const SpecialBlue = ({ href, value, customeCss }: buttonProps) => {
  return (
    <Link
      href={`${href}`}
      className={`${customeCss} relative flex overflow-hidden bg-[#5CA2D4]`}
    >
      <div className="absolute ml-[-10%] size-[4.25rem] rounded-full bg-yellow-500 max-md:ml-[-7%] max-md:size-12"></div>
      <div className="flex-center w-[90%] text-center font-bold text-white max-md:ml-5 max-md:w-full">
        {value}
      </div>
    </Link>
  );
};

export default SpecialBlue;

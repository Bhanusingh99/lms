import Image from "next/image";
import React from "react";

interface Prop {
  imgUrl: string;
}
const ImageContainer = ({ imgUrl }: Prop) => {
  return (
    <div className="flex size-full items-center justify-center">
      <Image
        src={`${imgUrl}`}
        width={415}
        height={226}
        alt=""
        className="rounded-[12px] max-md:w-[90%]"
      />
    </div>
  );
};

export default ImageContainer;

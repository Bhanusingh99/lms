import React from "react";

interface Prop {
  heading: string;
  text: string;
}
const TextContainer = ({ heading, text }: Prop) => {
  return (
    <div className="size-full px-12 py-4 max-xl:px-2">
      <h4 className="h6-bold">{heading}</h4>
      <p className="p-text mt-4 text-[15px] max-xl:text-[14px] max-md:text-[13px] max-sm:mt-2 max-sm:text-[12.5px]">
        {text}
      </p>
    </div>
  );
};

export default TextContainer;

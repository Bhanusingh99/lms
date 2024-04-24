// FaqsAccordion.tsx
import React from "react";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  border?: boolean;
  onToggle: () => void;
}

const FaqsAccordion: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  border,
  onToggle,
}) => {
  const handleClick = () => {
    onToggle();
  };

  return (
    <div
      className={` ${border ? "border-b" : ""} ${isOpen ? "border-none" : ""}`}
    >
      <div
        className={`flex cursor-pointer items-center justify-between px-4 py-3 ${isOpen ? "bg-[#2D2D2D] dark:bg-white" : ""}`}
        onClick={handleClick}
      >
        <h5 className="py-4 text-[20px] font-medium text-white dark:text-black max-md:text-[18px]">
          {title}
        </h5>
        <div>
          <div
            className={`rounded-full border px-3 py-1 font-semibold text-white dark:border-black dark:text-black`}
          >
            {isOpen ? "-" : "+"}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="Accordion-text w-full rounded-b-[20px] bg-[#2D2D2D] px-4 pb-3 text-[16px] leading-8 shadow-md dark:bg-white">
          {" "}
          {content}
        </div>
      )}
    </div>
  );
};

export default FaqsAccordion;

"use client";
// FAQsSection.tsx
import React, { useState } from "react";
import FaqsAccordion from "./faqsAccordion";
import { FAQsData } from "@/context/GlobalData";

const FAQsSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <div className="z-40 mx-auto w-[70%] max-md:w-[90%]">
      <h3 className="h3-bold text-purple dark:text-purple text-center">FAQs</h3>
      <h2 className="h2-bold text-center">Frequently Asked Questions</h2>
      <div className="mx-auto flex w-full max-lg:flex-col">
        <div className="mt-12 size-full max-lg:w-full">
          {FAQsData.map((item, index) => (
            <FaqsAccordion
              key={index}
              title={item.title}
              content={item.content}
              border={index !== 5}
              isOpen={openAccordion === item.title}
              onToggle={() => handleAccordionToggle(item.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;

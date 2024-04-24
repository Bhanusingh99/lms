import { CirclePlay, Clock3, Images, SquarePlay } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Lesson {
  lession: string;
  type: string;
  duration: string;
}

interface Course {
  title: string;
  totleLacture: number;
  totalTime: string;
  constent: Lesson[];
}

interface AccordionProps {
  items: Course[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([0]); // Initialize with the index of the first item

  const toggleAccordion = (index: number) => {
    if (activeIndices.includes(index)) {
      // If index is already in activeIndices, remove it
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // If index is not in activeIndices, add it
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <div
            onClick={() => toggleAccordion(index)}
            className="flex h-[70px] w-full items-center justify-between rounded-t-[12px] bg-[#6757A5] px-4"
          >
            <div className="text-[18px] font-semibold text-white max-sm:line-clamp-2 max-sm:w-1/2 max-sm:text-[16px]">
              {item.title}
            </div>

            <div className="flex gap-4">
              <p className="flex items-center gap-1 text-[18px] text-white max-sm:text-[12px]">
                <CirclePlay className="max-sm:text-[12px]" />
                {item.totleLacture} Lectures
              </p>
              <p className=" flex items-center gap-1 text-[18px] text-white max-sm:text-[12px]">
                <Clock3 className="max-sm:text-[12px]" />
                {item.totalTime}
              </p>
            </div>
          </div>
          {activeIndices.includes(index) && (
            <div className="rounded-b-[12px] bg-[#202329] px-4 py-2 dark:border dark:bg-white">
              {item.constent.map((lesson, lessonIndex) => (
                <div
                  key={lessonIndex}
                  className={`border-b border-gray-600 px-2 py-1.5`}
                >
                  <Link
                    href="/"
                    className="p-text flex w-full items-center justify-between"
                  >
                    <p className="line-clamp-1">{lesson.lession}</p>
                    <p className="flex items-center gap-10">
                      {lesson.type === "video" ? (
                        <SquarePlay size={20} />
                      ) : (
                        <Images size={20} />
                      )}
                      <span> {lesson.duration}</span>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

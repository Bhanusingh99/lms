import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

interface CardProps {
  images: { url: string }[];
}

const Card: React.FC<CardProps> = ({ images }) => {
  return (
    <div className="flex w-full">
      {images.map((image, index) => (
        <div key={index} className=" mx-10 my-2 w-full">
          <Image
            src={image.url}
            alt={`Image ${index + 1}`}
            width={400}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

const imagesArray = [
  { url: "/HomeIcons/project/1.png" },
  { url: "/HomeIcons/project/2.png" },
  { url: "/HomeIcons/project/3.png" },
  { url: "/HomeIcons/project/2.png" },
];

export const ProjectFeedBack = () => {
  return (
    <div className="my-6 w-full">
      <h1 className="h2-bold mb-10 mt-20 text-center max-md:ml-4">
        Project Reviews From Learners
      </h1>
      <Marquee autoFill pauseOnHover>
        <Card images={imagesArray} />
      </Marquee>
      <Marquee autoFill pauseOnHover direction="right">
        <Card images={imagesArray} />
      </Marquee>
      <Marquee autoFill pauseOnHover>
        <Card images={imagesArray} />
      </Marquee>
    </div>
  );
};

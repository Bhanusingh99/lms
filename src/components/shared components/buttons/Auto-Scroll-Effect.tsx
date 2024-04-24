import Marquee from "react-fast-marquee";
import React from "react";
import Image from "next/image";

const companyLogoArray = [
  { src: "/HomeIcons/companyLogo/mondeylogo.svg" },
  { src: "/HomeIcons/companyLogo/oraclelogo.svg" },
  { src: "/HomeIcons/companyLogo/samsunglogo.svg" },
  { src: "/HomeIcons/companyLogo/segmentlogo.svg" },
  { src: "/HomeIcons/companyLogo/protonetlogo.svg" },
  { src: "/HomeIcons/companyLogo/zeplinelogo.svg" },
];

const generateImages = (logoArray: any) => {
  return logoArray.map((logoInfo: any, index: number) => (
    <Image
      src={logoInfo.src}
      height={50}
      width={180}
      key={index}
      alt={logoInfo.src}
      className="mx-4 max-md:w-[170px]"
    />
  ));
};

const MarqueeComponent = () => {
  return (
    <Marquee autoFill pauseOnHover>
      {generateImages(companyLogoArray)}
    </Marquee>
  );
};

const MarqueeEffect = () => {
  return (
    <div
      className="flex-center relative h-[220px] w-full max-sm:-mt-16"
      style={{ backgroundImage: 'url("Homeicons/marquee/smokeEffect.svg")' }}
    >
      <div className="z-50 w-full">
        <h3 className="h4-bold text-center">Learners now available at</h3>
        <div className="mt-6 flex">
          <MarqueeComponent />
        </div>
      </div>
    </div>
  );
};

export default MarqueeEffect;

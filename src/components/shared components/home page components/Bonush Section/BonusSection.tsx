import { Pacifico } from "next/font/google";
import React from "react";
import { CardHoverEffectDemo } from "../Animated card/TestingComponent";

const pacifico = Pacifico({ subsets: ["latin-ext"], weight: "400" });

const BonusSection = () => {
  return (
    <div className="relative my-16 w-full py-2 max-sm:my-6">
      <div className="relative size-full">
        <h3
          className={`h3-bold text-center ${pacifico.className} text-purple dark:text-purple`}
        >
          Bonuses
        </h3>
        <h2 className="h2-bold mt-4 text-center">Bonuses You Get From Me</h2>
        <div className="mx-auto  flex w-full flex-wrap gap-6 max-lg:w-[95%] max-md:mx-auto">
          <CardHoverEffectDemo />
        </div>
      </div>
    </div>
  );
};

export default BonusSection;

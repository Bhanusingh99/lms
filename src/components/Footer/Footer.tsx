import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="Footerbackground-grid dark:Footerbackground--light-grid h-[30rem] w-full bg-black dark:bg-white">
      <div className="flex-center w-full flex-col">
        <Image src={"/datalogo.png"} height={70} width={70} alt="/" />
        <p className="p-text mt-6 text-center">
          Making Data Easier For Everyone
        </p>
        <div className="mt-6 h-[60px] w-[550px] rounded-[100px] border max-md:w-[300px]"></div>
        <div className=" mx-auto mt-10 flex w-3/5 justify-around max-md:w-[90%]">
          <p className=" text-[18px] font-medium text-white dark:text-black">
            Privacy Policy
          </p>
          <p className=" text-[18px] font-medium text-white dark:text-black">
            Terms of use
          </p>
          <p className=" text-[18px] font-medium text-white dark:text-black">
            Contact us
          </p>
          <p className=" text-[18px] font-medium text-white dark:text-black">
            Refund policy
          </p>
        </div>

        <div className="mt-6 flex w-[30%] justify-around max-sm:w-1/2">
          <Image
            src={"/Footer/youtubeIcon.svg"}
            height={40}
            width={40}
            alt=""
          />
          <Image src={"/Footer/linkedin.svg"} height={40} width={40} alt="" />
          <Image
            src={"/Footer/twitterIcon.svg"}
            height={40}
            width={40}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

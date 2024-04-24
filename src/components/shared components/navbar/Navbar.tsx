import Image from "next/image";
import Link from "next/link";
import React from "react";
import HighListedNavBarButtons from "./HighListedNavBarButtons";
import MobileNavbar from "./mobileNavbar";
import GlobalButtons from "../buttons/GlobalButtons";
import Switcher from "../buttons/changeTheme";

const Navbar = () => {
  return (
    <nav className="background_light-white_dark-black dark:navBarbackground-light-grid navBarbackground-grid navbarBorderButton flex h-20 w-full items-center justify-between px-14 max-lg:px-2">
      <Link href={"/"}>
        <Image src="/datalogo.png" height={40} width={40} alt="logo" />
      </Link>

      <div className="ml-10  flex w-[92%] justify-between px-4 max-xl:w-[90%] max-lg:justify-end max-sm:ml-0">
        <HighListedNavBarButtons />

        <div className="flex-center gap-5">
          <Switcher />
          <GlobalButtons
            href="/signin"
            value="Contact Now"
            customeCss="flex-center h-[39px] w-[139px] rounded-[11px] cyan text-[16px] font-semibold text-white max-lg:hidden"
          />

          <GlobalButtons
            href="/signin"
            value="Sign-in"
            customeCss=" flex-center h-[39px] bg-[#5B5C5E] dark:bg-white dark:text-black text-white w-[139px] shadow-md shadow-blue-100 rounded-[11px] text-[16px] font-semibold text-black max-lg:hidden"
          />

          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

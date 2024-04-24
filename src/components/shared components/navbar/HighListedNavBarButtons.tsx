"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ href, text, isActive }: any) => {
  return (
    <div className="relative inline-block">
      <Link
        href={href}
        className={`relative ${isActive ? "text-white dark:text-black" : ""}`}
      >
        {text}
      </Link>
      {isActive && (
        <span
          className="absolute bottom-0 left-0 top-6 h-[3px] w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #5CA2D4 50%, #F3D251 50%)",
          }}
        ></span>
      )}
    </div>
  );
};

const HighListedNavBarButtons = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-end gap-12 text-[18px] font-medium text-[#8A90A2] max-lg:hidden">
      <NavItem href="/" text="Home" isActive={pathname === "/"} />
      <NavItem href="/faqs" text="FAQs" isActive={pathname === "/faqs"} />
      <NavItem
        href="/all-course"
        text="All Courses"
        isActive={pathname === "/all-course"}
      />
    </div>
  );
};

export default HighListedNavBarButtons;

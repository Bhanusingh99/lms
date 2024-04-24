import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const MobileNavbar = () => {
  return (
    <div className="hidden max-lg:flex">
      <Sheet>
        <SheetTrigger>
          <AlignRight
            className="mobileNavBarShadow size-9 rounded-[5px] bg-[#5B5C5E] p-2 text-white dark:bg-white dark:text-black "
            size={40}
          />
        </SheetTrigger>
        <SheetContent className="bg-[#111] dark:bg-white">
          <SheetHeader>
            <SheetTitle>
              <Link href={"/"}>
                <Image
                  src="/HomeIcons/logo/vidyalogo.svg"
                  height={111}
                  width={111}
                  alt="logo"
                />
              </Link>
            </SheetTitle>
            <SheetDescription className="mb-16 ">
              <div className="flex w-full flex-col gap-4">
                <Link
                  href={"/"}
                  className="p-text w-full rounded-[10px] bg-[#333] px-4 py-2.5 text-left text-white dark:bg-[#999] dark:text-black"
                >
                  Home
                </Link>
                <Link
                  href={"/"}
                  className="p-text w-full rounded-[10px] bg-[#333] px-4 py-2.5 text-left text-white dark:bg-[#999] dark:text-black"
                >
                  FAQs
                </Link>
                <Link
                  href={"/all-course"}
                  className="p-text w-full rounded-[10px] bg-[#333] px-4 py-2.5 text-left text-white dark:bg-[#999] dark:text-black"
                >
                  all course
                </Link>
              </div>

              <div className="mt-40 flex w-full flex-col gap-4">
                <Link
                  href={"/"}
                  className="p-text w-full rounded-[10px] bg-[#333] px-4 py-2.5 text-left text-white dark:bg-[#999] dark:text-black"
                >
                  Log-in
                </Link>
                <Link
                  href={"/"}
                  className="p-text w-full rounded-[10px] bg-[#333] px-4 py-2.5 text-left text-white dark:bg-[#999] dark:text-black"
                >
                  Sign-up
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;

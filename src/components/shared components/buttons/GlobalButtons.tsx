import Link from "next/link";
import React from "react";

interface buttonProps {
  customeCss: string;
  href: string;
  value: string;
}

// global button to maintain code consistency
const GlobalButtons = ({ customeCss, href, value }: buttonProps) => {
  return (
    <Link href={`${href}`} className={`flex-center ${customeCss}`}>
      {value}
    </Link>
  );
};

export default GlobalButtons;

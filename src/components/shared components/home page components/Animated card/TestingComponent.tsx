import { HoverEffect } from "./HoverEffect";

export function CardHoverEffectDemo() {
  return (
    <div className="mx-auto w-[95%] px-8 max-md:w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Code Templates for Practice",
    icons: "/HomeIcons/BonusIcons/code.svg",
    customeCss: "text-blue-500",
    description:
      "All the python code will be provided with assignment, and will provide hands on practise.",
    link: "/",
  },
  {
    title: "Discount/Early Access in the Future",
    icons: "/HomeIcons/BonusIcons/discount.svg",
    customeCss: "text-purple-500",
    description: "You will get a high discount on future courses that I launch",
    link: "https://netflix.com",
  },
  {
    title: "Access to interactive community",
    icons: "/HomeIcons/BonusIcons/access.svg",
    customeCss: "text-green-500",
    description: "Connect with like-minded people and learn with them.",
    link: "https://google.com",
  },
  {
    title: "Content Course Improvement",
    icons: "/HomeIcons/BonusIcons/contant.svg",
    customeCss: "text-puple-500",
    description:
      "You will get a high discount on future courses that I launch, a high discount on future courses that I launch.",
    link: "https://meta.com",
  },
  {
    title: "Gamified Learning",
    icons: "/HomeIcons/BonusIcons/learning.svg",
    customeCss: "text-pink-500",
    description:
      "Connect with like-minded people and learn with them, make a good connection and learn more with peers",
    link: "https://amazon.com",
  },
  {
    title: "Feedback Priority",
    icons: "/HomeIcons/BonusIcons/feedback.svg",
    customeCss: "text-yellow-500",
    description:
      "Give priority to student queries and feedback, ensuring they receive timely responses and assistance",
    link: "https://microsoft.com",
  },
];

import BonusSection from "@/components/shared components/home page components/Bonush Section/BonusSection";
import CourseState from "@/components/shared components/home page components/CourseStateSection/CourseState";
import FAQsSection from "@/components/shared components/home page components/Faqs/faqs";
import HomeCourseCardSection from "@/components/shared components/home page components/HomecourseCardSection/HomeCourseCardSection";
import AvailableCourse from "@/components/shared components/home page components/availableCourseSection/AvailableCourse";
import MarqueeEffect from "@/components/shared components/buttons/Auto-Scroll-Effect";
import LandingPage from "@/components/shared components/home page components/landing page/LandingPage";
import { HeroParallaxEffect } from "@/components/shared components/home page components/Hero Parallel Effect/HeroParallaxEffect";
import Testomonial from "@/components/shared components/home page components/Testomonial Section/Testomonial";
import { ProjectFeedBack } from "@/components/shared components/home page components/ProjectFeedBack/Feedbacl";
import ChatBot from "@/components/shared components/Chatbot/chatbot";

export default function Home() {
  return (
    <div className=" background-grid dark:light-grid overflow-hidden">
      <ChatBot />
      <LandingPage />
      <MarqueeEffect />
      <HeroParallaxEffect />
      <HomeCourseCardSection />
      <AvailableCourse />
      <ProjectFeedBack />
      <BonusSection />
      <CourseState />
      <Testomonial />
      <FAQsSection />
    </div>
  );
}

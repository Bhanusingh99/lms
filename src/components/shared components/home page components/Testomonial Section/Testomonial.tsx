"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import StarRating from "@/helper/GetStart";

const pacifico = Pacifico({ subsets: ["latin-ext"], weight: "400" });

const Testomonial = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="Footerbackground-grid dark:Footerbackground--light-grid relative z-0 h-[110vh] bg-black pt-24 dark:bg-white"
    >
      <h3
        className={`h3-bold ${pacifico.className} text-purple dark:text-purple ml-14`}
      >
        Testimonials
      </h3>
      <h2 className="h2-bold ml-14">Kind words from my learners</h2>
      <div className="sticky top-0 mt-16 flex h-screen items-start overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group    h-[250px] w-[600px] overflow-hidden rounded-[30px] border border-gray-600 bg-[#202329] max-md:h-[200px] max-md:w-[400px]"
    >
      <div className=" inset-0 z-10 flex">
        <div className="h-full w-3/5 p-8 max-sm:p-4">
          <StarRating card={{ star: card.star }} />
          <p className="p-text mt-5">{card.text}</p>
          <div className="mt-6 flex w-full gap-2 max-sm:mt-3">
            <Image
              src={card.learnerIcon}
              height={48}
              width={48}
              alt=""
              className="rounded-full"
            />

            <div>
              <p className="p-text text-[18px] font-semibold">{card.name}</p>
              <p className="p-text text-[15px]">Learner</p>
            </div>
          </div>
        </div>
        <div className="flex-center h-[250px] w-2/5 max-md:h-[200px]">
          <Image src={card.url} height={190} width={190} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testomonial;

const cards = [
  {
    url: "/testomonial/testomonialImage.jpg",
    name: "Shalini tiwari",
    star: 5,
    learnerIcon: "/testomonial/learner/learner1.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1,
  },
  {
    url: "/testomonial/testomonialImage.jpg",
    name: "Bhanu Singh",
    learnerIcon: "/testomonial/learner/learner2.jpg",
    star: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2,
  },
  {
    url: "/testomonial/testomonialImage.jpg",
    name: "Ritik Mahapatra",
    learnerIcon: "/testomonial/learner/learner3.jpg",
    star: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3,
  },
  {
    url: "/testomonial/testomonialImage.jpg",
    name: "Anuj Kumar Jha",
    learnerIcon: "/testomonial/learner/learner4.jpg",
    star: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 4,
  },
  {
    url: "/testomonial/testomonialImage.jpg",
    name: "Yug Borana",
    learnerIcon: "/testomonial/learner/learner5.jpg",
    star: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 5,
  },
];

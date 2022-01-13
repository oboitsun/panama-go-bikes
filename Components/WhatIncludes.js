import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const features = [
  { label: "Bikes", icon: "/assets/bike-icon.svg" },
  { label: "Helmet", icon: "/assets/helmet-icon.svg" },
  { label: "Water", icon: "/assets/drop-icon.svg" },
  { label: "Guide", icon: "/assets/guide-icon.svg" },
];
function WhatIncludes() {
  const { inView, ref } = useInView({ threshold: 0.2 });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };
  const item = {
    hidden: {
      x: 400,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };
  const item2 = {
    hidden: {
      x: -100,
    },
    show: {
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };
  return (
    <div id="about" className="py-10 lg:py-16 xl:py-24 font-mont">
      <div className="cont">
        <div className="grid gap-6 w-full lg:grid-cols-2 lg:gap-10 xl:grid-cols-[580px,1fr]">
          <div className="">
            <p className="font-black text-2xl lg:text-[1.875rem] xl:text-[2.5rem] leading-snug">
              The price is{" "}
              <span
                className={`${
                  inView ? "text-navy" : "text-black"
                } transition-all `}
              >
                $30 per person
              </span>{" "}
              the tour includes:
            </p>
            <p className="text-xs xl:text-sm leading-loose font-medium pt-2 lg:pt-4 pb-4">
              Come and experience a bike tour starting at El Machico Hostel
              along the Cinta Costera to Casco Viejo, Biomuseo , entrance to the
              panama Canal and more...more info panamabiketours@gmail.com
            </p>
            <motion.div
              ref={ref}
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid grid-cols-2 gap-x-5 gap-y-4 lg:gap-x-10 lg:gap-y-8 overflow-hidden"
            >
              {features.map((f, i) => (
                <motion.div
                  variants={item}
                  key={i}
                  className="w-full p-5 flex items-center gap-2 xl:gap-5 bg-lightGrey"
                >
                  <motion.div className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 bg-white rounded-md flex items-center justify-center overflow-hidden">
                    <motion.img
                      variants={item2}
                      className="w-4 lg:w-[22px]"
                      src={f.icon}
                      alt={f.label}
                    />
                  </motion.div>
                  <p className="font-extrabold lg:text-xl">{f.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="w-full pb-[100%] lg:pb-0 h-full relative">
            <Image
              layout="fill"
              objectFit="cover"
              src={"/assets/what_includes.jpeg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIncludes;

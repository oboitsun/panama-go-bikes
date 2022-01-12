import Image from "next/image";
import React from "react";
import GetStartedButton from "./GetStartedButton";
const route = [
  "Cinta Costera",
  "Modern City",
  "Panama Sign",
  "Fish Market",
  "Maracana Stadium",
  "Casa Viejo",
];
function HeroSection() {
  return (
    <div className="relative py-10 lg:py-20 xl:py-32 font-mont mt-[105px] lg:mt-[115px] xl:mt-[127px]">
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent z-[1] opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <Image
          layout="fill"
          objectFit="cover"
          src="/assets/hero-section-bg.jpeg"
          alt="Hero Section"
        />
      </div>
      <div className="cont relative z-[1]">
        <div className="flex flex-col items-center text-white">
          <h1 className="font-black text-4xl lg:text-[3.5rem] xl:text-7xl leading-tight uppercase text-center lg:max-w-[656px] xl:max-w-[854px]">
            Bienvenido <br className="lg:hidden" /> a Go Panamá Bike Tours
          </h1>
          <p className="text-xs xl:text-sm leading-loose text-center font-medium pt-2 pb-4 lg:pt-4 lg:pb-8 lg:max-w-[656px] xl:max-w-[1056px]">
            The tour is the perfect plan to explore Panama in the most fun way,
            the idea is exploring in 2.5 - 3 hours with a guide who is going to
            explain Panama at the same moment that you are living the real
            Panama in the bike, we offer tours at 10 am and 3:30 pm we go into 5
            and maximum 15 people.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:gap-x-0 items-start lg:flex justify-between w-full">
            {route.map((point, i) => (
              <div
                key={i}
                className="flex lg:w-full flex-grow lg:flex-col  lg:items-start items-center gap-2"
              >
                <div className="relative lg:w-full flex justify-between items-center gap-2 pr-2">
                  <img
                    className="min-w-max"
                    src="/assets/map_pin.svg"
                    alt={`Roadmap point -  ${point}`}
                  />
                  <div className="hidden lg:block h-px w-full flex-grow bg-white rounded-sm opacity-40"></div>
                </div>
                <p className="uppercase font-extrabold leading-snug max-w-min">
                  {point}
                </p>
              </div>
            ))}
            <div className="flex lg:flex-col  lg:items-start items-center gap-2 col-span-2 justify-center">
              <div className="relative flex items-center gap-2 pr-2">
                <img
                  className=""
                  src="/assets/map_pin.svg"
                  alt={`Roadmap point -  Chorrillo`}
                />
              </div>
              <p className="uppercase font-extrabold leading-snug">Chorrillo</p>
            </div>
          </div>
          <GetStartedButton addClass={"flex items-center gap-2 mt-8"}>
            <img
              className=""
              src="/assets/make-call.svg"
              alt="make an appointment"
            />
            <span className=" ">Make appointment</span>
          </GetStartedButton>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

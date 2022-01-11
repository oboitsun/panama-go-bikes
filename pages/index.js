import Head from "next/head";
import Gallery from "../Components/Gallery";
import HeroSection from "../Components/HeroSection";
import Testimonials from "../Components/Testimonials";
import WhatIncludes from "../Components/WhatIncludes";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Panama bike tours</title>
        <meta name="description" content="Panama bike tours!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <WhatIncludes />
      <Testimonials />
      <Gallery />
    </div>
  );
}

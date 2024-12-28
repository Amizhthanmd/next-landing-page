import React from "react";
import Image from "next/image";
import LandingPageSvg from "../public/landing-page-image.svg";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
      <div className="text-center lg:text-left max-w-lg lg:pl-8 mt-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-normal sm:leading-[4rem] md:leading-[4rem] lg:leading-[80px]">
          <span className="block">Quality Digital</span>
          <span className="block">Services You</span>
          <span className="block">Really Want</span>
        </h1>
        <p className="text-xl text-muted-foreground mt-4">
          We are delivering top-level digital services with our best-experienced
          team. Just get started with us.
        </p>
        <Button size="lg" className="mt-4 group relative overflow-hidden">
          LET&apos;S TALK
          <MoveRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
        </Button>
      </div>

      <div className="w-full lg:w-auto">
        <Image
          src={LandingPageSvg}
          alt="Landing page SVG Image"
          width={600}
          height={600}
          className="mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default HomePage;

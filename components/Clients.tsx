"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";

const Clients = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-24">
    <div className="max-container padding-container relative w-full flex justify-end">
      <div className="z-20 flex w-full flex-col ">
        <div className="text-center">
          <h2 className="bold-40 lg:bold-64">  Kind words from satisfied clients</h2>
        </div>
        <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
      </div>
    </div>
  </section>

  
  );
};

export default Clients;

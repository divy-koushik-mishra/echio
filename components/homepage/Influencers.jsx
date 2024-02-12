import React from "react";
import Image from "next/image";
import { arrowRightWhite, influencerone, influencertwo } from "@/public/index";

export default function Influencers() {
  return (
    <div className="bg-white text-black">
      <div className="mx-[5rem] mt-[9.75rem] mb-24 flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="flex flex-col">
            <h1 className="text-transparent text-[4rem] md:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00C5D4] to-[#000] bg-clip-text">
              Influencers
            </h1>
            <p className="text-lg font-syne text-left max-w-[30rem] mb-10">
              Automate your influencer marketing journey from day zero with the
              magic of data and AI, creating impact for your brand, tracking
              performance and achieving results.
            </p>
            <div className="flex flex-col md:flex-row gap-10">
              <button
                className={`font-inter flex justify-center items-center bg-black text-white text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
              >
                View Services
                <span className="">
                  <Image src={arrowRightWhite} alt="logo" />
                </span>
              </button>
              <button
                className={`font-inter flex justify-center items-center text-black border border-[#090B0B] text-xl font-medium rounded-[0.25rem] px-6 py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-transparent`}
              >
                More Details
              </button>
            </div>
          </div>
          <div className="md:w-[34.25rem] md:h-[36.1875rem]">
            <Image src={influencerone} alt="mobile-image" className="" />
          </div>
        </div>
      </div>
      <div className="mx-[5rem] mt-[9.75rem] mb-24 flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-20">
          <div className="flex flex-col">
            <h1 className="text-transparent text-[4rem] md:text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00C5D4] to-[#000] bg-clip-text">
              Our Services
            </h1>
            <p className="text-lg font-syne text-let max-w-[30rem] mb-10">
              The right exposure to your pinpoint audience, funneling bright
              opportunities directly to you, where it matters the most.
            </p>
            <div className="flex flex-col md:flex-row gap-10">
              <button
                className={`font-inter flex justify-center items-center bg-black text-white text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
              >
                View Services
                <span className="">
                  <Image src={arrowRightWhite} alt="logo" />
                </span>
              </button>
              <button
                className={`font-inter flex justify-center items-center text-black border border-[#090B0B] text-xl font-medium rounded-[0.25rem] px-6 py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-transparent`}
              >
                More Details
              </button>
            </div>
          </div>
          <div className="md:w-[34.25rem] md:h-[36.1875rem]">
            <Image src={influencertwo} alt="mobile-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { arrowRight } from "@/public/index";
import { MultiCards } from "../others/MultiCards";

export default function BrandComponent() {
	return (
		<div
			className=""
			style={{
				backgroundImage: `linear-gradient(180deg, #000 0%, #252525 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<div className="flex flex-row justify-center items-center gap-14 my-[9.75rem] mx-[3.5rem]">
				<div className="">
					<MultiCards
						collage="default"
						divClassName="!border-[unset] !rounded-[unset] ![border-image:unset] !border-[unset] !bg-[unset]"
						divClassNameOverride="!border-[unset] !rounded-[unset] ![border-image:unset] !border-[unset] !bg-[unset]"
						rectangleClassName="!h-[333px] !rounded-[unset] !object-cover !left-[124px] !bg-[unset] !w-[410px] !top-[36px]"
						rectangleClassNameOverride="!border-[unset] !rounded-[unset] !object-cover ![border-image:unset] !border-[unset] !bg-[unset]"
					/>
				</div>
				<div className="flex flex-start flex-col">
					<h1 className="text-transparent text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00EDFF] to-[#CBFBFF] bg-clip-text">
						Brand
					</h1>
					<p className="text-lg font-syne text-let max-w-[30rem] mb-10">
						Automate your influencer marketing journey from day zero with the
						magic of data and AI, creating impact for your brand, tracking
						performance and achieving results.
					</p>
					<div className="flex gap-10">
						<button
							className={`font-inter flex justify-center items-center bg-gradient-to-r from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] text-black text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
						>
							Brand Login
							<span className="">
								<Image src={arrowRight} alt="logo" />
							</span>
						</button>
						<button
							className={`font-inter flex justify-center items-center text-white border border-[#EEEEEE] text-xl font-medium rounded-[0.25rem] px-6 py-4 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
						>
							More Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

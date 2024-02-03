import Image from "next/image";
import React from "react";
import { studioHeroImage } from "@/public/index";

export default function HeroStudioPage() {
	return (
		<div className="">
			<h1 className="text-center text-transparent font-syne text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
				Our Studio
			</h1>
			<p className="text-[#eee] text-center font-medium font-inter text-xl">
				At Mayur Vihar Phase-1, Delhi-NCR
			</p>
			<div className="mt-10 mx-20 mb-[12.5rem] flex justify-center items-center">
				<div className="rounded-lg border border-[#C8F8FF] bg-[#d9d9d9] bg-opacity-25">
					<Image src={studioHeroImage} alt="hero-image" />
				</div>
			</div>
		</div>
	);
}

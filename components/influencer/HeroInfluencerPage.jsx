import Image from "next/image";
import React from "react";
import { influencerHeroImage } from "@/public/index";
import Navbar from "../Navbar";

export default function HeroInfluencerPage() {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Navbar />
			<div className="flex flex-col justify-center items-center mx-20 my-[10rem] gap-16">
				<div className="font-syne font-bold text-[4rem] text-transparent pt-11">
					<h1 className="text-center text-transparent font-syne text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
						Exclusive Community
					</h1>
					<p className="bg-gradient-to-b from-[#D9D9D9] to-transparent text-center bg-clip-text">
						For
					</p>
					<h1 className="text-center text-transparent font-syne text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
						Influencers
					</h1>
				</div>
				<div className="">
					<Image src={influencerHeroImage} alt="mobile-view-asset" />
				</div>
			</div>
		</div>
	);
}

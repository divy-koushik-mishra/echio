import Image from "next/image";
import React from "react";
import { heroInfluencer } from "@/public/index";
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
			<div className="flex justify-center items-start mx-20 my-[10rem] gap-16">
				<div className="font-syne font-bold text-[4rem] text-transparent pt-11">
					<p className="bg-gradient-to-b from-[#D9D9D9] to-transparent bg-clip-text">
						Exclusive
					</p>
					<p className="bg-gradient-to-b from-[#D9D9D9] to-transparent bg-clip-text">
						Community just
					</p>
					<p className="bg-gradient-to-b from-[#D9D9D9] to-transparent bg-clip-text">
						for{" "}
						<span className="bg-gradient-to-r from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text">
							Influencers
						</span>
					</p>
				</div>
				<div className="">
					<Image src={heroInfluencer} alt="mobile-view-asset" />
				</div>
			</div>
		</div>
	);
}

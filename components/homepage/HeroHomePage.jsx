import React from "react";
import Image from "next/image";
import {
	circle,
	arrowRight,
	redbull,
	booyah,
	wings,
	sadar,
	qlan,
	loco,
} from "@/public/index";
import Navbar from "../Navbar";
import { Button } from "../others/Button";

export default function HeroHomePage() {
	return (
		<div
			className=""
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Navbar />
			<div>
				<h1 className="text-center text-transparent font-syne text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
					Makes You
				</h1>
				<h1 className="text-center text-transparent font-syne text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text ">
					Viral.
				</h1>
				<div className="flex justify-center items-start mb-10 max-w-[111rem]">
					<div className="flex flex-col max-w-[21.375rem] gap-8 items-center">
						<p className="text-[#eee] font-syne text-lg leading-8 mt-[3.5rem]">
							Dive into Echio’s AI-driven ecosystem and explore the intriguing
							possibilities lying with redefined influencer experience for all.
						</p>
						<div className="px-10">
							<Button
								button="default"
								className="![border-image:unset] !bg-white !text-black"
								rectangleClassName="!bg-neutral-white-lite"
								text="Get Started"
							/>
						</div>
					</div>
					<Image src={circle} alt="circle" />
				</div>
				<div className="flex flex-row justify-center items-center overflow-hidden">
					<Image src={redbull} alt="logo" />
					<Image src={booyah} alt="logo" />
					<Image src={wings} alt="logo" />
					<Image src={booyah} alt="logo" />
					<Image src={sadar} alt="logo" />
					<Image src={qlan} alt="logo" />
					<Image src={loco} alt="logo" />
				</div>
			</div>
		</div>
	);
}

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

export default function HeroHomePage() {
	return (
		<div className="">
			<h1 className="text-center text-transparent font-syne text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
				Makes You
			</h1>
			<h1 className="text-center text-transparent font-syne text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text ">
				Viral.
			</h1>
			<div className="flex justify-center items-center mb-10">
				<div className="flex flex-col max-w-[21.375rem] gap-8 items-center">
					<p className="text-[#eee] font-syne text-lg leading-8">
						Dive into Echio’s AI-driven ecosystem and explore the intriguing
						possibilities lying with redefined influencer experience for all.
					</p>
					<div className="px-10">
						<button
							className={`font-inter flex justify-center items-center bg-gradient-to-r from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] text-black text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md`}
						>
							Get Started
							<span className="">
								<Image src={arrowRight} alt="logo" />
							</span>
						</button>
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
	);
}

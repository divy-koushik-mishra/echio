import Image from "next/image";
import React from "react";
import { servicePhone } from "@/public/index";

export default function HeroServicePage() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-center text-transparent font-syne text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
				Echio For
			</h1>
			<h1 className="text-center text-transparent font-syne text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
				Service Provider
			</h1>
			<p className="text-[#eee] max-w-5xl text-center font-medium font-inter text-xl">
				Elevate your craft and expand your reach as a creative service provider
				on our platform, unlocking new opportunities for growth and recognition.
			</p>
			<div className="mt-[10rem] mx-20 mb-[12.5rem] flex justify-center items-center overflow-hidden">
				<div className="">
					<Image src={servicePhone} alt="app-image" />
				</div>
			</div>
		</div>
	);
}

import React from "react";
import Image from "next/image";
import {
	linkedinBlue,
	instagramBlue,
	quoraBlue,
	redditBlue,
	tumblerBlue,
} from "@/public/index";

export default function Testimonials() {
	return (
		<div className="bg-white text-black pt-24">
			<h1 className="text-center font-medium font-syne text-[2rem] text-[#090B0B] mb-8">
				Proudly Used by
			</h1>
			<div className="flex justify-around items-center mb-[12rem]">
				<Image src={linkedinBlue} alt="logo" />
				<Image src={instagramBlue} alt="logo" />
				<Image src={quoraBlue} alt="logo" />
				<Image src={redditBlue} alt="logo" />
				<Image src={tumblerBlue} alt="logo" />
			</div>
			<div className="flex justify-center items-center mb-[10rem]">TODO::</div>
		</div>
	);
}

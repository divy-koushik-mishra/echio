import React from "react";
import Image from "next/image";
import { echio, arrowRight } from "@/public/index";

export default function Navbar() {
	return (
		<div
			className={`flex justify-evenly items-center h-8 mx-[5rem] p-2 mt-[2rem] mb-14`}
		>
			<span className="md:px-2 px-7 py-3 mx-3">
				<Image src={echio} alt="logo" />
			</span>
			<ul className={`"hidden md:flex lg:text-[1.25rem] font-inter `}>
				<li className="p-4 hover:text-[#5AEBFF] cursor-pointer">Home</li>
				<li className="p-4 hover:text-[#5AEBFF] cursor-pointer">Brands</li>
				<li className="p-4 hover:text-[#5AEBFF] cursor-pointer">Influencers</li>
				<li className="p-4 hover:text-[#5AEBFF] cursor-pointer">Agency</li>
				<li className="p-4 hover:text-[#5AEBFF] cursor-pointer">Services</li>
				<li className="p-4 hover:text-[#5AEBFF] cursor-pointer">Team</li>
				<li className="p-4 hover:text-[#5AEBFF] cursor-pointer">Studio</li>
				<li className="p-4 hover:text-[#5AEBFF] cursor-pointer">Contact Us</li>
			</ul>
			<button
				className={`font-inter flex justify-center items-center bg-gradient-to-r from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] text-black text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md`}
			>
				Login Now
				<span className="">
					<Image src={arrowRight} alt="logo" />
				</span>
			</button>
		</div>
	);
}

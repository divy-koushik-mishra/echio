import React from "react";
import Image from "next/image";
import { arrowRight } from "@/public/index";

export default function Agency() {
	return (
		<div className="flex justify-center items-center gap-x-16 mx-20 my-[16rem]">
			<div className="flex">Graph</div>
			<div className="flex flex-start flex-col">
				<h1 className="text-transparent text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00EDFF] to-[#CBFBFF] bg-clip-text">
					Agency
				</h1>
				<p className="text-lg font-syne text-let max-w-[30rem] mb-10">
					Echio believes in Promoting partnerships, which goes on to define us
					and our community approach. We believe in building mutually beneficial
					relationships with agencies, supporting each other and delivering the
					best output.
				</p>
				<div className="flex gap-10">
					<button
						className={`font-inter flex justify-center items-center bg-gradient-to-r from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] text-black text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
					>
						Agency Login
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
	);
}

import React from "react";
import Image from "next/image";
import { studioForInfluencer, arrowRightWhite } from "@/public/index";

export default function StudioForCreators() {
	return (
		<div className="bg-white text-black">
			<div className="flex justify-center items-center gap-x-16 mx-20 my-[16rem]">
				<div className="w-[39.25rem] h-[39.25rem]">
					<Image src={studioForInfluencer} alt="content-image" />
				</div>
				<div className="flex flex-start flex-col">
					<h1 className="max-w-xl text-transparent text-[5rem] font-syne font-bold bg-gradient-to-r from-[#00c5d4] to-[#000] bg-clip-text">
						Studio for Creators
					</h1>
					<p className="text-lg font-syne text-let max-w-[30rem] mb-10">
						The perfect space for creativity: Our studio caters to both brands
						and content creators and has something for everybody, providing a
						versatile environment for collaborative success.
					</p>
					<div className="flex">
						<button
							className={`font-inter flex justify-center items-center bg-black text-white text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
						>
							Contact
							<span className="">
								<Image src={arrowRightWhite} alt="logo" />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

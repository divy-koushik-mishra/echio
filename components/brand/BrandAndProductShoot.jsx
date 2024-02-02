import React from "react";
import Image from "next/image";
import { studioone, studiotwo } from "@/public/index";

export default function BrandAndProductShoot() {
	return (
		<div className="bg-white text-black">
			<div className="mt-[6.15rem] mx-20 mb-[25rem]">
				<div className="flex flex-col justify-center items-center gap-8 mb-10">
					<h1 className="text-transparent text-[5rem] font-syne font-bold bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text">
						Brand & Product Shoot
					</h1>
					<p className="text-[1.25rem] text-[#090B0B] max-w-[50rem]">
						Explore our influencer marketing studio for unmatched creative
						excellence for your product shoots, branding and content creation
						needs.
					</p>
				</div>
				<div className="flex justify-center items-center gap-20">
					<Image
						src={studioone}
						alt="studio-image-1"
						className="w-[40rem] h-[41.75rem]"
					/>
					<Image
						src={studiotwo}
						alt="studio-image-2"
						className="w-[40rem] h-[41.75rem]"
					/>
				</div>
			</div>
		</div>
	);
}

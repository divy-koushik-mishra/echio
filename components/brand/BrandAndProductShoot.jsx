import React from "react";
import Image from "next/image";
import {
	studioone,
	studiotwo,
	influencerOne,
	influencerTwo,
	arrowRight,
	monetization,
} from "@/public/index";
import { Button } from "../others/Button";

export default function BrandAndProductShoot() {
	return (
		<div className="bg-white text-black">
			<div className="mt-20">
				<div className="flex justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={influencerOne} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<h1 className="font-syne text-[2.5rem] font-bold mb-8 max-w-[34.25rem] bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text text-transparent">
							Intelligent Campaign Planning and recommender systems
						</h1>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							working as an assistant, suggesting you the right mix of
							influencers to help you reach your goal along with tools to
							understand and analyse the possibilities, handpicking perfection
							for you.
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="w-[36.25rem] h-[36.1875rem]">
						<Image src={influencerTwo} alt="mobile-image" />
						<div className="relative left-[176px] bottom-[87px]">
							<Image src={monetization} alt="mobile-image" />
						</div>
					</div>
					<div className="flex flex-col px-10 py-20">
						<h1 className="font-syne text-[2.5rem] font-bold mb-8 max-w-[34.25rem] bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text text-transparent">
							Intelligent Campaign Planning and recommender systems
						</h1>
						<p className="text-xl font-syne font-medium max-w-[34.25rem]">
							working as an assistant, suggesting you the right mix of
							influencers to help you reach your goal along with tools to
							understand and analyse the possibilities, handpicking perfection
							for you.
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center gap-10 mb-[5.25rem] mt-[4.75rem] bg-[#090B0B] text-white p-8">
				<Button
					button="default"
					className="![border-image:unset] !bg-white !text-black w-[12.25rem] h-[3.75rem]"
					rectangleClassName="!bg-neutral-white-lite"
					text="Sign In"
				/>
				<button
					className={`font-inter flex justify-center items-center text-white border border-[#EEEEEE] text-xl font-medium rounded-[0.25rem] w-[12.25rem] py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-transparent`}
				>
					Login
				</button>
			</div>
			<div className="mt-[5.25rem] mx-20 mb-[10rem]">
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

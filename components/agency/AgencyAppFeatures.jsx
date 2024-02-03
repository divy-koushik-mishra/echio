import React from "react";
import Image from "next/image";
import { brandImage } from "@/public/index";

export default function AgencyAppFeatures() {
	return (
		<div className="">
			<h1 className="text-center text-transparent font-syne text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-10">
				App Features
			</h1>
			<div className="mb-28">
				<div className="flex justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-4xl font-syne font-normal max-w-[32.25rem]">
							Register your influencer and get access of tools to manage them
							and track their progress.
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-4xl font-syne font-normal max-w-[32.25rem]">
							Earn commissions when you influencers deliver work for brands not
							associated with you
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-4xl font-syne font-normal max-w-[32.25rem]">
							Manage your billings and financials
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-4xl font-syne font-normal text-center max-w-[32.25rem]">
							Use our influencer pool to fulfil your client’s requirement
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

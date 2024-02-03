import React from "react";
import Image from "next/image";
import { brandImage } from "@/public/index";

export default function AppFeatures() {
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
							Connect with other influencers directly for mentorship and
							collaboration
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-4xl font-syne font-normal max-w-[32.25rem]">
							Help the community to grow in their journey as a content creators
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-4xl font-syne font-normal max-w-[32.25rem]">
							Growth Consultations of your channel and understanding how it can
							be improved and to make it happen
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-4xl font-syne font-normal max-w-[32.25rem]">
							Content Solutions to have creative content ideas and hacks to
							optimize the quality of the content
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-4xl font-syne font-normal max-w-[32.25rem]">
							Make Your Business Profile and a Premium Portfolio to get brand
							deals
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-10 my-10 ml-20 mr-[6.5rem]">
					<div className="flex">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-4xl font-syne font-normal max-w-[32.25rem]">
							Access to everyday services to enable smooth content creation
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 items-center my-10 ml-[18rem] mr-[15rem]">
					<div className="">
						<Image src={brandImage} alt="brand-image" />
					</div>
					<div className=" px-10 py-20">
						<p className="text-4xl font-syne font-normal">Monetization</p>
					</div>
				</div>
			</div>
		</div>
	);
}

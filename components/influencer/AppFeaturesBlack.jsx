import React from "react";
import Image from "next/image";
import {
	profile,
	profilePointer,
	services,
	servicesPointer,
	campaigns,
	brandDeals,
} from "@/public/index";

export default function AppFeatures() {
	return (
		<div
			className=""
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<div className="mt-24 pb-28">
				<div className="flex justify-center items-center gap-14 my-10 ml-20 mr-[6.5rem]">
					<div className="w-[36.25rem] h-[36.1875rem]">
						<Image src={profile} alt="mobile-image" />
						<div className="relative left-[176px] bottom-[87px]">
							<Image src={profilePointer} alt="mobile-image" />
						</div>
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
							Make Your Business Profile and a Premium Portfolio to get brand
							deals
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-14 my-10 ml-20 mr-[6.5rem]">
					<div className="w-[36.25rem] h-[36.1875rem]">
						<Image src={services} alt="mobile-image" />
						<div className="relative left-[176px] bottom-[87px]">
							<Image src={servicesPointer} alt="mobile-image" />
						</div>
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-2xl font-syne font-medium">
							Access to everyday services to enable smooth content creation
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 items-center my-10 ml-[18rem] mr-[15rem]">
					<div className="w-[36.25rem] h-[36.1875rem]">
						<Image src={campaigns} alt="mobile-image" />
						<div className="relative left-[176px] bottom-[87px]">
							<Image src={brandDeals} alt="mobile-image" />
						</div>
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
							Monetization
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import {
	brandHero,
	agencyMonetization,
	monetizationWhite,
} from "@/public/index";

export default function HeroAgencyPage() {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<Navbar />
			<div className="flex flex-col justify-center items-center">
				<h1 className="max-w-7xl text-center text-transparent font-syne text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
					Influencer Marketing Agency
				</h1>
				<p className="text-transparent font-syne text-[2rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text">
					As
				</p>
				<h1 className="text-transparent font-syne text-[6.25rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
					Echio’s Partner
				</h1>
				<p className="text-[#eee] max-w-5xl text-center font-medium font-inter text-xl">
					Grow your agency&apos;s impact - Partner with @Echio and unlock a
					world of unparalleled growth opportunities for you, your influencers
					and your brand partners
				</p>
				<div className="mt-10 mx-20 mb-[12.5rem] flex justify-center items-center">
					<div className="w-[80rem] h-[51.25rem] rounded-lg border border-opacity-60 bg-[#d9d9d9] bg-opacity-25">
						<Image src={brandHero} alt="hero-image-brand" />
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-center text-transparent font-syne text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-10">
					App Features
				</h1>
				<div className="mb-24 pb-28">
					<div className="flex justify-center items-center gap-14 my-10 ml-20 mr-[6.5rem]">
						<div className="w-[36.25rem] h-[36.1875rem]">
							<Image src={agencyMonetization} alt="mobile-image" />
							<div className="relative left-[176px] bottom-[87px]">
								<Image src={monetizationWhite} alt="mobile-image" />
							</div>
						</div>
						<div className="flex flex-col px-10 py-20">
							<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
								Register your influencer and get access of tools to manage them
								and track their progress.
							</p>
						</div>
					</div>
					<div className="flex flex-row-reverse justify-center items-center gap-32 my-10 ml-20 mr-[6.5rem]">
						<div className="w-[36.25rem] h-[36.1875rem]">
							<Image src={agencyMonetization} alt="mobile-image" />
							<div className="relative left-[176px] bottom-[87px]">
								<Image src={monetizationWhite} alt="mobile-image" />
							</div>
						</div>
						<div className="flex flex-col px-10 py-20">
							<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
								Earn commissions when you influencers deliver work for brands
								not associated with you
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

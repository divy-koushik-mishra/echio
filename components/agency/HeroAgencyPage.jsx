import React from "react";

export default function HeroAgencyPage() {
	return (
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
				Grow your agency&apos;s impact &dash; Partner with @Echio and unlock a
				world of unparalleled growth opportunities for you, your influencers and
				your brand partners
			</p>
			<div className="mt-10 mx-20 mb-[12.5rem] flex justify-center items-center">
				<div className="w-[80rem] h-[51.25rem] rounded-lg border border-opacity-60 bg-[#d9d9d9] bg-opacity-25"></div>
			</div>
		</div>
	);
}

import React from "react";
import Image from "next/image";
import {
	appStore,
	googlePlay,
	downloadApp,
	influencertwo,
	monetization,
} from "@/public/index";

export default function ServiceApp() {
	return (
		<div className="bg-white text-black">
			<div className="mx-[5rem] mt-[9.75rem] flex flex-col justify-center items-center">
				<div className="flex flex-row-reverse justify-center items-center gap-20">
					<div className="flex flex-col">
						<h1 className="text-transparent text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00C5D4] to-[#000] bg-clip-text">
							App features
						</h1>
						<p className="text-xl font-syne mb-10">
							Get work directly from influencers with zero commission
						</p>
					</div>
					<div className="w-[34.25rem] h-[36.1875rem]">
						<Image src={influencertwo} alt="mobile-image" />
						<div className="relative left-[176px] bottom-[87px]">
							<Image src={monetization} alt="mobile-image" />
						</div>
					</div>
				</div>
			</div>
			<div className="mx-[5rem] my-[18.5rem] flex flex-col justify-center items-center">
				<div className="flex justify-center items-center gap-[8rem]">
					<div className="flex flex-col">
						<h1 className="text-transparent text-[5rem] font-syne font-bold bg-gradient-to-r from-[#00C5D4] to-[#000] bg-clip-text">
							Download App
						</h1>
						<p className="text-lg font-syne text-let max-w-[30rem] mb-10">
							Signup- join our exclusive influencer marketing app and unlock
							refined opportunities for collaboration and growth Login-log in
							now to the influencer marketing app and continue shaping your
							impactful journey.
						</p>
						<div className="flex gap-10">
							<Image src={googlePlay} alt="download-from-google-play" />
							<Image src={appStore} alt="download-from-app-store" />
						</div>
					</div>
					<div className="h-[52rem]">
						<Image src={downloadApp} alt="mobile-image" />
					</div>
				</div>
			</div>
		</div>
	);
}

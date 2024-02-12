import React from "react";
import Image from "next/image";
import { agencyMonetization, agencyLower, monetization } from "@/public/index";

export default function AgencyAppFeatures() {
	return (
		<div className="pt-24 pb-28 text-[#090B0B]">
			<div className="flex justify-center items-center gap-28 my-10 ml-20 mr-[6.5rem]">
				<div className="w-[36.25rem] h-[36.1875rem]">
					<Image src={agencyMonetization} alt="mobile-image" />
					<div className="relative left-[176px] bottom-[87px]">
						<Image src={monetization} alt="mobile-image" />
					</div>
				</div>
				<div className="flex flex-col px-10 py-20">
					<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
						Manage your billings and financials
					</p>
				</div>
			</div>
			<div className="flex flex-row-reverse justify-center items-center gap-28 my-10 ml-20 mr-[6.5rem]">
				<div className="w-[36.25rem] h-[36.1875rem]">
					<Image src={agencyLower} alt="mobile-image" />
					<div className="relative left-[176px] bottom-[87px]">
						<Image src={monetization} alt="mobile-image" />
					</div>
				</div>
				<div className="flex flex-col px-10 py-20">
					<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
						Use our influencer pool to fulfil your client’s requirement
					</p>
				</div>
			</div>
		</div>
	);
}

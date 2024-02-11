import React from "react";
import Image from "next/image";
import {
	searchPointer,
	networkWithOthersPointer,
	search,
	networkWithOthers,
} from "@/public/index";

export default function AppFeatures() {
	return (
		<div
			className=""
			style={{
				backgroundImage: `linear-gradient(360deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
			}}
		>
			<h1 className="text-center text-transparent font-syne text-[5rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-10">
				App Features
			</h1>
			<div className="mb-24 pb-28">
				<div className="flex justify-center items-center gap-14 my-10 ml-20 mr-[6.5rem]">
					<div className="w-[36.25rem] h-[36.1875rem]">
						<Image src={search} alt="mobile-image" />
						<div className="relative left-[176px] bottom-[87px]">
							<Image src={searchPointer} alt="mobile-image" />
						</div>
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
							Connect with other influencers directly for mentorship and
							collaboration
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse justify-center items-center gap-14 my-10 ml-20 mr-[6.5rem]">
					<div className="w-[36.25rem] h-[36.1875rem]">
						<Image src={networkWithOthers} alt="mobile-image" />
						<div className="relative left-[176px] bottom-[87px]">
							<Image src={networkWithOthersPointer} alt="mobile-image" />
						</div>
					</div>
					<div className="flex flex-col px-10 py-20">
						<p className="text-2xl font-syne font-medium">
							Help the community to grow in their journey as a content creators
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

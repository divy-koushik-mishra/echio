import React from "react";
import Image from "next/image";
import { chat, chatPointer, connectWithOthers } from "@/public/index";

export default function AppFeaturesWhite() {
	return (
		<div className="mt-24 pb-28 text-[#090B0B]">
			<div className="flex justify-center items-center gap-14 my-10 ml-20 mr-[6.5rem]">
				<div className="w-[36.25rem] h-[36.1875rem]">
					<Image src={chat} alt="mobile-image" />
					<div className="relative left-[176px] bottom-[87px]">
						<Image src={chatPointer} alt="mobile-image" />
					</div>
				</div>
				<div className="flex flex-col px-10 py-20">
					<p className="text-2xl font-syne font-medium max-w-[39.25rem]">
						Growth Consultations of your channel and understanding how it can be
						improved and to make it happen
					</p>
				</div>
			</div>
			<div className="flex flex-row-reverse justify-center items-center gap-24 my-10 ml-20 mr-[6.5rem]">
				<div className="w-[36.25rem] h-[36.1875rem]">
					<Image src={chat} alt="mobile-image" />
					<div className="relative left-[176px] bottom-[87px]">
						<Image src={connectWithOthers} alt="mobile-image" />
					</div>
				</div>
				<div className="flex flex-col px-5 py-20">
					<p className="text-2xl font-syne font-medium max-w-[42.25rem]">
						Content Solutions to have creative content ideas and hacks to
						optimize the quality of the content
					</p>
				</div>
			</div>
		</div>
	);
}

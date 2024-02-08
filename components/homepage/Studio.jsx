import React from "react";
import Image from "next/image";
import { studioone, studiotwo } from "@/public/index";

export default function Studio() {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
			}}
		>
			<div className="mt-[6.15rem] mx-20 mb-[6.18rem]">
				<div className="flex flex-col justify-center items-center gap-8 mb-10">
					<h1 className="text-transparent text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00EDFF] to-[#CBFBFF] bg-clip-text">
						Studio
					</h1>
					<p className="text-[1.25rem] max-w-[50rem]">
						A place for executing what&apos; possible, our studio is ready to
						meet every requirement of the content creation journey along with
						special catering to brand’s advertising requirements
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

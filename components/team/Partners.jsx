import React from "react";
import Image from "next/image";
import { GrooveNexus, Affinzy, DexoMedia } from "@/public/index";

export default function Partners() {
	return (
		<div className="bg-white text-black">
			<div className="flex flex-col justify-center items-center h-screen">
				<h1 className="text-center text-transparent font-syne text-[8.125rem] font-bold bg-gradient-to-r from-[#00C5D4] to-[#000000] bg-clip-text mb-6">
					Our Partners
				</h1>
				<p className="text-center font-medium font-inter text-xl">
					People and companies who are partner with us
				</p>
				<div className="flex justify-center items-center gap-10">
					<Image src={GrooveNexus} alt="partners-logo" />
					<Image src={Affinzy} alt="partners-logo" />
					<Image src={DexoMedia} alt="partners-logo" />
				</div>
			</div>
		</div>
	);
}

import React from "react";
import Image from "next/image";
import { agencyPage } from "@/public/index";
import { Button } from "../others/Button";

export default function Agency() {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(180deg, #000 0%, #252525 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
			}}
		>
			<div className="flex justify-center items-center gap-16 mx-20 my-[16rem]">
				<div className="flex justify-center items-center overflow-hidden">
					<Image src={agencyPage} alt="graph" className="w-4/6 h-[90%]" />
				</div>
				<div className="flex flex-start flex-col">
					<h1 className="text-transparent text-[5rem] font-syne font-bold bg-gradient-to-b from-[#00EDFF] to-[#CBFBFF] bg-clip-text">
						Agency
					</h1>
					<p className="text-lg font-syne text-let max-w-[40rem] mb-10">
						Echio believes in Promoting partnerships, which goes on to define us
						and our community approach. We believe in building mutually
						beneficial relationships with agencies, supporting each other and
						delivering the best output.
					</p>
					<div className="flex gap-10">
						<Button
							button="default"
							className="![border-image:unset] !bg-white !text-black"
							rectangleClassName="!bg-neutral-white-lite"
							text="Agency Login"
						/>
						<button
							className={`font-inter flex justify-center items-center text-white border border-[#EEEEEE] text-xl font-medium rounded-[0.25rem] px-6 py-3.5 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] hover:border-transparent`}
						>
							More Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

import Image from "next/image";
import React from "react";
import {
	HimanshuMishra,
	NishantMishra,
	AkhilChoudhary,
	DhruvSapra,
	KomaliAvadhani,
	rightArrow,
} from "@/public/index";

export default function OurInvestor() {
	const cardDetails = [
		{
			id: 0,
			image: HimanshuMishra,
			heading: "Himanshu Mishra",
			position: "Founder FORETHOUGHT INTEGRATED INFOTECH PRIVATE LIMITED",
		},
		{
			id: 2,
			image: NishantMishra,
			heading: "Nishant Mishra",
			position: "Founder, The Higher Pitch Digital Consulting Private Limited",
		},
		{
			id: 3,
			image: AkhilChoudhary,
			heading: "Akhil Choudhary",
			position: "Founder and Chairman, Binary Semantics Limited.",
		},
		{
			id: 4,
			image: DhruvSapra,
			heading: "Dhruv Sapra",
			position: "Founder, Aurora Digital Media ",
		},
		{
			id: 5,
			image: KomaliAvadhani,
			heading: "Komali Avadhani",
			position: "Angel Investor",
		},
	];

	return (
		<div className="">
			<h1 className="text-center text-transparent font-syne text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
				Our Investors
			</h1>
			<p className="text-[#eee] text-center font-medium font-inter text-xl mb-10">
				People who have invested in our company
			</p>
			<div className="mx-20 mb-24 mt-8">
				{/* top 3 */}
				<div className="mx-20 my-10 flex justify-center gap-10 items-center">
					{cardDetails.slice(0, 3).map((item) => (
						<div
							key={item.id}
							className="max-w-sm hover:border hover:border-gray-200 rounded-lg shadow p-8"
						>
							<div className="flex justify-center items-center">
								<Image src={item.image} alt="random" />
							</div>
							<div className="p-5 font-syne text-center">
								<h5 className="mb-2 text-2xl font-bold">{item.heading}</h5>
								<p className="mb-5 font-normal">{item.position}</p>
							</div>
						</div>
					))}
				</div>
				{/* bottom 2 */}
				<div className="mx-20 my-10 flex justify-center gap-10 items-center">
					{cardDetails.slice(3, 5).map((item) => (
						<div
							key={item.id}
							className="max-w-sm hover:border hover:border-gray-200 rounded-lg shadow p-8"
						>
							<div className="flex justify-center items-center">
								<Image src={item.image} alt="random" />
							</div>
							<div className="p-5 font-syne text-center">
								<h5 className="mb-2 text-2xl font-bold">{item.heading}</h5>
								<p className="mb-5 font-normal">{item.position}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

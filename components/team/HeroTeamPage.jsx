"use client";
import React from "react";
import Image from "next/image";
import {
	himanshuOne,
	himanshuTwo,
	himanshuThree,
	himanshuFour,
	rightArrow,
} from "@/public/index";

export default function HeroTeamPage() {
	const cardDetails = [
		{
			id: 0,
			image: himanshuOne,
		},
		{
			id: 2,
			image: himanshuTwo,
		},
		{
			id: 3,
			image: himanshuThree,
		},
		{
			id: 4,
			image: himanshuFour,
		},
	];

	return (
		<div className="mb-[7.5rem]">
			<h1 className="text-center text-transparent font-syne text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6">
				Team
			</h1>
			<p className="text-[#eee] text-center font-medium font-inter text-xl mb-10">
				Meet Echio’s Expert Team Memebers
			</p>
			<div className="mx-20 my-10 flex justify-center gap-10 items-center">
				{cardDetails.map((item) => (
					<div
						key={item.id}
						className="max-w-sm bg-[#3E3E3E] hover:border hover:border-gray-200 rounded-lg shadow"
					>
						<Image src={item.image} alt="random" className="overflow-y-clip" />
						<div className="p-5">
							<h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
								Himanshu Singh
							</h5>
							<p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
								Founder And CEO
							</p>
							<span className="flex justify-end">
								<Image src={rightArrow} alt="arrow" />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

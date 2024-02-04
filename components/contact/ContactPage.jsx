import Image from "next/image";
import React from "react";
import { call, mail, location } from "@/public/index";
import Form from "./Form";

export default function ContactPage() {
	return (
		<div className="">
			<div className="ml-20 mt-14 mb-6">
				<h1 className="text-transparent font-syne text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text">
					Contact Us
				</h1>
				<p className="text-[#eee] font-medium font-inter text-xl max-w-xl mb-10">
					Reach out to us via the contact below to supercharge your influence
					with us.
				</p>
				<div className="flex justify-start items-center gap-8 font-inter">
					<div className="flex justify-center items-center gap-2">
						<Image src={call} alt="phone-image" />
						<p>Phone Number: +91-9667525010</p>
					</div>
					<div className="flex justify-center items-center gap-2">
						<Image src={mail} alt="phone-image" />
						<p>Email: support@echio.in</p>
					</div>
					<div className="flex justify-center items-center gap-2">
						<Image src={location} alt="phone-image" />
						<p>
							Address: 303, Tower B, Logix Technova, Sector 132, Noida-201301
						</p>
					</div>
				</div>
			</div>
			<div className="mt-10 mb-[7.5rem]">
				<Form />
			</div>
		</div>
	);
}

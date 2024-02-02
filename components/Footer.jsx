import React from "react";
import Image from "next/image";
import {
	footerLogo,
	facebook,
	instagram,
	linkedin,
	twitter,
	yt,
} from "@/public/index";

export default function Footer() {
	return (
		<div className="mx-auto py-16 px-4 flex gap-8 text-gray-300 bg-white">
			<div className="flex flex-row justify-between items-center">
				<Image src={footerLogo} alt="footer-logo" />
				<button>Stay in Touch</button>
			</div>
			{/* <div className="grid grid-flow-col">
				<h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
				<p className="py-4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
					ullam iste repellat consequatur libero reiciendis, blanditiis
					accusantium.
				</p>
				<div className="flex justify-between md:w-[75%] my-6">
					<Image src={facebook} alt="social-icon" />
					<Image src={instagram} alt="social-icon" />
					<Image src={linkedin} alt="social-icon" />
					<Image src={twitter} alt="social-icon" />
					<Image src={yt} alt="social-icon" />
				</div>
			</div>
			<div className="lg:col-span-2 flex justify-between mt-6">
				<div>
					<h6 className="font-medium text-gray-400">Solutions</h6>
					<ul>
						<li className="py-2 text-sm">Analytics</li>
						<li className="py-2 text-sm">Marketing</li>
						<li className="py-2 text-sm">Commerce</li>
						<li className="py-2 text-sm">Insights</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Support</h6>
					<ul>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Documentation</li>
						<li className="py-2 text-sm">Guides</li>
						<li className="py-2 text-sm">API Status</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Company</h6>
					<ul>
						<li className="py-2 text-sm">About</li>
						<li className="py-2 text-sm">Blog</li>
						<li className="py-2 text-sm">Jobs</li>
						<li className="py-2 text-sm">Press</li>
						<li className="py-2 text-sm">Careers</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Legal</h6>
					<ul>
						<li className="py-2 text-sm">Claim</li>
						<li className="py-2 text-sm">Policy</li>
						<li className="py-2 text-sm">Terms</li>
					</ul>
				</div>
			</div> */}
		</div>
	);
}

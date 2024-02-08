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
	const currentYear = new Date().getFullYear();
	return (
		<>
			<style>
				{`
    .border-gradient {
      border-image: linear-gradient(to right, #00C5D4, #000);
      border-image-slice: 1;
    }

    .text-gradient {
      background: linear-gradient(to right, #00C5D4, #000);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    .button-gradient {
      transition: background 300ms ease-in-out;
    }

    .button-gradient:hover {
      background: linear-gradient(to bottom, #00D4F1, #00CFEB, #00B6CF);
      color: black; /* Change text color to black on hover */
      border: none; /* Hide border on hover */
    }
  `}
			</style>
			<div className="text-black bg-white">
				<div className="mx-20 mt-[8.75rem] mb-20 px-20 py-12">
					<div className="flex flex-row justify-between items-center mb-16">
						<Image
							src={footerLogo}
							alt="footer-logo"
							className="w-[18rem] h-16"
						/>
						<button
							className={`font-inter flex justify-center items-center border text-xl text-gradient border-gradient font-medium rounded-[0.25rem] px-6 py-3.5 button-gradient`}
						>
							Stay in Touch
						</button>
					</div>
					<div className="flex justify-between items-start gap-14 mb-14">
						<div className="max-w-[20rem]">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Disclaimer
							</h1>
							<p className="text-[#323232] text-base text-left">
								Echiofy Private Limited is an unlisted private company
								incorporated on 25 March 2022. It is classified as a private
								limited company and is located in Delhi. The Corporate
								Identification Number (CIN) of Echiofy Private Limited is
								U72900DL2022PTC395579.
								<br />
								<br />
								The registered office of Echiofy Private Limited is at 303,
								Tower B, Logix Technova, Sector 132, Noida- 201301.
								<br />
							</p>
						</div>
						<div className="">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Company
							</h1>
							<p className="text-[#323232] text-xl">Blogs</p>
							<p className="text-[#323232] text-xl">Team</p>
							<p className="text-[#323232] text-xl">About</p>
							<p className="text-[#323232] text-xl">Partner With Us</p>
							<p className="text-[#323232] text-xl">Our Case Study</p>
							<p className="text-[#323232] text-xl">Our Journey</p>
						</div>
						<div className="">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Features
							</h1>
							<p className="text-[#323232] text-xl">Brands</p>
							<p className="text-[#323232] text-xl">Influencers</p>
							<p className="text-[#323232] text-xl">Studio</p>
							<p className="text-[#323232] text-xl">Agency</p>
							<p className="text-[#323232] text-xl">Our Services</p>
						</div>
						<div className="">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Policy
							</h1>
							<p className="text-[#323232] text-xl">Privacy Policy</p>
							<p className="text-[#323232] text-xl">Terms & Conditions</p>
						</div>
						<div className="">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Contact Us
							</h1>
							<p className="text-[#323232] text-xl">Call Us</p>
							<p className="text-[#323232] text-xl">Email Us</p>
							<p className="text-[#323232] text-xl">Bangalore, India</p>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="flex justify-center items-center">
							<p className="text-center">
								201301. &copy; Copyright {currentYear} Echiofy Private Limited.
								All Rights Reserved.
							</p>
						</div>
						<div className="flex flex-col">
							<p className="mb-3">Follow Us On</p>
							<div className="flex gap-x-6">
								<Image src={facebook} alt="social-icon" />
								<Image src={instagram} alt="social-icon" />
								<Image src={linkedin} alt="social-icon" />
								<Image src={twitter} alt="social-icon" />
								<Image src={yt} alt="social-icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

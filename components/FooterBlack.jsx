import React from "react";
import Image from "next/image";
import {
	footerBlackLogo,
	facebook,
	instagram,
	linkedin,
	twitter,
	yt,
} from "@/public/index";

export default function FooterBlack() {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<style>
				{`
    .border-gradient {
      border-image: linear-gradient(to right, #C8F8FF, #19C2D9);
      border-image-slice: 1;
    }

    .text-gradient {
			background:linear-gradient(to right, #C8F8FF, #19C2D9);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  `}
			</style>
			<div className="text-white bg-black">
				<div className="mx-20 mt-[8.75rem] mb-20 px-20 py-12">
					<div className="flex flex-row justify-between items-center mb-16">
						<Image src={footerBlackLogo} alt="footer-logo" />
						<button
							className={`font-inter flex justify-center items-center border text-xl text-gradient border-gradient font-medium rounded-[0.25rem] px-6 py-4 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md `}
						>
							Stay in Touch
						</button>
					</div>
					<div className="flex justify-between items-start gap-14 mb-14">
						<div className="max-w-[20rem] text-[#EEE]">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Disclaimer
							</h1>
							<p className="text-base text-left">
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
						<div className="text-[#eee] text-xl">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Company
							</h1>
							<p>Blogs</p>
							<p>Team</p>
							<p>About</p>
							<p>Partner With Us</p>
							<p>Our Case Study</p>
							<p>Our Journey</p>
						</div>
						<div className="text-[#eee] text-xl">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Features
							</h1>
							<p>Brands</p>
							<p>Influencers</p>
							<p>Studio</p>
							<p>Agency</p>
							<p>Our Services</p>
						</div>
						<div className="text-[#eee] text-xl">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Policy
							</h1>
							<p>Privacy Policy</p>
							<p>Terms & Conditions</p>
						</div>
						<div className="text-[#eee] text-xl">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Contact Us
							</h1>
							<p>Call Us</p>
							<p>Email Us</p>
							<p>Bangalore, India</p>
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
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
	linkedinBlue,
	instagramBlue,
	quoraBlue,
	redditBlue,
	tumblerBlue,
	grayBorderCubeTestimonials,
	solidCubeTestimonials,
	semiCircleTestimonials,
	angelInvestor,
	founder,
	echioLogoFooter,
	facebook,
	instagram,
	linkedin,
	twitter,
	yt,
} from "@/public/index";

const AngelInvestor = () => {
	return (
		<div className="pt-24 mb-[7.5rem]">
			<h1 className="text-center font-medium font-syne text-[2rem] text-white mb-8">
				Proudly Used by
			</h1>
			<div className="flex justify-around items-center mb-[2rem] mx-[28rem]">
				<Image src={linkedinBlue} alt="logo" />
				<Image src={instagramBlue} alt="logo" />
				<Image src={quoraBlue} alt="logo" />
				<Image src={redditBlue} alt="logo" />
				<Image src={tumblerBlue} alt="logo" />
			</div>
			<div className="flex justify-between items-center mx-[28rem]">
				<Image src={solidCubeTestimonials} alt="random" className="mt-20" />
				<Image src={grayBorderCubeTestimonials} alt="random" className="mb-8" />
			</div>
			<div className="flex justify-around items-center mb-[10rem]">
				<div className="flex-grow border-t border-[#090B0B]" />
				<div className="p-16 max-w-[52rem] text-center font-syne text-2xl">
					<span className="text-[5.75rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent">
						&ldquo;
					</span>
					Echio has been instrumental in helping us find influencers who
					authentically connect with our brand, resulting in a significant boost
					in product visibility and sales.{""}
					<span className="align-text-bottom text-[5.75rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent">
						&rdquo;
					</span>
				</div>
				<div className="flex-grow border-t border-[#090B0B]" />
				<div className="relative top-[153px] right-[372px] overflow-x-hidden">
					<Image src={semiCircleTestimonials} alt="random" />
				</div>
			</div>
			<div className="flex justify-center items-center gap-8">
				<div className="">
					<Image src={angelInvestor} alt="investor-image" />
				</div>
				<div className="inline-block text-center">
					<h1 className="font-inter font-bold text-2xl text-white">John Doe</h1>
					<p className="font-inter text-lg text-white">Angel Investor</p>
				</div>
			</div>
		</div>
	);
};

const Founder = () => {
	return (
		<div className="pt-24 mb-[7.5rem]">
			<h1 className="text-center font-medium font-syne text-[2rem] text-white mb-8">
				Proudly Used by
			</h1>
			<div className="flex justify-around items-center mb-[2rem] mx-[28rem]">
				<Image src={linkedinBlue} alt="logo" />
				<Image src={instagramBlue} alt="logo" />
				<Image src={quoraBlue} alt="logo" />
				<Image src={redditBlue} alt="logo" />
				<Image src={tumblerBlue} alt="logo" />
			</div>
			<div className="flex justify-between items-center mx-[28rem]">
				<Image src={solidCubeTestimonials} alt="random" className="mt-20" />
				<Image src={grayBorderCubeTestimonials} alt="random" className="mb-8" />
			</div>
			<div className="flex justify-around items-center mb-[10rem]">
				<div className="flex-grow border-t border-[#090B0B]" />
				<div className="p-16 max-w-[52rem] text-center font-syne text-2xl">
					<span className="text-[5.75rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent">
						&ldquo;
					</span>
					Echio&apos;s dedication to finding influencers who align with our
					brand message has resulted in a more engaged audience and increased
					brand loyalty.
					<span className="align-text-bottom text-[5.75rem] bg-gradient-to-b from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] bg-clip-text text-transparent">
						&rdquo;
					</span>
				</div>
				<div className="flex-grow border-t border-[#090B0B]" />
				<div className="relative top-[153px] right-[372px] overflow-x-hidden">
					<Image src={semiCircleTestimonials} alt="random" />
				</div>
			</div>
			<div className="flex justify-center items-center gap-8">
				<div className="">
					<Image src={founder} alt="founder-image" />
				</div>
				<div className="inline-block text-center">
					<h1 className="font-inter font-bold text-2xl text-white">Antonio</h1>
					<p className="font-inter text-lg text-white">Ceo - Founder</p>
				</div>
			</div>
		</div>
	);
};

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<style>
				{`
    .border-gradient {
      border-image: linear-gradient(to top, #C8F8FF, #19C2D9);
      border-image-slice: 1;
    }

    .text-gradient {
      background: linear-gradient(to top, #C8F8FF, #19C2D9);
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
			<div className="text-white">
				<div className="mx-20 mt-[8.75rem] mb-20 px-20 py-12">
					<div className="flex flex-row justify-between items-center mb-16">
						<Image src={echioLogoFooter} alt="footer-logo" className="" />
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
						<div className="">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Company
							</h1>
							<p className="text-xl">Blogs</p>
							<p className="text-xl">Team</p>
							<p className="text-xl">About</p>
							<p className="text-xl">Partner With Us</p>
							<p className="text-xl">Our Case Study</p>
							<p className="text-xl">Our Journey</p>
						</div>
						<div className="">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Features
							</h1>
							<p className="text-xl">Brands</p>
							<p className="text-xl">Influencers</p>
							<p className="text-xl">Studio</p>
							<p className="text-xl">Agency</p>
							<p className="text-xl">Our Services</p>
						</div>
						<div className="">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Policy
							</h1>
							<p className="text-xl">Privacy Policy</p>
							<p className="text-xl">Terms & Conditions</p>
						</div>
						<div className="">
							<h1 className="font-syne text-4xl font-medium mb-[1.5rem]">
								Contact Us
							</h1>
							<p className="text-xl">Call Us</p>
							<p className="text-xl">Email Us</p>
							<p className="text-xl">Bangalore, India</p>
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
};

export default function TestimonailsFooterBlack() {
	const [showAngelInvestor, setShowAngelInvestor] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setShowAngelInvestor((prev) => !prev);
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div
			className="transition-opacity duration-500 ease-in-out"
			style={{
				backgroundImage: `linear-gradient(180deg, #252525 0%, #000 100%)`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
			}}
		>
			{showAngelInvestor ? <AngelInvestor /> : <Founder />}
			{<Footer />}
		</div>
	);
}

import React from "react";

export default function Form() {
	return (
		<form className="flex flex-col mx-[20rem]">
			<div className="">
				<div className="mb-6">
					<p className="font-inter text-lg mb-6">You Are A</p>
					<input
						type="text"
						className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md"
					/>
				</div>
				{/* first and last name */}
				<div className="flex items-center mb-6 gap-8">
					<div className="w-full">
						<p className="font-inter text-lg mb-6">First Name</p>
						<input
							type="text"
							className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md"
						/>
					</div>
					<div className="w-full">
						<p className="font-inter text-lg mb-6">Last Name</p>
						<input
							type="text"
							className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md"
						/>
					</div>
				</div>
				{/* email */}
				<div className="mb-6">
					<p className="font-inter text-lg mb-6">Email Address</p>
					<input
						type="email"
						className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md"
					/>
				</div>
				{/* Phone */}
				<div className="mb-6">
					<p className="font-inter text-lg mb-6">Phone Number</p>
					<input
						type="number"
						className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md"
					/>
				</div>
				{/* whatcha looking for, eh? */}
				<div className="mb-8">
					<p className="font-inter text-lg mb-6">
						What Service You Are Looking For?
					</p>
					<input
						type="text"
						className="w-full h-[3.25rem] bg-[#292929] border border-[#333333] rounded-md"
					/>
				</div>
				<button className="font-inter w-full flex justify-center items-center bg-gradient-to-r from-[#00D4F1] via-[#00CFEB] to-[#00B6CF] text-black text-xl font-medium rounded-[0.25rem] py-[0.6875rem] pr-4 pl-6 transition duration-300 ease-in-out hover:shadow-top-md hover:shadow-bottom-md">
					Send Message
				</button>
			</div>
		</form>
	);
}

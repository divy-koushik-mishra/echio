import FooterBlack from "@/components/FooterBlack";
import Navbar from "@/components/Navbar";
import BrandAndProductShoot from "@/components/brand/BrandAndProductShoot";
import HeroBrandPage from "@/components/brand/HeroBrandPage";
import TopFeatures from "@/components/brand/TopFeatures";
import UsedBy from "@/components/Testimonials";
import React from "react";

export default function Brand() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			{/* <Navbar /> */}
			<HeroBrandPage />
			{/* <TopFeatures /> */}
			<BrandAndProductShoot />
			<UsedBy />
			<FooterBlack />
		</main>
	);
}

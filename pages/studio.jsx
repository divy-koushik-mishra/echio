import FooterBlack from "@/components/FooterBlack";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import HeroStudioPage from "@/components/studio/HeroStudioPage";
import ServicesWeOffer from "@/components/studio/ServicesWeOffer";
import StudioForCreators from "@/components/studio/StudioForCreators";
import React from "react";

export default function studio() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			<Navbar />
			<HeroStudioPage />
			<ServicesWeOffer />
			<StudioForCreators />
			<Testimonials />
			<FooterBlack />
		</main>
	);
}

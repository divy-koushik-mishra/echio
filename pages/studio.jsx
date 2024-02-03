import Navbar from "@/components/Navbar";
import HeroStudioPage from "@/components/studio/HeroStudioPage";
import ServicesWeOffer from "@/components/studio/ServicesWeOffer";
import React from "react";

export default function studio() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			<Navbar />
			<HeroStudioPage />
			<ServicesWeOffer />
		</main>
	);
}

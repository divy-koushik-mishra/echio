import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import AgencyAppFeatures from "@/components/agency/AgencyAppFeatures";
import HeroAgencyPage from "@/components/agency/HeroAgencyPage";
import React from "react";

export default function agency() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			<Navbar />
			<HeroAgencyPage />
			<AgencyAppFeatures />
			<Testimonials />
			<Footer />
		</main>
	);
}

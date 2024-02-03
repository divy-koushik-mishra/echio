import Navbar from "@/components/Navbar";
import AgencyAppFeatures from "@/components/agency/AgencyAppFeatures";
import HeroAgencyPage from "@/components/agency/HeroAgencyPage";
import React from "react";

export default function agency() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			<Navbar />
			<HeroAgencyPage />
			<AgencyAppFeatures />
		</main>
	);
}

import Navbar from "@/components/Navbar";
import HeroTeamPage from "@/components/team/HeroTeamPage";
import React from "react";

export default function team() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			<Navbar />
			<HeroTeamPage />
		</main>
	);
}

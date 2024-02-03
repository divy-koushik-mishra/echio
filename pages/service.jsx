import Navbar from "@/components/Navbar";
import HeroServicePage from "@/components/service/HeroServicePage";
import React from "react";

export default function service() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			<Navbar />
			<HeroServicePage />
		</main>
	);
}

import FooterBlack from "@/components/FooterBlack";
import Navbar from "@/components/Navbar";
import TestimonialsBlack from "@/components/TestimonialsBlack";
import HeroServicePage from "@/components/service/HeroServicePage";
import ServiceApp from "@/components/service/ServiceApp";
import React from "react";

export default function service() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			<Navbar />
			<HeroServicePage />
			<ServiceApp />
			<TestimonialsBlack />
			<FooterBlack />
		</main>
	);
}

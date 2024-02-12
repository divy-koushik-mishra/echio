import FooterBlack from "@/components/FooterBlack";
import FooterBlackInverted from "@/components/FooterBlackInverted";
import Navbar from "@/components/Navbar";
import TestimonialsBottomToTop from "@/components/TestimonialsBottomToTop";
import TestimonialsBlack from "@/components/TestimonialsTopToBottom";
import HeroServicePage from "@/components/service/HeroServicePage";
import ServiceApp from "@/components/service/ServiceApp";
import React from "react";

export default function service() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			{/* <Navbar /> */}
			<HeroServicePage />
			<ServiceApp />
			<TestimonialsBottomToTop />
			<FooterBlackInverted />
		</main>
	);
}

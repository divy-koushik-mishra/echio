import FooterBlack from "@/components/FooterBlack";
import Navbar from "@/components/Navbar";
import AppFeatures from "@/components/influencer/AppFeatures";
import DownloadApp from "@/components/influencer/DownloadApp";
import HeroInfluencerPage from "@/components/influencer/HeroInfluencerPage";
import StudioForInfluencer from "@/components/influencer/StudioForInfluencer";
import UsedByInfluencer from "@/components/TestimonialsTopToBottom";
import React from "react";

export default function influencer() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			{/* <Navbar /> */}
			<HeroInfluencerPage />
			<AppFeatures />
			<DownloadApp />
			<StudioForInfluencer />
			<UsedByInfluencer />
			<FooterBlack />
		</main>
	);
}

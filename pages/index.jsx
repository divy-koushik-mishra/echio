import Navbar from "@/components/Navbar";
import HeroHomePage from "@/components/homepage/HeroHomePage";
import Brand from "./brand";
import Influencers from "@/components/homepage/Influencers";
import Studio from "@/components/homepage/Studio";
import Agency from "@/components/homepage/Agency";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			<Navbar />
			<HeroHomePage />
			<Brand />
			<Influencers />
			<Studio />
			<Agency />
			<Footer />
		</main>
	);
}

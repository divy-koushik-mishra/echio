import Brand from "@/components/homepage/Brand";
import Footer from "@/components/Footer";
import HeroHomePage from "@/components/homepage/HeroHomePage";
import Influencers from "@/components/homepage/Influencers";
import Navbar from "@/components/Navbar";
import Studio from "@/components/homepage/Studio";
import Agency from "@/components/homepage/Agency";

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

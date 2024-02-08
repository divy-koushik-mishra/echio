import Navbar from "@/components/Navbar";
import HeroHomePage from "@/components/homepage/HeroHomePage";
import Influencers from "@/components/homepage/Influencers";
import Studio from "@/components/homepage/Studio";
import Agency from "@/components/homepage/Agency";
import Footer from "@/components/Footer";
import BrandComponent from "@/components/homepage/BrandComponent";

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col`}>
			{/* <div
				className=""
				style={{
					backgroundImage: `linear-gradient(180deg, #1E1E1E 0%, #242424 100%)`,
					backgroundSize: "cover",
					// backgroundPosition: "top",
					boxShadow: "inset 0 0 10px 10px rgba(0, 0, 0, 0.5)",
				}}
			>
				<Navbar />
			</div> */}
			<HeroHomePage />
			<BrandComponent />
			<Influencers />
			<Studio />
			<Agency />
			<Footer />
		</main>
	);
}

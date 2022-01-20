import HomePage from "../components/Home";
import About from "../components/About";
import News from "../components/News";
import { Gallery } from "../components/Gallery";
import { Videos } from "../components/Videos";
import { Calender } from "../components/Calendar";
import { Bulletin } from "../components/Bulletin";
import { Footer } from "../components/Footer";

export default function Home() {
	return (
		<div>
			<HomePage />
			<About />
			<Gallery />
			<News />
			<Videos />
			<Calender />
			<Bulletin />
			<Footer />
		</div>
	);
}

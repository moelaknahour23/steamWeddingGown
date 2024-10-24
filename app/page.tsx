import Banner from './components/Home/index';
import Services from './components/Services/index';
import About from './components/About/index';
import Pricing from './components/Pricing/index';

export default function Home() {
	return (
		<main>
			<Banner />
			<About />
			<Services />
			<Pricing />
			{/* <Expert /> */}
			{/* <Gallery /> */}
		</main>
	);
}

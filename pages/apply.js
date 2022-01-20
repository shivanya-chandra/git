import { Navbar } from "../components/navbar";
import ApplyCard from "../components/ApplyCard";
import { Footer } from "../components/Footer";

export default function Apply() {
	return (
		<div className="apply">
			<Navbar />
			<div className="container">
				<h1 className="heading">Apply</h1>
				<div className="apply__cards">
					<ApplyCard text="Admissions" />
					<ApplyCard text="Fees" />
					<ApplyCard text="Courses" />
					<ApplyCard text="Housing" />
				</div>
			</div>
			<Footer />
		</div>
	);
}

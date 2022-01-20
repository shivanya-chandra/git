import React from "react";
import { Navbar } from "./navbar";

function HomePage() {
	return (
		<div className="main-thing">
			<Navbar />
			<div className="home__main">
				<div className="home__main-text">
					<h1>
						Yale School of <br /> <span className="special-text">Art</span>
					</h1>
				</div>
				<div className="home__main-subtext">
					Yale School of Art 1156 Chapel Street, <br />
					POB 208339 New Haven, <br />
					Connecticut, 06520-8339
				</div>
			</div>
		</div>
	);
}

export default HomePage;

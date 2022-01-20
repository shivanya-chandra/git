import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="navbar__main">
			<div className="navbar__logo">
				<Link href="">
					<a>
						<Image
							className="navbar__image"
							src="https://media.discordapp.net/attachments/780471839193432104/933804489230667797/Yale_School_of_Art.png"
							alt=""
							width={50}
							height={60}
						/>
					</a>
				</Link>
			</div>
			<div className="navbar__contents">
				<Link href="/">
					<a>
						<span className="content">Home</span>
					</a>
				</Link>
				<Link href="#">
					<a>
						<span className="content">About</span>
					</a>
				</Link>
				<Link href="/apply">
					<a>
						<span className="content">Apply</span>
					</a>
				</Link>
				<Link href="#">
					<a>
						<span className="content">News</span>
					</a>
				</Link>
				<Link href="#">
					<a>
						<span className="content">Exhibit</span>
					</a>
				</Link>
				<Link href="/contact">
					<a>
						<span className="content">Events</span>
					</a>
				</Link>
				<Link href="#">
					<a>
						<span className="content">Publications</span>
					</a>
				</Link>
				<Link href="#">
					<a>
						<span className="content">+</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

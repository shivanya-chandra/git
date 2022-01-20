import React from "react";
import data from "../data/bulletin.json";

export const Bulletin = () => {
	return (
		<div className="bulletin__main">
			<div className="bulletin__main-heading">Bulletin Board</div>
			<div className="bulletin__main-container">
				{data.map((d) => {
					const { heading, content } = d;
					return (
						<div className="bulletin-card">
							<div className="card-heading">{heading}</div>
							<div className="card-content">{content}</div>
							<div className="more-info">Learn more</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

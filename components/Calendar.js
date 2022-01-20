import React from "react";
import data from "../data/calendar.json";

export const Calender = () => {
	return (
		<div className="calendar__main">
			<div className="calendar__main-heading">Calendar</div>
			{data.map((d) => {
				const { img, title, para } = d;
				return (
					<div className="calendar__main-card">
						<div className="card-img">
							<img src={img} alt="" />
						</div>
						<div className="card-content">
							<div className="card-title">{title}</div>
							<div className="card-para">{para}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

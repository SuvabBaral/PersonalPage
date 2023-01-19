import React from "react";
import "./style.css";

export default function AchievementCard({ description, icon }) {
	const Icon = icon;
	return (
		<div className="achievement-card-container">
			<div className="achievement-card-body">
				<div className="achievement-card-icon">
					<Icon className="achievement-card-icon-medal"/>
				</div>
				<div className="achievement-card-description">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

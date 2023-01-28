import React from "react";
import "./style.css";

export default function TravelPops({ thumbnailImage, text}) {
	return (
		<div className="travel-pops-container">
			<div className="travel-pops-image">
					<img src={thumbnailImage} alt="travel-destination" />
			</div>
			<div className="travel-pops-text">
				{text}
			</div>
		</div>
	)
}

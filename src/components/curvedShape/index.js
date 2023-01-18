import React from "react";
import "./style.css";

export default function CurvedShape() {
	return (
		<div className="curved-shape-container">
			<div className="curved-shape-parent">
				<img src={require("../../assets/pictures/curvedShape.png")}></img>
			</div>
		</div>
	)
}

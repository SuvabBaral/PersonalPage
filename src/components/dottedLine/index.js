import React from "react";
import "./style.css";

export default function DottedLine() {
	return (
		<div className="dotted-line-container">
			<div className="dotted-line-parent">
				<img src={require("../../assets/pictures/dottedLine.png")}></img>
			</div>
		</div>
	)
}

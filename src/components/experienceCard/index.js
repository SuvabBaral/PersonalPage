import React from "react";
import "./style.css";
import CurvedShape from "../curvedShape";

export default function ExperienceCard({ title, image, body, imageAlternateTxt, companyUrl }) {
	const workingSections = body.map((item) => <li>{item}</li>)

	return (
		<div className="card-container">
			<div className="card-image-container">
				<img src={require(`../../assets/pictures/${image}.png`)} alt={imageAlternateTxt} />
			</div>
			<div className="card-body-container">
				<div className="card-image-curved-shape">
					<CurvedShape/>
				</div>
				<div className="card-description">
					{ workingSections }
				</div>
			</div>
			<div className="card-link">
				<a href={`https://${companyUrl}`}><h3>{companyUrl}</h3></a>
			</div>

		</div>
	)
}

import React from "react";
import "./style.css";
import CurvedShape from "../curvedShape";

export default function ExperienceCard({ title, image, body, imageAlternateTxt, companyUrl, position, tenure }) {
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
				<div >
					<h3 className="card-title">{position}</h3>
					<h3 className="card-title">{tenure}</h3>
				</div>
				<div className="card-description">
					{ workingSections }
				</div>
			</div>
			<div className="card-link">
				<a href={`https://${companyUrl}`} target="_blank" rel="noreferrer"><h3>{companyUrl}</h3></a>
			</div>

		</div>
	)
}

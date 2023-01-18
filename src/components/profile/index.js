import React from "react";
import "./style.css";
import Home from "../home";
import DottedLine from "../dottedLine";
import ExperienceCard from "../experienceCard";

const rentlyExperience = [
	'Microservices | Serverless development.',
	'Data processing and analytics from IoT devices.',
	'BLE Library for smart devices.',
	'AWS Lambda| Cognito | DynamoDB | EC2 | S3 | SQS.',
];
const virtusaExperience = [
	'Angular.js training and development.',
	'Remote error logging library for front-end applications.',
	'2 months internship program',
];

export default function Profile() {
	return (
		<div className="profile-container">
			<Home/>
			<div className="profile-container-divider">
				<DottedLine/>
			</div>
			<div className="experience-card-container">
				<ExperienceCard
					// title={"Rently"}
					image={"rentlySmartHome"}
					imageAlternateTxt={"Rently Smart Home"}
					body={rentlyExperience}
					companyUrl={"www.use.rently.com"}
				/>
				<ExperienceCard
					// title={"Rently"}
					image={"virtusa"}
					imageAlternateTxt={"Virtusa"}
					body={virtusaExperience}
					companyUrl={"www.virtusa.com"}
				/>
			</div>

		</div>
	)
}

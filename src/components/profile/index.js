import React from "react";
import "./style.css";
import { BiMedal } from "react-icons/bi";
import { IoMdSchool } from "react-icons/io";
import { GiPodiumWinner} from "react-icons/gi";
import { TbAward } from "react-icons/tb";

import Home from "../home";
import DottedLine from "../dottedLine";
import ExperienceCard from "../experienceCard";
import AchievementCard from "../achievementCard";
import CurvedShape from "../curvedShape";
import MoreAboutMe from "../moreAboutMe";
import { ReactComponent as CodingSVG} from "../../assets/svg/Coding.svg";


const rentlyExperience = [
	`${new Date().getFullYear() - 2020}+ years experience in Node.js and React-Native.`,
	'Develop microservices and mobile applications that enable functional and data analytical use cases for smart home devices.',
	'Microservices | REST API | Serverless | BLE Library Development.',
	'Data processing and analytics from IoT devices.',
	'AWS Lambda | Cognito | DynamoDB | EC2 | S3 | SQS.',
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
			<div className="profile-experience-container">
				<div className="experience-card-title-container">
					<h2>Work Experience</h2>
					<hr className="experience-card-title-underline"/>
				</div>
				<div className="experience-card-container">
					<ExperienceCard
						image={"rentlySmartHome"}
						imageAlternateTxt={"Rently Smart Home"}
						body={rentlyExperience}
						companyUrl={"www.use.rently.com"}
					/>
					<CodingSVG height={230} width={200}/>
					<ExperienceCard
						image={"virtusa"}
						imageAlternateTxt={"Virtusa"}
						body={virtusaExperience}
						companyUrl={"www.virtusa.com"}
					/>
				</div>
			</div>
			<div className="profile-experience-container-divider">
				<DottedLine/>
			</div>
			<div className="profile-achievement-container">
				<div className="profile-achievement-card-title-container">
					<h2>Achievements</h2>
					<hr className="profile-achievement-card-title-underline"/>
				</div>
				<div className="profile-achievement-card-container">
					<AchievementCard
						description={"Gold medallist for Bachelor of Computer Science and Engineering."}
						icon={BiMedal}
					/>
					<AchievementCard
						description={"Obtained full scholarship for Bachelor of Engineering from Embassy of India, Nepal."}
						icon={IoMdSchool}
					/>
					<AchievementCard
						description={"Highest grade point average for the 3rd year of undergraduate study."}
						icon={GiPodiumWinner}
					/>
					<AchievementCard
						description={"Undergraduate project awarded the best project in the department."}
						icon={TbAward}
					/>
				</div>
			</div>
			<div className="profile-about-me-title">
				<h2>More about me</h2>
				<hr className="profile-about-me-title-underline"/>
			</div>
			<div className="profile-about-me-title-curved-shape">
				<CurvedShape/>
			</div>
			<MoreAboutMe/>
		</div>
	)
}

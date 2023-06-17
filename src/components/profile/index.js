import React, { useState } from "react";
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
import axios from "axios";
import JobCard from "../jobCard";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


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

const interestOption = [
	{
		type: 'group', name: 'SPORTS', items: [
			{ value: 'football', label: 'Football' },
			{ value: 'cricket', label: 'Cricket' },
			{ value: 'basketball', label: 'Basketball'},
			{ value: 'volleyball', label: 'Volleyball' },
		]
	},
]

export default function Profile() {
	const handleKeyDown = async (event) => {
		console.log('hererer');
		console.log(event.key);
		console.log(event.target.value);
		if (event.key === 'Enter') {
			setIsLoading(true);
			setJobs();
			const response = await axios.get(`http://localhost:3001/scrape/jobs?search=${event.target.value}&interest=${interest}`);
			console.log('---------------');
			console.log(response);
			setJobs(response.data.jobs);
			setIsLoading(false);
		}
	};

	const selectInterestOption = (item) => {
		setInterest(item.value);
	}

	const [interest, setInterest] = useState('Football');
	const [isLoading, setIsLoading] =  useState(false);
	const [jobs, setJobs] = useState();
	return (
		<div className="profile-container">
			{/*<Home/>*/}
			<div className="profile-container-divider">
				<DottedLine/>
			</div>
			<div className="profile-experience-container">
				<div className="experience-card-title-container">
					<h2>Search your passion!</h2>
					<hr className="experience-card-title-underline"/>
				</div>
				<div className = "searchBar">
					<Dropdown
						options={interestOption} placeholder={'Define your passion'}
						onChange={selectInterestOption}
					/>
					<h4>We help you reunite your passion to profession!</h4>
					<input
						style = {{width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"}}
						type="text"
						placeholder="Search for a job"
						onKeyDown = {handleKeyDown}
					/>
				</div>
				<p>{ isLoading }</p>
				{ (isLoading) ? <p style={{ alignItems: "center", justifyContent: 'center'}}> Loading... </p> : null }
				{ (!jobs) ? null : (jobs.length > 0) ?
					(jobs.map((job) => JobCard({
							jobTitle: job.jobTitle,
							companyName: job.companyName,
							companyRating: job.companyRating,
							companyLocation: job.companyLocation,
							salary: job.salary,
							source: job.source,
							jobLink: job.jobLink,
							jobDescription: job.jobDescription,
						}))
					)
					: <p style={{ alignSelf: "center", justifySelf: 'center'}}> Sorry no job listing found </p>
				}
			</div>
		</div>
	)
}

import React from "react";
import "./style.css";

function EducationListItem({ college, major, yearString, schoolUrl, schoolIcon }) {
	return (
		<div className="education-list-item-container">
			<div className="education-list-item-college-year-container">
				<a href={schoolUrl} target="_blank" rel="noreferrer">
					<li>
						<img src={require(`../../assets/pictures/schools/${schoolIcon}`)}></img>
						{college}
					</li>
				</a>
				<div className="education-list-item-year">
					<p>{yearString}</p>
				</div>
			</div>
			<div className="education-list-item-major">
				<p>{major}</p>
			</div>

		</div>
	)
}
export default function Education() {
	return (
		<div className="education-component-container">
			<div className="education-card-container">
				<EducationListItem
					college="Stony Brook University (SUNY), New York, USA"
					major="M.S Computer Engineering"
					yearString="2023-2025"
					schoolUrl="https://www.srec.ac.in/"
					schoolIcon="SBIcon.png"
				/>
				<EducationListItem
					college="Sri Ramakrishna Engineering College (Anna University), India"
					major="Bachelor of Computer Science and Engineering"
					yearString="2016-2020"
					schoolUrl="https://www.srec.ac.in/"
					schoolIcon="SRECIcon.png"
				/>
				<EducationListItem
					college="GEMS Institute of Higher Education, Nepal"
					major="+2 Science"
					yearString="2014-2016"
					schoolUrl="https://www.gihe.edu.np/"
					schoolIcon="GIHEIcon.png"
				/>
				<EducationListItem
					college="Graded English Medium School(GEMS), Nepal"
					major="10th (SLC)"
					yearString="start-2014"
					schoolUrl="https://www.gems.edu.np/"
					schoolIcon="GIHEIcon.png"
				/>
			</div>
		</div>
	);
}

import React from "react";
import "./style.css";

function EducationListItem({ college, major, yearString, schoolUrl }) {
	return (
		<div className="education-list-item-container">
			<div className="education-list-item-college-year-container">
				<a href={schoolUrl}><li>{college}</li></a>
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
					college="Sri Ramakrishna Engineering College (Anna University), India"
					major="Bachelor of Computer Science and Engineering"
					yearString="2016-2020"
					schoolUrl="https://www.srec.ac.in/"
				/>
				<EducationListItem
					college="GEMS Institute of Higher Education, Nepal"
					major="+2 Science"
					yearString="2014-2016"
					schoolUrl="https://www.gihe.edu.np/"
				/>
				<EducationListItem
					college="Graded English Medium School(GEMS), Nepal"
					major="10th (SLC)"
					yearString="start-2014"
					schoolUrl="https://www.gems.edu.np/"
				/>
			</div>
		</div>
	);
}

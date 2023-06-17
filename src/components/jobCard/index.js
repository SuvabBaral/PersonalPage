import React from "react";
import {RiStarHalfFill} from "react-icons/ri";
import "./style.css";

export default function JobCard({ jobTitle, companyName, companyRating, companyLocation, salary, jobLink, jobDescription }) {
	return (
		<div className="education-list-item-container">
			<div className="education-list-item-college-year-container">
				<a href={jobLink}><li>{jobTitle}</li></a>
				<div className="education-list-item-year">
					<p>{salary}</p>
				</div>
			</div>
			<div className="education-list-item-major">
				<p><b>{companyName}</b> <span style={{fontSize: 12, fontStyle: "italic" }}> {companyRating} { (companyRating) ? <RiStarHalfFill/> : null }</span></p>
			</div>
			<div className="education-list-item-major">
				<p> {' '} </p>
			</div>
			<div className="education-list-item-major">
				<p><b>{companyLocation}</b></p>
			</div>
			<div className="education-list-item-major">
				<p> {' '} </p>
			</div>
			<div className="education-list-item-major">
				<p>{jobDescription}</p>
			</div>
			<div className="education-list-item-major">
				<p> </p>
			</div>
		</div>
	)
}

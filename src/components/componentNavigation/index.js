import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { showTravel, showEducation } from "../../store/actions/profileAction";

export default function ComponentNavigation() {
	const dispatch = useDispatch();
	const displayEducationComponent = () => dispatch(showEducation());
	const displayTravelComponent = () => dispatch(showTravel());
	return(
		<div className="componentNavigation-container">
			<div className="componentNavigation-item-container">
				<div className="componentNavigation-item">
					<button className="componentNavigation-button" onClick={displayEducationComponent}>
						Education
					</button>
				</div>
				<div className="componentNavigation-vertical-line">{""}</div>
				<div className="componentNavigation-item">
					<button className="componentNavigation-button" onClick={displayTravelComponent}>
						Travel
					</button>
				</div>
				{/*<div className="componentNavigation-vertical-line">{""}</div>*/}
				{/*<div className="componentNavigation-item">*/}
				{/*	<button className="componentNavigation-button">*/}
				{/*		Guitar*/}
				{/*	</button>*/}
				{/*</div>*/}
			</div>
		</div>
	)
};

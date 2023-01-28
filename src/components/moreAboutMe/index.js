import React from "react";
import "./style.css";
import ComponentNavigation from "../componentNavigation";
import Education from "../education";
import {useSelector} from "react-redux";
import TravelPops from "../travelPops";

export default function MoreAboutMe() {
	const showEducation = useSelector((state) => state.about.showEducation);
	// const showTravel = useSelector((state) => state.profile.showTravel);
	return (
	<div className="profile-about-me-container">
		<div className="profile-navigationComponent-container">
			<ComponentNavigation/>
		</div>
		{
			(showEducation) ?
				(<div className="profile-education-container">
					<Education/>
				</div>) : (
					<div className="about-me-travel-container">
						<TravelPops
							thumbnailImage={require("../../assets/pictures/Mardi/Machhapuchre.jpeg")}
							text={"Mardi Himal Trek"}
						/>
						<TravelPops
							thumbnailImage={require("../../assets/pictures/KL/TwinTower.jpeg")}
							text={"Kuala Lampur"}
						/>
						<TravelPops
							thumbnailImage={require("../../assets/pictures/ElNido/ElNido1.jpeg")}
							text={"El Nido"}
						/>
						<TravelPops
							thumbnailImage={require("../../assets/pictures/Bali/BaliResort.jpeg")}
							text={"Bali"}
						/>
						<TravelPops
							thumbnailImage={require("../../assets/pictures/Goa/Vagator.jpeg")}
							text={"Goa"}
						/>

					</div>)
		}
	</div>
	);
}

import React from "react";
import "./style.css";
import ComponentNavigation from "../componentNavigation";
import Education from "../education";
import { useSelector } from "react-redux";
import TravelPops from "../travelPops";
import PictureModal from "../pictureModal";
import { useSpring, animated} from "react-spring";

export default function MoreAboutMe() {
	const showEducation = useSelector((state) => state.about.showEducation);
	const showPicturesState = useSelector((state) => state.about.showPictures);
	const props = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
	})
	// const showTravel = useSelector((state) => state.profile.showTravel);
	return (
	<div className="profile-about-me-container">
		<div className="profile-navigationComponent-container">
			<ComponentNavigation/>
		</div>
		{
			(showEducation) ?
				(<div className="profile-education-container">
					<animated.div style={props}/><Education/>
				</div>) : (
					<div className="about-me-travel-container">
						<TravelPops
							thumbnailImage={require("../../assets/pictures/Mardi/Machhapuchre.jpeg")}
							text={"Mardi Himal Trek"}
							destination={"Mardi"}
						/>
						<TravelPops
							thumbnailImage={require("../../assets/pictures/KL/TwinTower.jpeg")}
							text={"Kuala Lampur"}
							destination={"KL"}
						/>
						<TravelPops
							thumbnailImage={require("../../assets/pictures/ElNido/ElNido1.jpeg")}
							text={"El Nido"}
							destination={"ElNido"}
						/>
						<TravelPops
							thumbnailImage={require("../../assets/pictures/Bali/BaliResort.jpeg")}
							text={"Bali"}
							destination={"Bali"}
						/>
						<TravelPops
							thumbnailImage={require("../../assets/pictures/Goa/Vagator.jpeg")}
							text={"Goa"}
							destination={"Goa"}
						/>
					</div>)
		}
		{
			(showPicturesState) ? <PictureModal/> : null
		}
	</div>
	);
}

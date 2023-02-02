import React from "react";
import "./style.css";
import ComponentNavigation from "../componentNavigation";
import Education from "../education";
import { useSelector } from "react-redux";
import TravelPops from "../travelPops";
import PictureModal from "../pictureModal";
import { useTransition, animated} from "@react-spring/web";

export default function MoreAboutMe() {
	const showEducation = useSelector((state) => state.about.showEducation);
	const showPicturesState = useSelector((state) => state.about.showPictures);
	const educationTransition = useTransition(showEducation, {
		from: { x: -500, y: 500, opacity: 0 },
		enter: { x: 0, y:0, opacity: 1 },
		leave: {x: -100, y: 1000, opcaity: 0},
	});
	const travelTransition = useTransition(!showEducation, {
		from: { x: 500, y: 1000, opacity: 0 },
		enter: { x: 0, y:0, opacity: 1 },
		leave: {x: -100, y: 500, opacity: 0},
	})
	return (
	<div className="profile-about-me-container">
		<div className="profile-navigationComponent-container">
			<ComponentNavigation/>
		</div>
		{
			(showEducation) ?
				(<div className="profile-education-container">
					{
						educationTransition((style, showingEducation) => showingEducation
							? <animated.div style={style}> <Education/></animated.div>
							: null
						)
					}
				</div>) : (
					<div className="about-me-travel-container">
						{
							travelTransition((style, showingTravel) => showingTravel
							? <animated.div style={style} className="about-me-travel-container">
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
											thumbnailImage={require("../../assets/pictures/ElNido/Pappaya Beach.jpeg")}
											text={"El Nido"}
											destination={"ElNido"}
										/>
										<TravelPops
											thumbnailImage={require("../../assets/pictures/Bali/Bali.jpeg")}
											text={"Bali"}
											destination={"Bali"}
										/>
										<TravelPops
											thumbnailImage={require("../../assets/pictures/Goa/Vagator.jpeg")}
											text={"Goa"}
											destination={"Goa"}
										/>
									</animated.div>
							: null
							)
						}
					</div>)
		}
		{
			(showPicturesState) ? <PictureModal/> : null
		}
	</div>
	);
}

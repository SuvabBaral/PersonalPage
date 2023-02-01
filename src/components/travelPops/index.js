import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import {showPictures} from "../../store/actions/aboutActions";

export default function TravelPops({ thumbnailImage, text, destination }) {
	const dispatch = useDispatch();
	const displayPictures = () => {
		dispatch(showPictures({ destination }));
	}
	return (
		<div className="travel-pops-container" onClick={displayPictures}>
			<div className="travel-pops-image">
					<img src={thumbnailImage} alt="travel-destination" />
			</div>
			<div className="travel-pops-text">
				{text}
			</div>
		</div>
	)
}

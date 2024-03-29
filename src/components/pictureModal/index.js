import React, {useState} from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {hidePictures} from "../../store/actions/aboutActions";
import {RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import {RxCross2} from "react-icons/rx";

const BALI_IMAGES_NAME = [
	{ picture: 'Bali.jpeg', text: "" },
	{ picture: "BaliGate.jpeg", text: "Lempuyang" },
	{ picture: "Bali2.jpeg", text: "" },
	{ picture: "Finns.jpeg", text: "Finns Beach Club" },
	{ picture: "Legion.jpeg", text: "" },
	{ picture: "Uluwatu.jpeg", text: "Uluwatu"},
];
const ELNIDO_IMAGES_NAME = [
	{ picture: 'Pappaya Beach.jpeg', text: "Pappaya Beach" },
	{ picture: 'Pappaya2.jpeg', text: "" },
	{ picture: 'wayToSLagoon.jpeg', text: "Way to Secret Lagoon" },
	{ picture: 'SecretLagoonFam.jpeg', text: "Secret Lagoon" },
	{ picture: "LasCabanas.jpeg", text: "Las Cabanas" },
	{ picture: "LasCabanas2.jpeg", text: "" },
	{ picture: "LittleVenice.jpeg", text: "Little Venis Manila" },
];
const GOA_IMAGES_NAME = [
	{ picture: "Calungute.jpeg", text: "Calungute" },
	{ picture: "Lighthouse.jpeg", text: "Aguada Lighthouse" },
	{ picture: "Vagator.jpeg", text: "Vagator Beach" },
	{ picture: "Vagator2.jpeg", text: "" },
	{ picture: "Anjuna.jpeg", text: "Anjuna Beach" },
];
const KL_IMAGES_NAME = [
	{ picture: "TwinTower.jpeg", text: "Twin Tower" },
	{ picture: "Petronas.jpeg", text: "Petronas Shopping Center" },
	{ picture: "Memorial.jpeg", text: "National Monument" },
	{ picture: "BukitBintang.jpeg", text: "Bukit Bintang" },
	{ picture: "BatuCave.jpeg", text: "Batu Caves" },
];
const MARDI_IMAGES_NAME = [
	{ picture: "Trail.jpeg", text: "Forest Camp Trail" },
	{ picture: "Dhaulagiri.jpeg", text: "Deurali" },
	{ picture: "Trail3.jpeg", text: "Badal Dada Trail" },
	{ picture: "Trail4.jpeg", text: "Badal Dada Trail" },
	{ picture: "Aboveclouds.jpeg", text: "Badal Dada" },
	{ picture: "Trail2.jpeg", text: "High Camp Trail" },
	{ picture: "Machhapuchre.jpeg", text: "Mardi View Point" },
	{ picture: "NightView.jpeg", text: "Midnight view from High Camp" },
];


export default function PictureModal() {

	const [activeIndex, setActiveIndex] = useState(0);
	const destination = useSelector((state) => state.about.destination);
	let images;
	let imageNames;
	switch(destination) {
		case 'Bali':
			images = require.context('../../assets/pictures/Bali', false);
			imageNames = BALI_IMAGES_NAME;
			break;
		case 'ElNido':
			images = require.context('../../assets/pictures/ElNido', false);
			imageNames = ELNIDO_IMAGES_NAME;
			break;
		case 'Goa':
			images = require.context('../../assets/pictures/Goa', false);
			imageNames = GOA_IMAGES_NAME;
			break;
		case 'KL':
			images = require.context('../../assets/pictures/KL', false);
			imageNames = KL_IMAGES_NAME;
			break;
		case 'Mardi':
			images = require.context('../../assets/pictures/Mardi', false);
			imageNames = MARDI_IMAGES_NAME;
			break;
	}

	const updatePictureIndex = (index) => {
		if (index >= imageNames.length) index = 0;
		else if (index < 0) index = imageNames.length - 1;

		setActiveIndex(index);
	};

	const increaseIndex = () => {
		return updatePictureIndex(activeIndex + 1);
	}
	const decreaseIndex = () => {
		return updatePictureIndex(activeIndex - 1);
	}

	const dispatch = useDispatch();
	const hidePicturesAction = () => dispatch(hidePictures());
	return (
		<div className="picture-modal-container-background">
			<div className="picture-modal-container">
				<div className="picture-modal-picture">
					<div className="picture-modal-description">
						<h2>{imageNames[activeIndex].text}</h2>
					</div>
					<img src={images(`./${imageNames[activeIndex].picture}`)} alt={`${destination} pictures`}/>
				</div>

				<div className="picture-modal-right-arrow" onClick={increaseIndex}>
					<RiArrowRightSLine/>
				</div>
				<div className="picture-modal-left-arrow" onClick={decreaseIndex}>
					<RiArrowLeftSLine/>
				</div>
				<div className="picture-modal-close-button">
					<RxCross2 onClick={hidePicturesAction}/>
				</div>

			</div>
		</div>
	)
}

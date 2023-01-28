import React, {useState} from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {hidePictures} from "../../store/actions/aboutActions";
import {RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import {RxCross2} from "react-icons/rx";

const BALI_IMAGES_NAME = [
	'BaliGate2.jpeg', 'BaliGate.jpeg', 'BaliResort.jpeg', 'FinnsClub.jpeg', 'ulluwatu.jpeg', "Temple.jpeg",
];
const ELNIDO_IMAGES_NAME = [
	'ElNido1.jpeg', 'ElNido2.jpeg', 'ElNido3.jpeg', 'ElNido4.jpeg', 'LittleVenis.jpeg',
];
const GOA_IMAGES_NAME = [
	'Calungute.jpeg', 'Lighthouse.jpeg', 'Vagator.jpeg',
];
const KL_IMAGES_NAME = [
	'TwinTower.jpeg', 'TTInside.jpeg', 'Memorial.jpeg', "BukitBintang2.jpeg", "BukitBintang.jpeg",
];
const MARDI_IMAGES_NAME = [
	"Trial.jpeg", "Trial2.jpeg", "Trial3.jpeg", "Trial4.jpeg", "Dhaulagiri.jpeg",
	"Aboveclouds.jpeg", "Machhapuchre.jpeg", "NightView.jpeg",
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
		else if (index < 0) index = 0;

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
					<img src={images(`./${imageNames[activeIndex]}`)} alt="picture"/>
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

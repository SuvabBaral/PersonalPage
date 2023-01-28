import { SHOW_GUITAR, SHOW_TRAVEL, SHOW_EDUCATION, SHOW_PICTURES, HIDE_PICTURES } from "./types";

export const showEducation = () => {
	return({
		type: SHOW_EDUCATION,
	});
};

export const showGuitar = () => {
	return({
		type: SHOW_GUITAR,
	});
}

export const showTravel = () => {
	return({
		type: SHOW_TRAVEL,
	});
}
export const showPictures = (payload) => {
	return({
		type: SHOW_PICTURES,
		payload,
	});
};

export const hidePictures = () => {
	return({
		type: HIDE_PICTURES,
	});
}


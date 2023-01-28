import { SHOW_GUITAR, SHOW_TRAVEL, SHOW_EDUCATION } from "./types";

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

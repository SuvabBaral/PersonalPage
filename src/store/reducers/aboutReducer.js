import {
	SHOW_EDUCATION, SHOW_GUITAR, SHOW_PICTURES, SHOW_TRAVEL, HIDE_PICTURES,
} from "../actions/types";

const defaultState = {
	showEducation: true,
	showGuitar: false,
	showTravel: false,
	showPictures: false,
	destination: '',
}
export const about = (state= defaultState, action) => {
	const { type, payload } = action;
	switch(type) {
		case SHOW_EDUCATION:
			return { ...state, showEducation: true, showGuitar: false, showTravel: false };
		case SHOW_GUITAR:
			return { ...state, showEducation: false, showGuitar: true, showTravel: false };
		case SHOW_TRAVEL:
			return { ...state, showEducation: false, showGuitar: false, showTravel: true };
		case SHOW_PICTURES:
			return { ...state, showPictures: true, destination: payload.destination };
		case HIDE_PICTURES:
			return {...state, showPictures: false, destination: '' };
		default:
			return state;
	}
}

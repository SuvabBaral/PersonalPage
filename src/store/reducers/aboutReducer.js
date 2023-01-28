import { SHOW_EDUCATION, SHOW_GUITAR, SHOW_TRAVEL } from "../actions/types";
const defaultState = {
	showEducation: true,
	showGuitar: false,
	showTravel: false,
}
export const about = (state= defaultState, action) => {
	const { type } = action;
	switch(type) {
		case SHOW_EDUCATION:
			return { ...state, showEducation: true, showGuitar: false, showTravel: false };
		case SHOW_GUITAR:
			return { ...state, showEducation: false, showGuitar: true, showTravel: false };
		case SHOW_TRAVEL:
			return { ...state, showEducation: false, showGuitar: false, showTravel: true };
		default:
			return state;
	}
}

import { SHOW_SIDEBAR, HIDE_SIDEBAR } from "../actions/types";
const defaultState = {
	showSideBar: false,
}
export const sidebar = (state= defaultState, action) => {
	const { type } = action;
	switch(type) {
		case SHOW_SIDEBAR:
			return { ...state, showSideBar: true };
		case HIDE_SIDEBAR:
			return { ...state, showSideBar: false };
		default:
			return state;
	}
}

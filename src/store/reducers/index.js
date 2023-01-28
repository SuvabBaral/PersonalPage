import { combineReducers } from "redux";
import { sidebar } from "./sidebarReducer";
import { about } from "./aboutReducer"

export const rootReducer = combineReducers({
	sidebar: sidebar,
	about: about,
});

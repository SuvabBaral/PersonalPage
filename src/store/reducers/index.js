import { combineReducers } from "redux";
import { sidebar } from './sidebarReducer';

export const rootReducer = combineReducers({
	sidebar: sidebar,
});

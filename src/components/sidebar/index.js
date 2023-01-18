import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { hideSidebar } from "../../store/actions/sidebarAction";

function Sidebar() {
	const dispatch = useDispatch();
	const cancelSidebar = () => dispatch(hideSidebar());
	const sidebarState = useSelector((state) => state.sidebar);
	return (
		<div className = "sidebar" id = { sidebarState ? "show-sidebar" : "hide-sidebar" }>
			<ul className= "sidebar__links">
				<li className="sidebar__link">Home</li>
				<li className="sidebar__link">Resume</li>
				<li className="sidebar__link">Connect</li>
			</ul>
			<div className = "sidebar__cancel">
				<RxCross2 onClick={cancelSidebar}/>
			</div>
		</div>
	)
}

export default Sidebar;

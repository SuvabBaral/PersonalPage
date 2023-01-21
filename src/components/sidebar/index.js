import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import {RxCross2, RxEnvelopeClosed, RxGithubLogo, RxLinkedinLogo} from "react-icons/rx";
import { hideSidebar } from "../../store/actions/sidebarAction";

function Sidebar() {
	const dispatch = useDispatch();
	const cancelSidebar = () => dispatch(hideSidebar());
	const sidebarState = useSelector((state) => state.sidebar.showSideBar);
	return (
		<div className = "sidebar" id = { sidebarState ? "show-sidebar" : "hide-sidebar" }>
			<ul className= "sidebar__links">
				<a href="https://github.com/SuvabBaral?tab=repositories" target="_blank"><li className="sidebar__link"><RxGithubLogo className="sidebar-icon" />Github</li></a>
				<a href="https://np.linkedin.com/in/suvab-baral" target="_blank"><li className="sidebar__link"><RxLinkedinLogo className="sidebar-icon"/>LinkedIn</li></a>
				<li className="sidebar__link"><RxEnvelopeClosed className="sidebar-icon"/>Connect</li>
			</ul>
			<div className = "sidebar__cancel">
				<RxCross2 onClick={cancelSidebar}/>
			</div>
		</div>
	)
}

export default Sidebar;

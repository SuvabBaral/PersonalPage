import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import {RxCross2, RxEnvelopeClosed, RxGithubLogo, RxLinkedinLogo, RxSpaceBetweenVertically} from "react-icons/rx";
import { hideSidebar } from "../../store/actions/sidebarAction";

const educationContainer = "education-component-container";
function Sidebar() {
	const dispatch = useDispatch();
	const cancelSidebar = () => dispatch(hideSidebar());
	const sidebarState = useSelector((state) => state.sidebar.showSideBar);
	const scrollToView = () => {
		const contactMe = document.getElementById("contact-me-container");
		if (contactMe) {
			contactMe.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className = "sidebar" id = { sidebarState ? "show-sidebar" : "hide-sidebar" }>
			<ul className= "sidebar__links">
				<a href="https://github.com/SuvabBaral?tab=repositories" target="_blank"  rel="noreferrer"><li className="sidebar__link"><RxGithubLogo className="sidebar-icon" />Github</li></a>
				<a href="https://np.linkedin.com/in/suvab-baral" target="_blank"  rel="noreferrer"><li className="sidebar__link"><RxLinkedinLogo className="sidebar-icon"/>LinkedIn</li></a>
				<a onClick={scrollToView}><li className="sidebar__link"><RxEnvelopeClosed className="sidebar-icon"/>Connect</li></a>
				<a onClick={() => scrollToView(educationContainer)}><li className="navbar-link"><RxSpaceBetweenVertically className="navbar-icon"/>Education</li></a>
			</ul>
			<div className = "sidebar__cancel">
				<RxCross2 onClick={cancelSidebar}/>
			</div>
		</div>
	)
}

export default Sidebar;

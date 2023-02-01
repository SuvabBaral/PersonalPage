import React from "react";
import './style.css';
import { RxHamburgerMenu, RxGithubLogo, RxLinkedinLogo, RxEnvelopeClosed } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { showSidebar } from "../../store/actions/sidebarAction";
import CurvedShape from "../curvedShape";

function Navbar() {
	const dispatch = useDispatch();
	const displaySidebar = () => dispatch(showSidebar());
	const scrollToView = () => {
		const contactMe = document.getElementById("contact-me-container");
		if (contactMe) {
			contactMe.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className = "navbar">
			<div className= "navbar-wrapper">
				<ul className= "navbar-links">
					<a href="https://github.com/SuvabBaral?tab=repositories" target="_blank" rel="noreferrer"><li className="navbar-link"><RxGithubLogo className="navbar-icon" />Github</li></a>
					<a href="https://np.linkedin.com/in/suvab-baral" target="_blank" rel="noreferrer"><li className="navbar-link"><RxLinkedinLogo className="navbar-icon"/>LinkedIn</li></a>
					<a onClick={scrollToView}><li className="navbar-link"><RxEnvelopeClosed className="navbar-icon"/>Connect</li></a>
				</ul>
				<RxHamburgerMenu onClick={ displaySidebar } className="navbar-burgerIcon"/>
			</div>
			<div className="navbar-curved-shape">
				<CurvedShape/>
			</div>

		</div>
	);
};

export default Navbar;

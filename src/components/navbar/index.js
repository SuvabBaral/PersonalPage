import React from "react";
import './style.css';
import { RxHamburgerMenu, RxGithubLogo, RxLinkedinLogo, RxEnvelopeClosed, RxSpaceBetweenVertically } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { showSidebar } from "../../store/actions/sidebarAction";
import CurvedShape from "../curvedShape";


const contactMeContainer = "contact-me-container";
const educationContainer = "education-component-container";

function Navbar() {
	const dispatch = useDispatch();
	const displaySidebar = () => dispatch(showSidebar());
	const scrollToView = (idName) => {
		const contactMe = document.getElementById(idName);
		if (contactMe) {
			contactMe.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className = "navbar">
			<div className= "navbar-wrapper">
				<ul className= "navbar-links">
					<a href="https://github.com/SuvabBaral" target="_blank" rel="noreferrer"><li className="navbar-link"><RxGithubLogo className="navbar-icon" />Github</li></a>
					<a href="https://np.linkedin.com/in/suvab-baral" target="_blank" rel="noreferrer"><li className="navbar-link"><RxLinkedinLogo className="navbar-icon"/>LinkedIn</li></a>
					{/* <a onClick={() => scrollToView(contactMeContainer)}><li className="navbar-link"><RxEnvelopeClosed className="navbar-icon"/>Connect</li></a> */}
					<a onClick={() => scrollToView(educationContainer)}><li className="navbar-link"><RxSpaceBetweenVertically className="navbar-icon"/>Education</li></a>
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

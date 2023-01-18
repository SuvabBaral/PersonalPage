import React from "react";
import './style.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { showSidebar } from "../../store/actions/sidebarAction";
import CurvedShape from "../curvedShape";

function Navbar() {
	const dispatch = useDispatch();
	const displaySidebar = () => dispatch(showSidebar());
	return (
		<div className = "navbar">
			<div className= "navbar-wrapper">
				{/*<div className = "navbar__logo">*/}
				{/*	<h1> LOGO: </h1>*/}
				{/*</div>*/}
				<ul className= "navbar-links">
					<li className="navbar-link">Github</li>
					<li className="navbar-link">LinkedIn</li>
					<li className="navbar-link">Connect</li>
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

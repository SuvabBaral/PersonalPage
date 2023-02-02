import React from "react";
import Typical from "react-typical";
import "./style.css";

export default function Home() {
	const scrollToView = () => {
		const contactMe = document.getElementById("contact-me-container");
		if (contactMe) {
			contactMe.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="home-container">
			<div className="home-parent">
				<div className="home-details">
					<div className="home-details-name">
						<span className="home-main-text">
							Hello, I'm <span className="highlighted-text"> Suvab </span>
						</span>
					</div>
					<div className="home-details-role">
						{" "}
						<h1>
							<Typical
								loop={Infinity}
								steps={[
									"Computer Engineer", 1800,
									"Software Developer", 1800,
									"Node.js | Express.js", 1800,
									"PSQL | DynamoDB", 1800,
									"React | Redux", 1800,
									"Serverless | AWS", 1800,
								]}
							/>
						</h1>
					</div>
					<div className="home-details-name">
						<span className="home-brief-text">
							Hit me up to collaborate on an interesting idea!
						</span>
					</div>
					<div className="home-details-buttons">
						<a href="Suvab Resume 2023.pdf" download="Suvab's Resume.pdf" type="application/pdf" >
							<button className="btn primary-button">
								{" "}
								RESUME
							</button>
						</a>
						<a onClick={scrollToView}>
						<button className="btn primary-button">
							Connect
						</button>
						</a>
					</div>
				</div>
				<div className="home-profile-picture">
					<div className="home-profile-picture-background"></div>
				</div>
			</div>
		</div>
	)
}

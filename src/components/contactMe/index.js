import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { ReactComponent as ContactMeSvg } from "../../assets/svg/ContactMeSVG.svg";
import {ClipLoader} from "react-spinners";
import {RiCheckboxCircleFill, RiCopyrightFill} from "react-icons/ri";
import {EMAILJS_TEMPLATE_ID, EMAILJS_SERVICE_ID, EMAILJS_PUBLIC_KEY } from "../../constants";
import "./style.css";

export const ContactMe = () => {
	const form = useRef();
	const [activityIndicator, setActivityIndicator] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [sentMessage, setSentMessage] = useState('');
	const sendEmail = (e) => {
		setActivityIndicator(true);
		e.preventDefault();

		emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
			.then((result) => {
				setActivityIndicator(false);
				setIsSent(true);
				setSentMessage('SENT');
				setTimeout(() => setSentMessage(''), 2000);
				console.log(result.text);
			}, (error) => {
				setActivityIndicator(false);
				setSentMessage('Could not send email. Please try again later.');
				setTimeout(() => setSentMessage(''), 2000);
				console.log(error.text);
			});
	};

	return (
		<div className="contact-me-container" id="contact-me-container">
			<div className="contact-me-card">
				<div className="contact-me-title-container">
					<h2>Contact me</h2>
					<hr/>
				</div>
				<div className="contact-me-form-image-container">
					<div className="contact-me-form-container">
						<form ref={form} onSubmit={sendEmail}>
							<div className="contact-me-form-name">
								<input type="text" name="from_name" placeholder={"Name"} required/>
							</div>
							<div className="contact-me-form-email">
								<input type="email" name="from_email" placeholder={"Email"} required/>
							</div>
							<div className="contact-me-form-message">
								<textarea name="message" placeholder={"Message"} maxLength={"320"} required/>
							</div>
							<div className="contact-me-form-submit">
								<input type="submit" value={isSent ? "Send Again?" : "Send"} className="contact-me-submit-button btn primary-button"/>
								<div className="contact-me-form-submit-loading">
									<ClipLoader color="gray" loading={activityIndicator}/>
									{isSent && sentMessage ? (<div className="contact-me-form-sent-message">
										<RiCheckboxCircleFill/> {sentMessage}
									</div>) : null}
								</div>
							</div>
						</form>
					</div>
					<div className="contact-me-svg-container">
						<ContactMeSvg height="350" widht="150"/>
					</div>
				</div>
				<div className="contact-me-copyright-container">
					<span><RiCopyrightFill/></span>
					<span>SUVAB BARAL {new Date().getFullYear()}</span>
				</div>
			</div>
		</div>
	);
};

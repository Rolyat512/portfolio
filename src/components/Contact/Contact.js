import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
// import { SMTPClient } from 'emailjs';

const Contact = () => {

	const form = useRef();

	const sendEmail = (e) => {

		emailjs
			.sendForm(
				// env.Service_Id,
				"service_yi68635",
				// env.Template_Id,
				"template_sbbrvbn",
				form.current,
				// env.Public_Key
				"_YHUkHGQAEL12lX2a"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail} className="formStyle">
			<label>Name</label>
			<input type="text" name="user_name" className="inputStyle" />
			<label>Email</label>
			<input type="email" name="user_email" className="inputStyle" />
			<label>Message</label>
			<textarea name="message"
				className="textareaStyle" />
			<input type="submit" value="Send"
				className="sendButton" />
		</form>
	);
};

export default Contact;

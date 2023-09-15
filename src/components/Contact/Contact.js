import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
// import { SMTPClient } from 'emailjs';
import env from "react-dotenv";

const Contact = () => {
	// const client = new SMTPClient({
	//     user: env.User,
	//     password: env.Password,
	//     host: 'tayloralderidge3@gmail.com',
	//     ssl: true,
	// });

	// // send the message and get a callback with an error or details of the message that was sent
	// client.send(
	//     {
	//         text: 'i hope this works',
	//         from: 'you <username@your-email.com>',
	//         to: 'someone <someone@your-email.com>, another <another@your-email.com>',
	//         cc: 'else <else@your-email.com>',
	//         subject: 'testing emailjs',
	//     },
	//     (err, message) => {
	//         console.log(err || message);
	//     }
	// );
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

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
		<div className="formStyle">
			<form ref={form} onSubmit={sendEmail} className="formStyle">
				<label>Name</label>
				<input type="text" name="user_name" className="inputStyle"/>
				<label>Email</label>
				<input type="email" name="user_email" className="inputStyle" />
				<label>Message</label>
				<textarea name="message" 
                className="textareaStyle"/>
				<input type="submit" value="Send" 
                className="sendButton" />
			</form>
		</div>
	);
};

export default Contact;

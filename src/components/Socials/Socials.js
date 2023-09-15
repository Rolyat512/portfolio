import React from "react";
import './socials.css';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
	return (
		<div className="socials">
			<a href="https://www.linkedin.com/in/taylor-aldridge512/" target="blank">
				<BsLinkedin />
			</a>
			<a href="https://github.com/Rolyat512" target="blank">
				<FaGithub />
			</a>
		</div>
        // should we add resume to this? 
	);
};

export default Socials;
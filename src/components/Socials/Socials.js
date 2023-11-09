import React from "react";
// import "./socials.css";
import icon1 from "./images/linkedIn3.png";
import icon2 from "./images/linkedIn2.png";
import icon3 from "./images/github.png";
import icon4 from "./images/resume.png";

const Socials = (props) => {
	return (
		<div className="socials">
			<a href="https://www.linkedin.com/in/taylor-aldridge512/" target="blank">
				<img src={icon1} />
			</a>
			<a onClick={() => props.setPage("resume")}>
				<img id="resumeIcon" src={icon4} />
				<figcaption>Resume</figcaption>
			</a>
			<a href="https://github.com/Rolyat512" target="blank">
				<img src={icon3} />
			</a>
		</div>
	);
};

export default Socials;

import React from "react";
import "./socials.css";
import icon1 from "./images/linkedIn3.png";
import icon3 from "./images/github.png";
import icon4 from "./images/resume.png";

const Socials = (props) => {
	return (
		<div className="socialContainer" style={{height: '10vh', justifyContent: 'center', display: 'flex'}}>
			<a href="https://www.linkedin.com/in/taylor-aldridge512/" target="blank">
				<img src={icon1} alt=''/>
			</a>
			<button onClick={() => props.setPage("resume")}>
				<img id="resumeIcon" src={icon4} alt=''/>
				<figcaption>Resume</figcaption>
			</button>
			<a href="https://github.com/Rolyat512" target="blank">
				<img src={icon3} alt=''/>
			</a>
		</div>
	);
};

export default Socials;

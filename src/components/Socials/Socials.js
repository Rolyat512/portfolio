import React from "react";
import './socials.css';
import icon1 from './images/linkedIn.png';
import icon2 from './images/linkedIn2.png';
import icon3 from './images/github.png';

const Socials = () => {
	return (
		<div className="socials">
			<a href="https://www.linkedin.com/in/taylor-aldridge512/" target="blank">
				<img src={icon1} />
			</a>
			<a href="https://github.com/Rolyat512" target="blank">
				<img src={icon3} />
			</a>
		</div>
        // should we add resume to this? 
	);
};

export default Socials;
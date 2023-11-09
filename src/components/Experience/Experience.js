import React from "react";
import './experience.css';
import htmlIcon from './images/html-icon.png';
import cssIcon from './images/css-icon.png';
import jsIcon from './images/JavaScript-icon.png';
import mongoIcon from './images/mongoDb-icon2.png';
import mySqlIcon from './images/MySql-icon2.png';
import nodeIcon from './images/nodeJs-icon.jpeg';
import graphQlIcon from './images/graphQl-icon2.png';
import googleMapsIcon from './images/googleMaps-icon.jpeg';

const Experience = () => {
	return (
		<div className="skills">
			<a href="" target="blank">
				<img src={htmlIcon} />
			</a>
			<a href="" target="blank">
				<img src={cssIcon} />
			</a>
			<a href="" target="blank">
				<img src={jsIcon} />
			</a>
			<a href="" target="blank">
				<img src={mongoIcon} />
			</a>
			<a href="" target="blank">
				<img src={mySqlIcon} />
			</a>
			<a href="" target="blank">
				<img src={nodeIcon} />
			</a>
			<a href="" target="blank">
				<img src={graphQlIcon} />
			</a>
			<a href="" target="blank">
				<img src={googleMapsIcon} />
			</a>
		</div>
	);
};

export default Experience;

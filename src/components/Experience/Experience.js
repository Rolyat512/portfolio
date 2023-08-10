import React from "react";
import { styles } from "./styles";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import './experience.css';

// npm install react-icons --save
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandMongodb } from "react-icons/tb";
import { SiGraphql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const Experience = () => {
	return (
		<div className="experience">
			<BottomNavigation>
				<BottomNavigationAction label="Recents" icon={< FaHtml5/>} />
        <BottomNavigationAction label="Recents" icon={< FaCss3Alt/>} />
        <BottomNavigationAction label="Recents" icon={< RiJavascriptFill/>} />
        <BottomNavigationAction label="Recents" icon={< FaReact/>} />
        <BottomNavigationAction label="Recents" icon={< TbBrandMongodb/>} />
        <BottomNavigationAction label="Recents" icon={< SiGraphql/>} />
        <BottomNavigationAction label="Recents" icon={< FaNodeJs/>} />
				<BottomNavigationAction label="Recents" icon={<SiMui />} />
				<BottomNavigationAction label="Recents" icon={<SiMysql />} />
        <BottomNavigationAction label="Recents" icon={<FaPhp />} />
			</BottomNavigation>
		</div>
	);
};

export default Experience;

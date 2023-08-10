import React from "react";
import { styles } from "./styles";
import "./footer.css";
import {
	Typography,
	Box,
	Link,
	BottomNavigationAction,
	BottomNavigation,
} from "@mui/material";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<BottomNavigation>
            <BottomNavigationAction label="Recents" icon={<BsLinkedin />} />
            <BottomNavigationAction label="Recents" icon={<BsLinkedin />} />
            <BottomNavigationAction label="Recents" icon={<BsLinkedin />} />
		</BottomNavigation>
	);
};

export default Footer;

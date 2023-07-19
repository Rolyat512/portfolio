import React from "react";
import { styles } from "./styles";
import { Box, Grid } from "@mui/material";

// This container will be the main container and will hold all of the code excluding header / footer / and bottom nav

const Main = () => {
	return (
		<Grid
			container
			direction="row"
			spacing={2}
			sx={{ ...styles.mainContainer }}>
			<Grid item xs direction="column" sx={{ ...styles.bubbles }}></Grid>
			<Grid item container direction="column" xs spacing={0}>
				<Grid item xs>
					<div> About</div>
				</Grid>
				<Grid item xs>
					<div>Experience</div>
				</Grid>
				<Grid item xs>
					<div>Portfolio</div>
				</Grid>
				<Grid item xs>
					<div>Contact Me </div>
				</Grid>
			</Grid>
			<Grid item direction="column" xs sx={{ ...styles.bubbles }}></Grid>
		</Grid>
	);
};

export default Main;

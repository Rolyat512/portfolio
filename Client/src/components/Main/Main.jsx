import React from "react";
import { styles } from "./styles";
import { Box, Grid } from "@mui/material";
import './bubbles.css'

// This container will be the main container and will hold all of the code excluding header / footer / and bottom nav

const Main = () => {
	return (
		<Grid
			container
			direction="row"
			spacing={0}
			sx={{ ...styles.mainContainer }}>
			<Grid item xs direction="column" sx={{ ...styles.bubbles }}>

            <div className="absolute grid grid-cols-12 gap-4 min-h-screen w-full overflow-hidden overflow-hidden-y z-10 " >
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="relative grid min-h-screen place-content-end">
                        {[...Array(4)].map((_, j) => (
                        <div 
                            className={`w-16 h-16 rounded-full bg-white animate-bubble delay-${j+i}s mb-4 absolute`}
                            key={j}
                            style={{
                            '--animation-order': j + 1,
                            '--animation-length': `${Math.random() * 5 + 3}s`,
                            '--animation-distance': '100vh',
                            }}
                        />
                        ))}
                    </div>
                ))}
            </div>

            </Grid>
			<Grid item container direction="column" xs spacing={0} sx={{...styles.middleSection}}>
				<Grid item xs sx={{...styles.aboutSection}}>
					<div> About</div>
				</Grid>
				<Grid item xs sx={{...styles.expSection}}>
					<div>Experience</div>
				</Grid>
				<Grid item xs sx={{...styles.portSection}}>
					<div>Portfolio</div>
				</Grid>
				<Grid item xs sx={{...styles.contactSection}}>
					<div>Contact Me </div>
				</Grid>
			</Grid>
			<Grid item direction="column" xs sx={{ ...styles.bubbles }}></Grid>
		</Grid>
	);
};

export default Main;

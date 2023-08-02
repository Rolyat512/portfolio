import { withTheme } from "@emotion/react";

export const styles = {
    mainContainer: {
        height: '100vh',
        border: "1px solid white",
        color: 'white',
        backgroundColor: '#122345',

    },
    bubbles: {
        backgroundColor: '#122345',
        width: '20%',
    },
    middleSection: {
        backgroundColor: '#122345',
        width: '80%',
        color: 'white',
        border: "1px solid white",
        padding: '0px'
    },
    aboutSection: {
        borderBottom: "1px solid white",
        borderLeft: "1px solid white",
        borderRight: "1px solid white",
        height: '100vh',
    },
    expSection: {
        border: "1px solid white"
    },
    portSection: {
        border: "1px solid white"
    },
    contactSection: {
        borderTop: "1px solid white",
        borderLeft: "1px solid white",
        borderRight: "1px solid white",
    },
    MuiGrid: {
        'spacing-xs-3': {
            '& > $root': {
               padding: '0px',
            },
        },
    },
};
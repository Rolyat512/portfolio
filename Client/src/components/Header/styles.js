export const styles = {
    mainContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // background: "#122345",
        margin: '30px',
        color: "black",
        fontSize: '40px',
        padding: "10px 5px 10px 5px",
        fontFamily: "'Roboto', sans-serif",
        borderBottom: '1px solid white', // Add this line to set the font
    
        "@media (min-width: 768px)": {
          justifyContent: "space-between",
          padding: "5px 50px 15px 50px",
        },
      },
      links: {
        fontSize: '15px',
        justifyContent: 'space-between',
        display: 'flex',
      },
};
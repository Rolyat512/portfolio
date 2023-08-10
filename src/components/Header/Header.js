import { styles } from "./styles";
import {Typography} from '@mui/material'
import './header.css';


const Header = () => 
  <nav>
    <Typography variant='h2'> Taylor Aldridge </Typography>

    <div>
      <a>About Me</a>
      <a>Experience</a>
      <a>Portfolio</a>
      <a>Contact Me</a>
    </div>
  </nav>

export default Header

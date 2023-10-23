import './header.css';
import {Typography} from '@mui/material';


const Header = props => 
  <nav>
    {/* <Typography variant='h2'> Taylor Aldridge </Typography> */}
    <h1 id='about' className='header'>Taylor Aldridge</h1>

    <div>
      <a href="#about" onClick={()=>props.setPage('about')}>About Me </a>
      <a href="#portfolio" onClick={()=>props.setPage('about')}>Portfolio </a>
      <a href="#contact" onClick={()=>props.setPage('about')}>Contact Me </a>
      <a onClick={()=>props.setPage('resume')}>Resume </a>
    </div>
  </nav>

export default Header

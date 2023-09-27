import './header.css';
import {Typography} from '@mui/material';


const Header = props => 
  <nav>
    {/* <Typography variant='h2'> Taylor Aldridge </Typography> */}
    <h1 className='header'>Taylor Aldridge</h1>

    <div>
      <a onClick={()=>props.setPage('about')}>About Me </a>
      <a onClick={()=>props.setPage('about')}>Portfolio </a>
      <a onClick={()=>props.setPage('Resume')}>Resume </a>
      <a onClick={()=>props.setPage('about')}>Contact Me </a>
    </div>
  </nav>

export default Header

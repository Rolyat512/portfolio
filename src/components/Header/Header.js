import './header.css';
import { useState } from 'react';
import {Typography} from '@mui/material';


const Header = props => 
  <nav>
    <Typography variant='h2'> Taylor Aldridge </Typography>

    <div>
      <a onClick={()=>props.setPage('about')}>About Me </a>
      <a onClick={()=>props.setPage('experience')}>Experience </a>
      <a onClick={()=>props.setPage('portfolio')}>Portfolio </a>
      <a onClick={()=>props.setPage('contact')}>Contact Me </a>
    </div>
  </nav>

export default Header

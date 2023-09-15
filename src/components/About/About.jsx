import './about.css';
import React from 'react'
import pic from './me.jpeg';
// import {} from '@mui/material';
import { styles } from "./styles";

const About = () =>
    <div className='about'>
      <img src={pic} alt="personal" />
      <p>
        My name is Taylor Aldridge and I'm a native Austinite. I attended multiple universities, including universities in London and Tokyo, and graduated from Fort Lewis College with a bachelors degree in Economics. 
        <br></br>
        <br></br>
        I recently just completed the FullStack coding program through UTSA and am very excited to dive further into the world of coding. I've always enjoyed learning new things and am beyond thrilled to find an industry that's always evolving.
      </p>

    </div>


export default About
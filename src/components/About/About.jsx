import './about.css';
import React from 'react'
import pic from './me.jpeg';

const About = () => {

  return (
    <div className='about'>
      <div className='contentDiv card'>
        <div>
          <img src={pic} alt="personal" />

          {/* <p>
          My name is Taylor Aldridge and I'm a native Austinite. I attended multiple universities, including universities in London and Tokyo, and graduated from Fort Lewis College with a bachelors degree in Economics.
          </p>

          <p>I recently just completed the FullStack coding program through UTSA and am very excited to dive further into the world of coding. I've always enjoyed learning new things and am beyond thrilled to find an industry that's always evolving.</p> */}


<p>I recently just completed the FullStack coding program through UTSA and am very excited to dive further into the world of coding! I've always enjoyed learning new things and am beyond thrilled to find an industry that's forever evolving. </p>

<p>I have attended multiple universities, including universities in London and Tokyo, and graduated from Fort Lewis College with a bachelors degree in Economics. 
</p>


{/* <p>I recently just completed the FullStack coding program through UTSA and am very excited to dive further into the world of coding! I've always enjoyed learning new things and am beyond thrilled to find an industry that's always evolving. </p> */}

        </div>
      </div>
    </div>
  )
}


export default About





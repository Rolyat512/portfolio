import './about.css';
import React from 'react'
import pic from './me.jpeg';

const About = () => {

  let initScroll = true;
  let currentPos;
  let elemHeight;
  let initPos;
  let prePos;
  let op = 1;

  const scrollFun = () => {
    let el = document.querySelector('.contentDiv');

    if (initScroll) {
      initScroll = false;
      el.style.opacity = op;
      initPos = el.getClientRects()[0].top;
      elemHeight = el.getClientRects()[0].height;
      prePos = initPos;
      currentPos = initPos;
    }

    currentPos = el.getClientRects()[0].top;

    if (currentPos >= initPos) {
      el.style.opacity = 1
    }

    if (currentPos < prePos) {
      el.style.opacity = 0
      currentPos = currentPos
    }

  };

  // document.addEventListener('scroll', scrollFun);

  return (
    <div className='about'>
      <div className='contentDiv card'>
        <div>
          <img src={pic} alt="personal" />

          <p>
          My name is Taylor Aldridge and I'm a native Austinite. I attended multiple universities, including universities in London and Tokyo, and graduated from Fort Lewis College with a bachelors degree in Economics.
          </p>

          <p>I recently just completed the FullStack coding program through UTSA and am very excited to dive further into the world of coding. I've always enjoyed learning new things and am beyond thrilled to find an industry that's always evolving.</p>

        </div>
      </div>
    </div>
  )
}


export default About

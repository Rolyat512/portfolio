import './portfolio.css';
import apps from './apps.js';
import { useEffect } from 'react';
import { Box, Card, CardActionArea, CardMedia, Typography, CardContent, CardHeader } from '@mui/material'
import Carousel from 'react-material-ui-carousel';
import icon3 from './images/github.png';

const Portfolio = ({ page }) => {

  let ajustImgHeigh = (el) => {
    if (document.querySelector(el) === null) return;

    let height = `${document.querySelector(el).getClientRects()[0].width * .8}px`;
    document.querySelectorAll(el).forEach(img => img.style.height = height);
  }

  let scrollApp = i => {

    let el = document.querySelector('.apps');
    let height = el.offsetHeight + 5;
    el.scrollTo({ top: height * i, behavior: 'smooth' });

    let el2 = document.querySelector('.infoContainer');
    let height2 = el2.offsetHeight;
    el2.scrollTo({ top: height2 * i, behavior: 'smooth' });

  };

  useEffect(() => {
    ajustImgHeigh('.apps');
    ajustImgHeigh('.appNav button');

    window.addEventListener('resize', () => {
      ajustImgHeigh('.appNav button');
      ajustImgHeigh('.apps');
    });
  });

  return (
    <div className='appContainer'>
      <h1 id='portfolio' className='portfolioTitle'>Portfolio </h1>

      <div className='appNav'>
        {
          apps.map(({ key, pic }, i) => <button key={'btn_' + key} onClick={() => scrollApp(i)}> <img src={pic} /></button>)
        }
      </div>

      <div className='apps'>
        <div className="web">
            <img src="https://picsum.photos/200/200" />
            <a><button>website</button></a>
            <a><button>github</button></a>
        </div>

        <div className='infoContainer'>
          <h1 style={{color:'white'}}>App Title</h1>
          <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, magni veniam vero itaque asperiores necessitatibus aut in, at eaque quia consequuntur perspiciatis odit. Itaque dolore libero facilis unde, laborum veniam?</p>
        </div>

      </div>

    </div>
  )
}

export default Portfolio

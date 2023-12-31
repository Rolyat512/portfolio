
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
      {/* <h1 id='portfolio' className='portfolioTitle'>Portfolio </h1> */}

      {/* <div className='appNav'>
        {
          apps.map(({ key, pic }, i) => <button key={'btn_' + key} onClick={() => scrollApp(i)}> <img src={pic} /></button>)
        }

        {
          apps.map(({ key, name, pic, website, github }) => (
            <img key={'img_' + key} id={name.split(' ').join('_')} src={pic} />,
            <a href={website} target="_blank"><button>Website</button></a>,
            <a href={github} target="_blank">

      </div> */}

      {/* <div className='apps'>
        {
          apps.map(({ key, name, pic}) =>
            <img key={'img_' + key} id={name.split(' ').join('_')} src={pic} />
          )
        }
      </div> */}

      {/* <div className='infoContainer'>
        {
          apps.map(({ key, name, desc, website, github }) =>
            <div key={'info_'+key} className='info'>
              <h1>{name}</h1>
              <p>{desc}</p>
              <a href={website} target="_blank"><button>Website</button></a>
              <a href={github} target="_blank">
              <button>Github <img src={icon3} /> </button>
              </a>
          ))
        }
      </div>

      <div className='infoContainer'>
        {
          apps.map(({ key, name, desc, website, github }) =>
            <div key={'info_' + key} className='info'>
              <h1>{name}</h1>
              <p>{desc}</p>
            </div>
          )
        }
      </div> */}

    </div>
  )
}

export default Portfolio;

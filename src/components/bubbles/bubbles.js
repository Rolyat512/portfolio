import './bubbles.css';
import pics from './images';
import { useEffect, useState } from 'react';

const Bubbles = props => {
    
    let i = 0;
    let i2 = 0;

    const showSkill = () => {

        let bubbles = [2,7,0,5,6,1,3,4,9,8];
        let elems = document.querySelectorAll('.bubble1');
        
        if(i>bubbles.length-1) i = 0;
        
        let el = elems[bubbles[i]];

        el.style.animationPlayState = 'paused';
        el.style.border = 'none';
        el.firstChild.style.animation = 'bubble2 1s'
        el.style.boxShadow = 'unset';
        let pic = Object.keys(pics)

        setTimeout(() => {

            if(i2>pic.length-1) i2 = 0;
            let index = pic[i2];

            el.firstChild.style.animation = 'unset';
            el.innerHTML = `<img src=${pics[index]} />`;
            el.firstChild.style.animation = 'bubble3 10s';
            setTimeout(() => { el.style.animationPlayState = 'running' }, 500);
            i2++;
        }, 600);

        setTimeout(() => {
            el.style = '';
            el.innerHTML = '<div className="bubble2">#</div>';
            el.firstChild.classList.toggle('bubble2');
        }, 10000);

        i++;
    }

    useEffect(() => { window.onload = () => setInterval( showSkill, 2000 ) });

    return (
        <div className="background">

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            <div className="bubble1" >
                <div className="bubble2">#</div>
            </div>

            {props.children}

        </div>
    )
}


export default Bubbles;
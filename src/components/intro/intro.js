import React from 'react';
import './intro.css';
import headshot from '../../resources/headshot.jpg';
// import { Link } from 'react-scroll';
import { Element } from 'react-scroll';


// import { useRef } from 'react';

export const Intro = () => {
  // const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // }
  return (
    <Element name='intro'>
        <section id='intro'>
            <div className='intro-content'>
                <span className='greeting1'>Hey, Hello, Hi!</span>
                <span className='greeting2'>I'm Javi</span>
                <span className='intro-about'>
                    I'm a recent graduate from UMN
                </span>
            </div>
            <img src={ headshot } alt='headshot' className='bg-photo'/>
        </section>
    </Element>
  );
}

export default Intro;

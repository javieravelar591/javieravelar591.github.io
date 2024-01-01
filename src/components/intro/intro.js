import React from 'react';
import './intro.css';
import headshot from '../../resources/headshot.jpg';
import { Link } from 'react-scroll';
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
                <span className='greeting'>Hi,</span>
                <span className='intro-name'>I'm Javier Avelar</span>
                <span className='intro-about'>I'm a recent gradudate from</span>
                <span>the University of Minnesota</span>
            </div>
            <img src={ headshot } alt='headshot' className='bg-photo'/>
        </section>
    </Element>
  );
}

export default Intro;

import React from 'react';
import './about.css';
import { Element } from 'react-scroll';

export const About = () => {
    return (
      <Element name='aboutme'>
          <section id='aboutme'>
              <div className='intro-content'>
                    <h1 className='about-header'>A little bit about me!</h1>
                    <span className='about-span'>
                        Hello there! I'm a recent graduate from Computer Science graduate
                        from the University of Minnesota. My
                    </span>
              </div>
          </section>
      </Element>
    );
}

export default About;
import React from 'react';
import { useState, useEffect } from 'react';
import './about.css';
import { Element } from 'react-scroll';

export const About = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('aboutme');
            console.log(aboutSection);

            if(aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                const inViewPort = rect.top <= window.innerHeight / 2;
                setIsAnimated(inViewPort);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <Element name='aboutme'>
          <section id='aboutme'>
              <div className={`about-content ${isAnimated ? 'slide-up' : ''}`}>
                    <h1 className='about-header'>¡Hola! I'm Javi</h1>
                    <span className='about-span'>
                    I'm a passionate and collaborative developer on a mission to make technology more accessible. My experience in software development, coupled with a degree in Computer Science, equips me to create efficient, effective, and empathetic solutions. <br />
                    <h2>A little more about me:</h2>
                    {/* I'm a first-generation Latinx student who has recently completed a bachelor's degree in Computer Science. I grew up in an immigrant household with limited-English speaking parents. As a result,
                    I've witnessed firsthand the repercussions of non-accessible technology and unempathetic solutions. This fuels my commitment to creating solutions that break down barriers and serve diverse communities. */}
                    As a first-generation Latinx student, I bring a unique perspective shaped by my upbringing in an immigrant household. Witnessing the impact of non-accessible technology drives my commitment to breaking down barriers and serving diverse communities.
                    <br />
                    {/* As a tech enthusiast, I make it a point to stay on the pulse of the industry, constantly absorbing the latest news and trends. It's my way of staying connected to the dynamic landscape of innovation.
                    I am extremely interested in the field of Artificial Intelligence and its applications to increase the standard of living. */}
                    Beyond coding, I stay abreast of industry trends and emerging technologies, particularly in Artificial Intelligence. I'm fascinated by its potential to elevate our quality of life.
                    <br />
                    When I'm not immersed in the tech world, you'll find me engaged in the art of combat sports, skateboarding, or simply enjoying of a well-brewed cup of coffee. &#9749;
                    </span>
              </div>
          </section>
      </Element>
    );
}

export default About;
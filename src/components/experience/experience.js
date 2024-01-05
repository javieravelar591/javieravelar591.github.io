import React from 'react'
import { useState, useEffect } from 'react';
import './experience.css';
import '../portfolio/portfolio.css';
import blend from '../../resources/blend-logo.png'
import umn from '../../resources/goldy.png'
import { Element } from 'react-scroll';

export const Experience = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <Element name='experience'>
            <section id='experience'>
                <h1 className={`portfolio-header ${scrollPosition > 1000 ? 'slide-up' : ''}`}>And my professional experience</h1>
                <div class={`cards-div-exp  ${scrollPosition > 1000 ? 'slide-up' : ''}`}>
                    <div class='card'>
                        <div class='image'>
                            <img href="#" src= { blend } alt='blend-logo' />
                        </div>
                        <div class='content'>
                            <h3>Software Developer Intern</h3>
                            <p>The summer of 2023 I worked at Blend Interactive as a Software Developer Intern. There, I worked on several different web applications and I learned the ins-and-outs of working at a software firm.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='image'>
                            <img href="#" src= { umn } alt='blend-logo' />
                        </div>
                        <div className='content'>
                            <h3>ML Research Assistant</h3>
                            <p>As of the fall 2023 semester, I've been working as a research assistant at the UMN Networking Lab. I work alongside an inter-disciplinary team to fine-tune ML models, collect data, and visualize that data.</p>
                        </div>
                    </div>
                </div>
            </section>

        </Element>
    )
}

export default Experience;

import React from 'react';
import { useState, useEffect } from 'react';
import './portfolio.css';
import blend from '../../resources/blend-logo.png'
import skateboard from '../../resources/skateboard-icon.png'
import portfolio from '../../resources/portfolio.png'
import umn from '../../resources/goldy.png'
import skatesite from '../../resources/wahoo-skate2.png'
import pool from '../../resources/threadpool.png'
import { Element } from 'react-scroll';

export const Portfolio = () => {
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
        <Element name='portfolio'>
            <section id='portfolio'>
                <h1 className={`portfolio-header ${scrollPosition > 100 ? 'slide-up' : ''}`}>Here's some of my work</h1>
                <div className={`cards-div  ${scrollPosition > 200 ? 'slide-up' : ''}`}>
                    <div className='card'>
                        <div className='image'>
                            <a href='https://github.com/javieravelar591/wahoo-skate' target='_blank'>
                                <img src= { skatesite } alt='skate-logo' />
                            </a>
                        </div>
                        <div className='content'>
                            <h3>Wahoo Skate</h3>
                            <p>Wahoo Skate is a web application I created for a fictional skate shop. I designed both server-side and client-side using a number of different tools such as NodeJs, MySQL, PugJs, ExpressJs and more!</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='image'>
                            <a href='https://github.com/javieravelar591/thread-pool' target='_blank'>
                                <img href="#" src= { pool } alt='threadpool-logo' />
                            </a>
                        </div>
                        <div className='content'>
                            <h3>ThreadPool</h3>
                            <p>ThreadPool is a social media platform I designed from the ground up. Using tools such as NodeJS, bcrypt, MySQL, and more, users are able securely register accounts and login, create and edit new posts, and interact with other users' posts.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='image'>
                            <a href='https://github.com/javieravelar591/my-portfolio'>
                                <img href="#" src= { portfolio } alt='portfolio-logo' />
                            </a>
                        </div>
                        <div className='content'>
                            <h3>Portfolio Site</h3>
                            <p>This portfolio sites was one of my favorite projects because it allowed me to gain first-hand exposure to React while also enabling me to present my skills and experience in a more personalized way!</p>
                        </div>
                    </div>
                </div>
                <h1 className={`portfolio-header ${scrollPosition > 1000 ? 'slide-up' : ''}`}>And here's my professional experience</h1>
                <div class={`cards-div  ${scrollPosition > 1000 ? 'slide-up' : ''}`}>
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

export default Portfolio;
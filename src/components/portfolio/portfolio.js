import React from 'react';
import './portfolio.css';
import blend from '../../resources/blend-logo.png'
import skateboard from '../../resources/skateboard-icon.png'
import portfolio from '../../resources/portfolio.png'
import umn from '../../resources/goldy.png'
import skatesite from '../../resources/wahoo-skate2.png'
import pool from '../../resources/threadpool.png'
import { Element } from 'react-scroll';

export const Portfolio = () => {
  return (
    <Element name='portfolio'>
        <section id='portfolio'>
            {/* <div classNameName='portfolio-content'> comeback and change content name */}
                {/* <h1 classNameName='intro-header'>Things I've done</h1>
                <div classNameName='blend-section'>
                    <h2>Blend Interactive</h2>
                  <h2 classNameName='blend-header'> Software Developer Intern</h2>

                  <img src= { blend } alt='blend-icon' classNameName='blend-logo' />
                </div>
                <div classNameName='blend-section'>
                  <h2> UMN Networking Lab </h2>
                  <h2> ML Research Assistant</h2>
                  <img src= { cse } alt='blend-icon' classNameName='blend-logo' />
                </div>
                <h2 classNameName='project-header'>My Favorite Projects</h2>
                <div classNameName='projects-section'>
                    <a classNameName='projectListItem'>
                        <img classNameName='skateboard-icon' alt='skateboard-icon' src= { skateboard }/>
                    </a>
                    <a href='https://github.com/javieravelar591/thread-pool' classNameName='projectListItem'>
                        <img classNameName='thread-pool' alt='pool-icon' src= { pool } />
                    </a>
                    <a classNameName='projectListItem'>
                        <img classNameName='portfolio' alt='portfolio-icon' src= { folder } />
                    </a>
                </div> */}
            {/* </div> */}
            <div className='cards-div'>
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
                            <img href="#" src= { pool } alt='blend-logo' />
                        </a>
                    </div>
                    <div className='content'>
                        <h3>ThreadPool</h3>
                        <p>ThreadPool is a social media platform I designed from the ground up. Using tools such as NodeJS, bcrypt, MySQL, and more, users are able securely register accounts and login, create and edit new posts, and interact with other users' posts.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='image'>
                        <a href='https://github.com/javieravelar591/thread-pool' target='_blank'>
                            <img href="#" src= { portfolio } alt='blend-logo' />
                        </a>
                    </div>
                    <div className='content'>
                        <h3>Portfolio Site</h3>
                        <p>My portfolio site was a super fun project as it was the first time I got exposure to React and it allowed me to present my skills and experiences in a more personalized way!</p>
                    </div>
                </div>
            </div>
            <div className='cards-div'>
                <div className='card'>
                    <div className='image'>
                        <img href="#" src= { blend } alt='blend-logo' />
                    </div>
                    <div className='content'>
                        <h3>Software Developer Intern</h3>
                        <p>The summer of 2023 I worked at Blend Interactive as a Software Developer Intern. There, I worked on several different web applications and I learned the ins-and-outs of working at a software firm.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='image'>
                        <img href="#" src= { umn } alt='blend-logo' />
                    </div>
                    <div className='content'>
                        <h3>This is content</h3>
                        <p>DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    </div>
                </div>
            </div>
        </section>
    </Element> 
  )
}

export default Portfolio;
import SkillsAndTools from './Skills&Tools';

import project1 from '../assets/projects/project-1.png';
import project2 from '../assets/projects/construction.png';
import project3 from '../assets/projects/quiz.png';
import project4 from '../assets/projects/shopping.png';
import project5 from '../assets/projects/weather.png';
import project6 from '../assets/projects/movie.png';
import project7 from '../assets/projects/auto-shop.png';


// icons
import html from '../assets/html-5.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import react from '../assets/structure.png';

import photoshop from '../assets/photoshop.png';
import illustrator from '../assets/illustrator.png';

export default function (){

    return (
        <div className='portfolio-section' id="portfolio-section">
            <div className='project'>
                <a href="https://space-travel-agency-luka.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={project1}/>
                </a>
                <h6>Space Travel Agency</h6>
                <p className='project-description'>User needs to signup, fill out the form, scroll to accept, navigate website to see destinations</p>
                <SkillsAndTools 
                    skill1={html} 
                    skill1Name='HTML' 
                    skill2={css} 
                    skill2Name='CSS'
                    skill3={react}
                    skill3Name='React'
                    tool1={photoshop}
                    tool2={illustrator}
                />
            </div>
            <div className='project'>
                <a href="https://construction-company-luka.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={project2}/>
                </a>
                <h6>Construction Company</h6>
                <p className='project-description'>User can fill out the form to get an email for a free construction estimate, bunch of image sliders, projects, reviews...</p>
                <SkillsAndTools 
                    skill1={html} 
                    skill1Name='HTML' 
                    skill2={css} 
                    skill2Name='CSS'
                    skill3={react}
                    skill3Name='React'
                    tool1={photoshop}
                    tool2={illustrator}
                />
            </div>
            <div className='project'>
                <a href="https://quiz-app-luka.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={project3}/>
                </a>
                <h6>Quiz game</h6>
                <p className='project-description'>Guess the correct answer before the timer is out, at the end look at the results</p>
                <SkillsAndTools 
                    skill1={html} 
                    skill1Name='HTML' 
                    skill2={css} 
                    skill2Name='CSS'
                    skill3={react}
                    skill3Name='React'
                    tool1={photoshop}
                    tool2={illustrator}
                />
            </div>
            <div className='project'>
                <a href="https://shopping-cart-luka.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={project4}/>
                </a>
                <h6>Shopping Cart</h6>
                <p className='project-description'>Choose what clothes you want to purchase, add them to the cart and checkout</p>
                <SkillsAndTools 
                    skill1={html} 
                    skill1Name='HTML' 
                    skill2={css} 
                    skill2Name='CSS'
                    skill3={react}
                    skill3Name='React'
                    tool1={photoshop}
                    tool2={illustrator}
                />
            </div>
            <div className='project'>
                <a href="https://auto-shop-rayan.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={project7}/>
                </a>
                <h6>Auto Shop</h6>
                <p className='project-description'>Full-service Land Rover & Jaguar auto shop with a dynamic diagonal intro, interactive sliders, and smooth-scroll navigation for exploring services, team, reviews, and contact.</p>
                <SkillsAndTools 
                    skill1={html} 
                    skill1Name='HTML' 
                    skill2={css} 
                    skill2Name='CSS'
                    skill3={react}
                    skill3Name='React'
                    tool1={photoshop}
                    tool2={illustrator}
                />
            </div>
            <div className='project'>
                <a href="https://weather-app-luka.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={project5}/>
                </a>
                <h6>Weather App</h6>
                <p className='project-description'>Look at the time, date and weather anywhere in any city, using weather API</p>
                <SkillsAndTools 
                    skill1={html} 
                    skill1Name='HTML' 
                    skill2={css} 
                    skill2Name='CSS'
                    skill3={js}
                    skill3Name='JavaScript'
                    tool1={photoshop}
                    tool2={illustrator}
                />
            </div>
            <div className='project'>
                <a href="https://movie-app-luka.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={project6}/>
                </a>
                <h6>Movie App</h6>
                <p className='project-description'>Search through movies using API</p>
                <SkillsAndTools 
                    skill1={html} 
                    skill1Name='HTML' 
                    skill2={css} 
                    skill2Name='CSS'
                    skill3={js}
                    skill3Name='JavaScript'
                    tool1={photoshop}
                    tool2={illustrator}
                />
            </div>
        </div>
    )
}
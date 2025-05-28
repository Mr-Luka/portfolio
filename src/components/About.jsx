import luka from '../assets/luka-me.jpg'

export default function About(){

    return (
        <>
            <div className='about' id="about-section">
                <div className='about-me'>
                    <h4>About me:</h4>
                    <div className='image-and-text-about'>
                        <img src={luka} alt='luka image' />
                        <div>
                        <p>Hi, I’m Luka Pavlovski — a frontend developer who loves solving problems, building interactive web apps, and constantly learning new skills. I’ve completed courses from Skillcrush, Udemy, Wes Bos, and Traversy Media, and combined them with hands-on experience through self-taught projects.
                            <br/>
                            <br/>
                            I’ve built a range of projects including a construction company website, a space travel agency app, a movie browser, and fun games like tic-tac-toe and “Stop the Timer.” I'm passionate about creating clean, responsive, and engaging user experiences using JavaScript and React.
                            <br/>
                            <br/>
                            Before transitioning into tech, I moved from <strong>Serbia</strong> to Los Angeles and I have spent 13 years as a massage therapist — founding and running a successful spa business where I handled everything from marketing to client care to web design. That experience shaped my strong work ethic, creativity, and ability to build things from the ground up.
                            <br/>
                            <br/>
                            Outside of coding, I’m a proud Digimon fan, a dedicated vegan, and someone who avoids sugar and processed food. I stay active and always strive for growth — in health, tech, and life.
                            <br/>
                            <br/>
                            I’m currently looking for a frontend developer role where I can contribute, grow, and build meaningful digital experiences. Let’s connect!
                            <br/>
                        </p>
                    </div>
                </div> 
                <div className='skills'>
                    <p className='skills-p'>Skills:</p>
                    <ol>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>Git and the command line</li>
                        <li>GitHub</li>
                        <li>Version Control</li>
                        <li>FlexBox</li>
                        <li>Media Queries</li>
                        <li>Responsive Typography</li>
                        <li>APIS</li>
                        <li>Manupilate the DOM</li>
                        <li>Vanila JavaScript</li>
                        <li>ES6</li>
                        <li>JSX</li>
                        <li>Managing Data Flow</li>
                    </ol>
                    <p className='tools-text'>
                    Tools:
                    </p>
                    <p>
                    Chrome DevTools, Text editors, Git, GitHub, Photoshop, Adobe Illustrator, CodeSandbox.
                    </p>
                </div>
                </div>
            </div>
        </>
    )
}
                    
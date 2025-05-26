export default function SkillsAndTools({skill1, skill1Name, skill2, skill2Name, skill3, skill3Name, tool1, tool2}){

    return (
        <>
            <div className='built-with'>
                <h3>Skills:</h3>
                <div>
                    <div>
                        <img src={skill1}/>
                        <p>{skill1Name}</p>
                    </div>
                    <div>
                        <img src={skill2}/>
                        <p>{skill2Name}</p>
                    </div>
                    <div>
                        <img src={skill3}/>
                        <p>{skill3Name}</p>
                    </div>
                </div>
            </div>
            <div className='tools'>
                <h3>Tools:</h3>
                <div>
                    <div>
                        <img src={tool1} alt='photoshop icon'/>
                        <p>Photoshop</p>
                    </div>
                    <div>
                        <img src={tool2} alt='adobe illustrator'/>
                        <p>Illustrator</p>
                    </div>
                </div>
            </div>
        </>
    )
}
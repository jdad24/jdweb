import './index.scss';

const About = () => {
    return (
        <div className="about-container">
            <div className='background-container'>
                <div className='title'>Profile</div>
                <p>
                    I have a unique background in fullstack software development, most particularly in web development and iOS Mobile Application Development.
                    I deeply enjoy designing applications and having them come to life, something I have done extensively throughout my career.
                </p>
                <p>
                    I began my education at Baylor Univesity, majoring in Management Information Systems and graduating in 2013. After graduation, I decided
                    to pursue my Master's in Computer Science, where I graduated in 2019.
                </p>
            </div>
            <div className='interests-container'>
                <div className='title'>Interests</div>
                <div className='interest'>Basketball</div>
                <div className='interest'>Game Dev</div>
                <div className='interest'>iOS Dev</div>
                <div className='interest'>Artificial Intelligence</div>
            </div>
        </div>
    )
}

export default About;
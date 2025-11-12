import './index.scss';
import Baylor from '../../assets/Baylor.jpeg'
import UTA from '../../assets/UTA-dark.png'
import Kobe from '../../assets/kobe.gif'
import Finance from '../../assets/finance.jpeg'

const About = () => {
    return (
        <div className="about-container">
            <div className='background-container'>
                <div className='title'>About Me</div>
                <p>
                    I began my education at Baylor Univesity, graduating in 2013 with a major in Management Information Systems. After graduation, I decided
                    to pursue my Master's in Computer Science at the University of Texas in Arlington, where I graduated in 2019. During my Master's,
                    I specialized in Articial Intelligence, Databases, and Networking.
                </p>
                <p>
                    In my free time, I enjoy working on a side project, keeping up with financial markets, playing basketball, or watching a good show/movie.
                </p>
            </div>
            <div className='img-container'>
                <img className='interest-img' src={Baylor} />
                <img className='interest-img' src={UTA} />
                <img className='interest-img' src={Kobe} />
                <img className='interest-img' src={Finance} />
            </div>
        </div>
    )
}

export default About;
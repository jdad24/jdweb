import './Home.css'
import Joshua from '../Assets/Joshua.png'

const Home = () => {
    return (
    <div className = "home-container">
        <div className="name-container">
            Joshua Dadson
        </div>
        <div className="image-container">
            <img className="image" src={Joshua} alt=""/>
        </div>
        <div className='intro-container'>My entry into the professional software dev space began with an internship at Mr. Cooper (a loan origination company) summer of 2019. I completed 
            this internship in tandem with my Master's degree in Computer Science. During this internship, I was first exposed to ReactJS, one of the most popular
            JavaScript frameworks used for web application development. Taking what I learned from this internship, I managed to land a subsequent internship
            with IBM that following August, where I contributed to a plethora of ReactJS and NodeJS based projects (dashboards, api management, asset catalogs). 
            I also introduced myself to mobile application development during this period, learning Swift and its surrounding tools, such as XCode, UIKit, SwiftUI,
            and SpriteKit (game dev - so much fun!). Cloud services were also a focal point in my role, with IBM Cloud being the cloud service utilized.
            In December 2019, I completed my Master's and was hired full-time with IBM, where I continued to contributed with web app dev and even made a 
            mobile iOS app for my team. In March of 2020, I took on my current role as a Cloud Engineer.
        </div>
    </div>
    )
}

export default Home;
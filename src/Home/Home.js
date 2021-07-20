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
    </div>
    )
}

export default Home;
import './Education.css'
import Baylor from '../Assets/Baylor.jpeg'
import UTA from '../Assets/UTA.png'

const Education = () => {
    return (
        <div className="education-container">
            <div className="title-container">Education</div>
            <ul>
                <li><b>Baylor University</b> - BBA in Management Information Systems (2013-2017) </li>
                <li><b>University of Texas at Arlington</b> - Master of Science in Computer Science (2018-2019) </li>
            </ul>

            <div className="image-container">
                <img src={Baylor}/>
                <img src={UTA}/>
            </div>

            <div><b>Contact Information</b></div>
            <ul>
                <li>Phone: 817-914-1866</li>
                <li>Email: joshuadadson@yahoo.com</li>
            </ul>
        </div>
    )
}

export default Education;
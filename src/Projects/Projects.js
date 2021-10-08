import './Projects.css'
import Resume from '../Assets/Resume.docx'

const Projects = () => {
    return (
        <div className="projects-container">
            <div>
                <div className="title-container">Notable Skills</div>
                <ul>
                    <li>Javascript - ReactJS and NodeJS</li>
                    <li>Swift and XCode - mostly familiar with UIKit but 
                        have educational experience with SwiftUI
                    </li>
                    <li>Cloud Services</li>
                    <li>Docker, Kubernetes, and Redhat Openshift - 
                        image and container management
                    </li>
                </ul>

                <div className="title-container">Notable Projects</div>
                <div>These projects can be found at my github (linked below). 
                    Github repository name is used for current project name. 
                    Many projects not in my personal Github are in my enterprise account - please feel free to inquire.</div>
                <ul>
                    <li><b>AIPM_IOS (Swift):</b> Application created to display Yaskawa and Kuka robot telemetry data 
                        (torque, temperature, and arm position) using MQTT. Graphing library used to show 
                        relation between these 3 variables. Made calls to Node-RED APIs in order to show
                        image processing data. Used Rest APIs in order receive sample work order information. 
                        Based on a ReactJS app I also contributed to.</li>
                    <li><b>Pong-Swift (Swift): </b>Personal side-project still in development. End goal is an  
                        online multiplayer pong game with added power ups to change the dynamics of the matches.</li>
                    <li><b>AIPM-Think (ReactJS): </b> Application used to show robot telemtry data (temperature, torque, and
                    position) - used a 3rd party graphing library.</li>
                    <li><b>React-AIPM-Admin-Console (ReactJS): </b> Application developed to manage Yaskawa 
                        and Kuka robot operations (turning on/off robots, turning on/off image processing, etc. 
                        Created a login system using cookies and sessions in the back-end.</li>
                </ul>
                <div> <a href="https://github.com/jdad24">Link to my personal Github</a></div>
                <div><b><a href={Resume} >Click to download my resume!</a></b></div>
            </div>
        </div>
    )
}

export default Projects;
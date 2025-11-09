import './index.scss'
import { useState } from 'react'

const Experience = () => {
    const [overflowFlag, setOverflowFlag] = useState(false)
    const stackList = ['React.js', 'Node.js', 'Swift', 'JavaScript', 'Python', 'SQL']
    const jobHistory = [
        {
            title: "Lead ReactJS UI Developer",
            company: "IBM",
            date: "February 2023 - Current",
            description: <ul>
                <li>Lead the development of a web dashboard application focused on giving operational team users efficient access to incident tracking data and troubleshooting operations.</li>
                <li>Manage and enhance enterprise level web application giving access to details on various cloud resources.</li>
                <li>Implement Docker for containerized application deployment on RedHat OpenShift and IBM Cloud VSIs.</li>
                <li>Integrate microservice architecture for enhanced code maintainability and debugging.</li>
                <li>Maintain and update SQL databases handling application data.</li>
                <li>Implement SSL/TLS for user authentication system.</li>
            </ul>
        },
        {
            title: "Frontend Developer",
            company: "IBM",
            date: 'March 2022 - February 2023',
            description: <ul>
                <li>Developed and managed an internal web dashboard used for cloud resource metrics analysis and general resource specifications </li>
                <li>Utilized GraphQL to query data for display in the dashboard</li>
                <li>Developed mainly in React.js and Node.js</li>
            </ul>
        },
        {
            title: "Cloud Engineer",
            company: "IBM",
            date: 'January 2021 - March 2022',
            description: <ul>
                <li>Communicated and consulted with clients via a presales approach on IBM products, discussing how business needs would be met.</li>
                <li>Completed Redhat Openshift certification training</li>
            </ul>
        },
        {
            title: "IT Specialist",
            company: "IBM",
            date: 'August 2019 - June 2020',
            description: <ul>
                <li>Led the development of an iOS Swift Mobile App serving as another entry point to our sales demos. </li>
                <li>Developed a web dashboard displaying the real-time telemetry data of our lab robots</li>
                <li>Developed and maintained a ReactJS web application displaying our sales catalog.</li>
            </ul>
        }
    ]
    const renderStackItems = (items) => {
        return (
            <div className='stack-container'>
                {items.map(item =>
                    <div className='stack-item'>{item}</div>
                )}
            </div>
        )
    }

    const renderJobs = (jobs) => {
        return (
            jobs.map(job =>
                <div className='job'>
                    <div className='job-title'>{job.title}</div>
                    <div className='company'>{job.company}</div>
                    <div className='date'>{job.date}</div>
                    <div className='description'>{job.description}</div>
                </div>
            )
        )
    }
    return (
        <div className="experience-container">
            <div className='header'>
                <div className="title">Experience</div>
                <div className='subtitle'>6+ years building scalable web and iOS applications </div>
                <div className='stack-title'>Primary Stack</div>
                {renderStackItems(stackList)}
                <div className='resume' onClick={() => downloadResume()}>Download Resume</div>
            </div>
            <div className='main-section'>
                {renderJobs(jobHistory)}
            </div>
        </div>
    )
}

const downloadResume = () => {
    let link = document.createElement('a')
    link.download = "Resume"
    link.href = 'src/assets/resume.docx'
    link.click()
}

export default Experience;
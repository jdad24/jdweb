import './index.scss'

const Experience = () => {
    const stackList = ['React.js', 'Node.js', 'Swift', 'JavaScript', 'Python']
    const jobHistory = [
        {
            title: "Lead ReactJS UI Developer",
            company: "IBM",
            date: "February 2023 - current",
            description: "Lead React.js developer for internal web application handling IBM cloud resource data collection and management."
        },
        {
            title: "Frontend Developer",
            company: "IBM",
            date: 'August 2021 - February 2023',
            description: "Insert description"
        },
        {
            title: "Cloud Engineer",
            company: "IBM",
            date: 'October 2020 - August 2021',
            description: "Insert description"
        },
        {
            title: "IT Specialist",
            company: "IBM",
            date: 'August 2019 - June 2020',
            description: "Insert description"
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
            <div className="title">Experience</div>
            <div className='subtitle'>6+ years building scalable web and iOS applications </div>
            <div className='section-1'>
                <div className='stack-title'>Primary Stack</div>
                {renderStackItems(stackList)}
            </div>
            <div className='section-2'>
                {renderJobs(jobHistory)}
            </div>
        </div>
    )
}

export default Experience;
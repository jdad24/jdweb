import './index.scss'

const Experience = () => {
    const stackList = ['React.js', 'Node.js', 'Swift', 'JavaScript', 'Python']
    const renderStackItems = (items) => {
        return (
            <div className='stack-container'>
                {items.map(item =>
                    <div className='stack-item'>{item}</div>
                )}
            </div>
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
                <div className='job'>
                    <div className='job-title'>Lead ReactJS UI Developer</div>
                </div>
                <div className='job'>
                    <div className='job-title'>Frontend Developer</div>
                </div>
                <div className='job'>
                    <div className='job-title'>Cloud Engineer</div>
                </div>
                <div className='job'>
                    <div className='job-title'>IT Specialist</div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
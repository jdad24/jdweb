import './index.scss'
import { useNavigate } from 'react-router'

const NavigationBar = ({ items = [] }) => {
    const navigate = useNavigate()

    const renderItems = (items) => {
        return (
            <div className='nav-items-container'>
                {
                    items.map((item, index) =>
                        <div key={index} className='nav-items' onClick={() => navigate(`/${String(item).toLowerCase()}`)}>{item}</div>
                    )
                }
            </div>
        )
    }

    return (
        <div className="nav-container">
            <div className='nav-title'>My Portfolio</div>
            {renderItems(items)}
        </div>
    )
}

export default NavigationBar;
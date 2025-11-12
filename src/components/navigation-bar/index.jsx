import './index.scss'
import { useNavigate } from 'react-router'

const NavigationBar = ({ items = [] }) => {
    const navigate = useNavigate()

    const renderItems = (items) => {
        return (
            <div className='nav-items-container'>
                {
                    items.map((item, index) =>
                        <div key={index} className='nav-item' onClick={() => navigate(`/jdweb/${String(item.name).toLowerCase()}`)}>
                            <img src={item.picture} />
                            {item.name}
                        </div>
                    )
                }
            </div>
        )
    }

    return (
        <div className="nav-container">
            <div className='nav-title'>JD</div>
            {renderItems(items)}
        </div>
    )
}

export default NavigationBar;
import './Header.css'
// import { useState } from 'react'
import { Link} from 'react-router-dom'

const Header = (props) => {
    // const [activeKey, setActiveKey] = useState('/home')

    return (
        <div className="header-container">
            <Link className="link-container" to="/home">Home</Link>
            <Link className="link-container" to="/projects">Projects</Link>
            <Link className="link-container" to="/education">Education/Contact</Link>


            {/* <Nav
            fill
            // variant="tabs"
            // className="justify-content-center"
            defaultActiveKey={activeKey}
        >
            <Nav.Item onClick={() => setActiveKey('/home')}>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => setActiveKey('/projects')}>
                <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => setActiveKey('/filler2')}>
                <Nav.Link href="/filler2">Filler2</Nav.Link>
            </Nav.Item>
        </Nav> */}
        </div>
    )
}

export default Header;
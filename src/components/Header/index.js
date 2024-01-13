import "./styles.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  // const [activeKey, setActiveKey] = useState('/home')
  const [state, setState] = useState({});
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, path: location.pathname }));
  }, []);

  return (
    <div className="header-container">
      <div id="name">JD</div>
      <div className="link-container">
        <Link
          className="link"
          to="/about"
          style={{
            color: location.pathname == "/about" ? "blue" : "white",
          }}
        >
          What I Do
        </Link>
        <Link
          className="link"
          to="/portfolio"
          style={{
            color: location.pathname == "/portfolio" ? "blue" : "white",
          }}
        >
          Portfolio
        </Link>
        <Link
          className="link"
          to="/contact"
          style={{
            color: location.pathname == "/contact" ? "blue" : "white",
          }}
        >
          Contact
        </Link>
      </div>
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
  );
};

export default Header;

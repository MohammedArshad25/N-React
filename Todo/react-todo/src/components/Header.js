
import { Link } from "react-router-dom";

const Header = () => {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };


    return (
        <div className="header">
        <div>
            <p>this is an example of routing</p>
            <Link to="/" style={linkStyle} >Home</Link>
          <Link to="/page1" style={linkStyle} >page1</Link>
          <Link to="/page2" style={linkStyle}>page2</Link>
        </div>
      </div>
    )
}

export default Header;

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {Link} from "react-router-dom"
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <section>
      <div className="container-navbar">
        <div className="navbar">
          <img src="./Images/logo.png" alt="" />
        </div>

        <div className="Navbar-icon">
          <h2>Follow Us On</h2>
          <a
            href="https://www.facebook.com/your-page-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.youtube.com/your-channel-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={30} />
          </a>
        </div>
        <div className="navbar-form">
          <p>Call Us Now : +91-95388 78795, +91-95388 78799</p>
          <input type="text" /> <button className="btn-seach">Serch</button>
        </div>
      </div>
      <nav className="conference-navbar">
        <ul>
          <Link to="/conferences">EVENTS</Link>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

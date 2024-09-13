import { Link } from "react-router-dom";
import DH_logo from '/images/DH.png'
import FB_logo from '/images/ico-facebook.png'
import IG_logo from '/images/ico-instagram.png'
import TT_logo from '/images/ico-tiktok.png'
import WPP_logo from '/images/ico-whatsapp.png'

const Footer = () => {
  return (
    <footer>
        <Link to="https://digitalhouse.com">
          <p>Powered by</p>
          <img src={DH_logo} alt="DH-logo" className="dh-logo" />
        </Link>
        <div className="footer-icons">
        <Link to="https://facebook.com">
          {" "}
          <img src={FB_logo} alt="" />{" "}
        </Link>
        <Link to="https://instagram.com">
          {" "}
          <img src={IG_logo} alt="" />{" "}
        </Link>
        <Link to="https://tiktok.com">
          {" "}
          <img src={TT_logo} alt="" />{" "}
        </Link>
        <Link to="https://whatsapp.com">
          {" "}
          <img src={WPP_logo} alt="" />{" "}
        </Link>
        </div>
    </footer>
  )
}

export default Footer

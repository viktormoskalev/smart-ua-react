import './footer.scss';
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom';

function Footer() {
    return (

<footer className="footer">
      <div className="container footer-container">

   
        <Link className="footer-logo "  to="/">
            <img src={logo} alt="Logo"/>
            </Link>

        <p className="footer-logo "  >Copyright © 2021 SMART-UI. All Rights Reserved.</p>
      </div>

</footer>
    );
}

export default Footer;
import './footer.scss';
import logo from '../../img/logo.png'
function Footer() {
    return (

<footer className="footer">
      <div className="container footer-container">

        <a className="footer-logo " href="/">
          <img src={logo} alt="logo SMART-UI"/>
        </a>

        <p className="footer-logo "  >Copyright © 2021 SMART-UI. All Rights Reserved.</p>
      </div>

</footer>
    );
}

export default Footer;
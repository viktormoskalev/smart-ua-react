import './nav.scss';
import logo from '../../img/logo.png'

function Nav(props){

    return (

<nav className="nav">
    <div className="nav-menu">
    <div className="nav-stick-top">
        <div className="nav-item hide-l nav-logo"><img src={logo} alt="logo"/></div>
       
        
        <a href="#aboutus" className="nav-item"> About Us</a>
        <a href="#benefits" className="nav-item"> Benefits</a>
        <a href="#people" className="nav-item"> Our People</a>
        <a href="#join" className="nav-item"> Join!</a>

        </div>
        <div className="nav-item hide-l sign-up-nav ">
        <a href="#test1" className="sign-up-nav-button"> Sign up</a>
        </div>
    </div>
</nav>

    );
}

export default Nav
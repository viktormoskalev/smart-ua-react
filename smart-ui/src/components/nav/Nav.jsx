import './nav.scss';
import logo from '../../img/logo.png'
import {Link } from 'react-router-dom';


function Nav(props){
const navList= {
    about:"About Us",
    benefits:"Benefits",
    people:"Our People",
    join:"Join",
 }


function closeNav(){
    props.n("");
}


let navRender = Object.keys(navList).map( function(i){
  return  <a href={"#"+i} key={i} onClick={closeNav} className="nav-item"> {navList[i]}</a>
});
    
    return (

<nav className="nav">
    <div className="nav-menu">
    <div className="nav-stick-top">
        <div className="nav-item hide-l nav-logo"><img src={logo} alt="logo"/></div>
       
        {navRender}
         </div>
        <div className="nav-item hide-l sign-up-nav ">
             <Link className="sign-up-nav-button"  to="/Signup">Sign Up</Link>
        </div>
    </div>
</nav>

    );
}

export default Nav
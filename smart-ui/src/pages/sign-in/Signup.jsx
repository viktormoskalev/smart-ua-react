import './Signup.scss';

function SignIn() {
return(
<div className="login-full-height">
    <div className="logInform">
        <h4>Sign-In</h4>
        <form>
            <label htmlFor="name">Login:</label>
            <input type="name" />


            <label htmlFor="phone">Phone :</label>
            <input type="name" />


            <label htmlFor="username">password:</label>
                    <input type="password" />


            <div id="lower">
          
              
                <input type="submit" value="SignIn" />
            </div>
        </form>
    </div>
</div>



);
}

export default SignIn;
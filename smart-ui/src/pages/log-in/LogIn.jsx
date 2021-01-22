import './logIn.scss';

function Login() {
return(
<div className="login-full-height">
    <div className="logInform">
        <form>
            <label htmlFor="name">Логин:</label>
            <input type="name" />
            <label htmlFor="username">Пароль:</label>
       
            <input type="password" />
            <div id="lower">
                <input type="checkbox" />
                <label className="check" htmlFor="checkbox">Запомнить меня</label>
                <input type="submit" value="Войти" />
            </div>
        </form>
    </div>
</div>



);
}

export default Login;
import {Switch, Route} from 'react-router-dom';
import Login from './log-in/LogIn';
import SignUp from './sign-in/Signup';
import MainPage from './index/MainPage';
function Main() {
    return(
        <main>
          
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact  component={MainPage}/>
          </Switch>
        </main>
    )
}

export default Main;



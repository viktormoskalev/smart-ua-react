import Header from './components/header/Header';
import Footer from './components/footer/Footer';


import Main from './pages/Main';
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Router>

<Header/>
<Main/>
<Footer/>




</Router>


    </div>
  );
}

export default App;

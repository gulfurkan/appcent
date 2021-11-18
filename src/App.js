import "./App.css";
import Home from './pages/home';
import About from './pages/about';
import Details from './pages/detail';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Constants } from './constants';
function App() {
    return (
        <Router>
            <div className="App">
                <header className="App header">
                    <Link style={{ textDecoration: "none" }} to="/"><img src={Constants.logo} className="App header-logo" alt="React Logo" /></Link>
                    <div className="App header-menu">
                        <Link to="/" className="App header-menu-button"> HOME</Link>
                        <Link to="/about" className="App header-menu-button"> ABOUT</Link>
                    </div>
                </header>
                <div className="App content">

                    <Switch >
                        <Route path='/' exact component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/movie/:id' component={Details} />
                    </Switch>

                </div>
                <div className="App footer">
                    <div className="row">
                        <img src={Constants.footerLogo} alt="React Logo" className="App footer logo" />
                    </div>
                </div>
            </div>

        </Router >
    );
}

export default App;

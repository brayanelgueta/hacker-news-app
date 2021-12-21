
import './App.css';
import { BrowserRouter as Router, Switch,Route, NavLink } from 'react-router-dom';
//Components

import Home from './pages/Home'
import Faves from './pages/Faves';

function App() {


  return (
    <div className="bg-color">
       <Router>
        <div className="header">
            <h1>HACKER NEWS</h1>
        </div>

        <div className="router">
          <div className="links">
            <NavLink exact 
              to="/" 
              className="link" 
              activeClassName='activeLink'
            > All</NavLink>
            <NavLink to="/faves" className="link"activeClassName='activeLink' >Faves</NavLink>
          </div>
        </div>
        
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/faves">
              <Faves />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;

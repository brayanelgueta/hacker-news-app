
import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Switch,Route, Link } from 'react-router-dom';
//Components
import Filter from './components/filters/Filter';
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
            <Link to="/" className="link"> All</Link>
            <Link to="/faves" className="link">Faves</Link>
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

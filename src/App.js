import React  from 'react';
import './App.css';
import NavBar from './components/nav-bar/index.js';
import 'h8k-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

const title = "Navigation Bar";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' component={props => <Home {...props} />} />
          <Route path='/about' component={props => <About {...props} />} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

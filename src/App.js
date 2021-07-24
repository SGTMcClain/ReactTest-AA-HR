import React  from 'react';
import './App.css';
import NavBar from './components/nav-bar/index.js';
import 'h8k-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import News from './pages/news';

const title = "Navigation Bar";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
        <NavBar/>
      {/* <Router>
        <Switch>
          <Route path='/' component={props => <Home {...props} />} />
          <Route path='/about' component={props => <About {...props} />} />
          <Route path='/contact' component={props => <Contact {...props} />} />
          <Route path='/news' component={props => <News {...props} />} />
        </Switch>
      </Router> */}
      
    </div>
  );
}

export default App;

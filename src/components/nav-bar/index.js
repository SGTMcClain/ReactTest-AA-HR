import React  from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../pages';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import News from '../../pages/news';

export default function NavBar() {

  
  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <a to='/'>Home</a>
          <a>News</a>
          <a>Contact</a>
          <a to='/about'>About</a>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span id='output'>
          <Router>
            <Switch>
              <Route path='/' component={props => <Home {...props} />} />
              <Route path='/about' component={props => <About {...props} />} />
              <Route path='/contact' component={props => <Contact {...props} />} />
              <Route path='/news' component={props => <News {...props} />} />
            </Switch>
          </Router>
          </span>
        </section>
      </div>
    </div>
  );
}
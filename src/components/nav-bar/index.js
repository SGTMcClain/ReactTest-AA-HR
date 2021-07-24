import React  from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function NavBar() {

  
  return (
    <Router>
      <div className="layout-column justify-content-center align-items-center">
        <div className="layout-row justify-content-around align-items-center mt-20 links"
            data-testid="navigation-tabs">
            <Link to = "/">Home</Link>
            <Link to = "/news">News</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/about">About</Link>
        </div>

        <div className="card w-20 ma-0">
          <section className="card-text" data-testid="tab-content">
            <span>
              <Switch>
                <Route path="/" component = { Home } />
                <Route path="/about" component = { About } />
                <Route path="/contact" component = { Contact } />
                <Route path="/news" component = { News } />
              </Switch>
            </span>
          </section>
        </div>
      </div>
    </Router>
  );
}

function Home(){
  return <div>HOME PAGE</div>
}
function About(){
  return <div>ABOUT PAGE</div>
}
function Contact(){
  return <div>CONTACT PAGE</div>
}
function News(){
  return <div>NEWS PAGE</div>
}
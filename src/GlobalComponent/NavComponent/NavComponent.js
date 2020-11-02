import React, {Component} from 'react';
import HomeComponent from '../../HomeComponent/HomeComponent';
import AboutUs from '../../AboutUs/AboutUs';
import ContactUs from '../../ContactUs/ContactUs';

import PageNotFound from '../../PageNotFound/PageNotFound';

import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

class NavComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render(){
    const show = (this.state.menu) ? "show" : "" ;
    return(
      <Router>
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-12">
            {/* <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink exact activeClassName = "active" className = "nav-link" to = "/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName = "active" className = "nav-link" to = "/aboutus">About Us</NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink activeClassName = "active nav-link" className = "nav-link" to = "/contactus">Contact Us</NavLink>
              </li>
            </ul> */}
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
          <button className="navbar-toggler" type="button"  onClick={ this.toggleMenu }>
            <span className="navbar-toggler-icon"></span>
          </button>

  <div className={"collapse navbar-collapse " + show} id="navbarSupportedContent" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink exact activeClassName = "active" className = "nav-link" to = "/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName = "active" className = "nav-link" to = "/aboutus">About Us</NavLink>
      </li>
      <li className="nav-item">
      <NavLink activeClassName = "active nav-link" className = "nav-link" to = "/contactus">Contact Us</NavLink>
      </li>
   
    </ul>
    
  </div>
</nav>
            <Switch>
              <Route exact path = '/' component = {HomeComponent} />
              <Route path = '/aboutus' component = {AboutUs} />
              <Route path = '/contactus' component = {ContactUs} />
              <Route component = {PageNotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
)

}
}
export default NavComponent ;
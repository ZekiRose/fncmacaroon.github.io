import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Account from "./Account";
import HeaderIMG from "./HeaderIMG.PNG"


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <img src="https://1000logos.net/wp-content/uploads/2016/10/Best-Buy-logo-2.png" alt="Best Buy Logo" width="200" height="133"></img>
          <img src={HeaderIMG} alt="HeaderIMG" width="1000" height="180"></img>

          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/account">Account</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/account" component={Account}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

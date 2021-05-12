import React, { Component } from "react";
import logo from "./logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        {/* <h1 className="navbar-brand ml-2 pl-3" >Contenterra</h1> */}
        <img src={logo} alt="logo" className="logo" />
        <div className="mx-auto">
          <h3 >Welcome to Our Home Page !</h3>
        </div>
      </nav>
    );
  }
}

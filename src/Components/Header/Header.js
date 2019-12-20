import React, { Component } from 'react';
import shelfie from './shelfie.png'

class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
  
  
    render() {
      return(
        <nav className = "navbar">
        <img 
        className ="shelfie"
        src = {shelfie}></img>
        <ul className="nav-links">
          <ul>Dashboard</ul>
          <ul>Add Inventory</ul>
    
  
    
        </ul>
      </nav>
            
    )
    }
    }
  
  
  export default Header;
  
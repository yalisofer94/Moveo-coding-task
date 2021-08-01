import React, { Component } from "react";
import logo from '../Images/logo.gif';
 class Header extends Component {
     constructor(props) {
         super(props)
         this.onclicking= this.onclicking.bind(this);
        }
  
        onclicking = () => {
          window.location = '/home'
        }  
        render() {
          return (
              <>
                <a onClick={this.onclicking}> 
                  <img src={logo} alt="Logo" style={{width:'40%',height:'30%'}}/>
                </a> 
              </>
          )
          }
        }
    
    export default Header;
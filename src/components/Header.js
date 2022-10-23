import React from "react";
import logo from "./../img/image3.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header(){

  return (
    <React.Fragment>
      <div className="jumbotron">
          <img src={logo} alt="An image of tickets" />
          <a className="navbar-brand" href="#">Coffee Shop </a>
      </div>
     
      
    </React.Fragment>
  );
}

export default Header;
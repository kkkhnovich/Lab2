import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

let element = function Image(){
  <Navbar.Brand href="/">
  <img
      src={logo}
      height="30"
      width="30"
      className="d-inline-block align-top"
      alt="logo"
  /> Hello World
  </Navbar.Brand>
};

function App() {
  return (
     Header(element)
  );
}

export default App;

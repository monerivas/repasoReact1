import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Lista from "./components/Lista.jsx";
import Button from 'react-bootstrap/lib/Button'; /*puedo importarlo en app pero normalmente debo importarlo en el componente en el que lo quiero usar*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lista/>
        
      </div>
        
    );
  }
}

export default App;

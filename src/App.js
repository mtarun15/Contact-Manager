import React, { Component } from 'react';
import Contact from './components/Contact'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header branding = "Contact Manager"/>
        <Contact 
        name = "Tarun Manchukonda"
        email ="xxx@gmail.com" 
        phone= "987654321" 
        />
        <Contact 
        name = "Mounika Sharma"
        email ="ms@gmail.com" 
        phone= "986532147" 
        />
      </div>
    );
  }
}

export default App;

import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewItem from './Components/NewItem';

export default class App extends Component {
 a = 'ali';
  render() {
    return (
      <>
      <Navbar/>
      <NewItem/>
      <NewItem/>
      <NewItem/>
      </>
    )
  }
}

// export default App;

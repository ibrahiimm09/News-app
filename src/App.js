import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './News';


export default class App extends Component {
  

  render() {
    return (
      <>
      <Navbar/>
      {/* <News/> */} 
      <News pageSize={8} country = {'us'} category={'science'}/>
      </>
    )
  }
}

// export default App;

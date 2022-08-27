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
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <NewItem title='Title goes here' description='some desc'/>
          </div>
          <div className="col-md-4">
            <NewItem title='Title goes here' description='some desc'/>
          </div>
          <div className="col-md-4">
            <NewItem title='Title goes here' description='some desc'/>
      </div>
      </div>
      </div>
      </>
    )
  }
}

// export default App;

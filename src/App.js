import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progress : 0,
  }
  setProgress = (progressNum)=>{
    this.setState({progress : progressNum})
  }
  render() {
    return (
      <>
      <Router>
    
      <Navbar/>
      {/* <News/> */} 
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
      <Route exact path="/business"  element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={8} country = {'us'} category={'business'}/>}/>
      <Route exact path="/entertainment" element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment"  pageSize={8} country = {'us'} category={'entertainment'}/>}/>
      <Route exact path="/" element = {<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={8} key="general" country = {'us'} category={'general'}/>}/>
      <Route exact path="/health" element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={8} country = {'us'} category={'health'}/>}/>
      <Route exact path="/science" element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={8} country = {'us'} category={'science'}/>}/>
      <Route exact path="/sports" element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" epageSize={8} country = {'us'} category={'sports'}/>}/>
      <Route exact path="/technology" element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={8} country = {'us'} category={'technology'}/>}/>
      </Routes>

  </Router>
      </>
    )
  }
}

// export default App;
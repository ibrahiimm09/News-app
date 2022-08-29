import React, { Component } from 'react'
import NewItem from './Components/NewItem';

export class News extends Component {
    articles = [];
    
  constructor(){
    super();
    this.state = {
      articles : this.articles,
      page : 1,
    }
  }
  async componentDidMount(){
   

        let url = 'https://newsapi.org/v2/everything?q=apple&from=2022-08-28&to=2022-08-28&sortBy=popularity&apiKey=808f61f9924442da85439c307d2e5b64&pagesize=16';
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles, TotalResults : parsedData.totalResults})
        console.log(parsedData);
    
    }
    nextClick = async ()=>{

        console.log('next');
        if(this.state.page + 1 > Math.ceil(this.state.TotalResults/16)){

        }
        else{
        let url = `https://newsapi.org/v2/everything?q=apple&from=2022-08-28&to=2022-08-28&sortBy=popularity&apiKey=808f61f9924442da85439c307d2e5b64&page=${this.state.page + 1}&pagesize=16`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page + 1,
            articles : parsedData.articles
        })
        }
    }
    previousClick = async ()=>{
        console.log(`previous`);
        let url = `https://newsapi.org/v2/everything?q=apple&from=2022-08-28&to=2022-08-28&sortBy=popularity&apiKey=808f61f9924442da85439c307d2e5b64&page=${this.state.page - 1}&pagesize=16`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles : parsedData.articles
        })
    }
    render() {
    return (
        <>
     <div className="container">
      <h1 className='my-2'>Top-Headlines:</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
            return <div className="col-md-3 my-3" key={element.url}>
             <NewItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 80):""} imgUrl={element.urlToImage}/>
             </div>
            })}
         </div>
      </div>
      <div className=" container d-flex justify-content-between">
        <button disabled={this.state.page === 1} className=" btn btn-dark btn-lg" onClick={this.previousClick} > &larr; Previous</button>
        <button className=" btn btn-dark btn-lg" onClick={this.nextClick} > Next &rarr;</button>
      </div>
        </>
    )
  }
}

export default News
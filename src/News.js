import React, { Component } from 'react'
import NewItem from './Components/NewItem';
import Spinner from './Components/Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
      country : 'in',
      category : 'sports',
      pageSize : 8,
    }

    static propTypes = {
      country : PropTypes.string,
      category : PropTypes.string,
      pageSize : PropTypes.number,
    }

    articles = [];
    
  constructor(){

    // super is compulsory for constructor, otherwise it will eror, super() gives inheritance acceess of class to constructore
    super(); 

    // use this.state to set state and in order to change it we should use this.setState
    this.state = {
      articles : this.articles,
      loading : false,
      // to access the property of state such as page, use this.state.page
      page : 1,
    }

  }

  async componentDidMount(){
   

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=808f61f9924442da85439c307d2e5b64&pagesize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles : parsedData.articles, 
          TotalResults : parsedData.totalResults,
          loading : false,
        })
        // console.log(parsedData); 
    
    }

    nextClick = async ()=>{

        // console.log('next');
        if(this.state.page + 1 > Math.ceil(this.state.TotalResults/this.props.pageSize)){
        }
        else{
          this.setState({loading : true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=808f61f9924442da85439c307d2e5b64&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page + 1,
            articles : parsedData.articles,
            loading : false,
        })
        }
        
    }

    previousClick = async ()=>{
        // console.log(`previous`);s
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=808f61f9924442da85439c307d2e5b64&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles : parsedData.articles,
            loading :  false,
        })
    }

    render() {
      return (

        <>
     <div className="container">
      <h1 className='my-2 text-center'>Top-Headlines:</h1>
      {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
            return (<div className="col-md-3 my-3" key={element.url}>
             <NewItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 80):""} imgUrl={element.urlToImage} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name}/>
             </div>)
            })}
         </div>
      </div>
       <div className=" container d-flex justify-content-between">
       <button disabled={this.state.page === 1} className=" btn btn-dark btn-lg" onClick={this.previousClick} > &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.TotalResults/this.props.pageSize)} className=" btn btn-dark btn-lg" onClick={this.nextClick} > Next &rarr;</button>
      </div>
        </>
    )
  }
}

export default News
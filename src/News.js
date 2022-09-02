import React, { Component } from 'react'
import NewItem from './Components/NewItem';
import Spinner from './Components/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
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
    
  constructor(props){

    // super is compulsory for constructor, otherwise it will eror, super() gives inheritance acceess of class to constructore
    super(props); 

    // use this.state to set state and in order to change it we should use this.setState
    this.state = {
      articles : this.articles,
      loading : true,
      // to access the property of state such as page, use this.state.page
      page : 1,
      totalResults : 0,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async componentDidMount(){
        this.pager();
    }
    async pager(){
      this.setState({loading : true})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=511d07afad8443be8e609874ecade06f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
          articles : parsedData.articles,
          loading : false,
          totalResults : parsedData.totalResults,
      })
    }

    // nextClick = async ()=>{
    //     this.setState({
    //       page : this.state.page + 1,
    //     })
    //     this.pager();
    //   }
      
    // previousClick = async ()=>{
    //     this.setState({
    //       page : this.state.page - 1,
    //     })
    //     this.pager();
    // }
    fetchMoreData = async () =>{
      this.setState({page: this.state.page + 1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=511d07afad8443be8e609874ecade06f&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      // console.log(this.state.totalResults);
      // console.log(this.state.articles.length);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults : parsedData.totalResults
      })
    }
    capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
      return (

        <>
     <div className="container">
     <h1 className="text-center">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

      {this.state.loading && <Spinner/>}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4><Spinner/></h4>}
        >
        <div className="row">
            {this.state.articles.map((element)=>{
            return (<div className="col-md-3 my-3" key={element.url}>
             <NewItem 
             title={element.title?element.title.slice(0, 45):""} 
             description={element.description?element.description.slice(0, 80):""} 
             imgUrl={element.urlToImage} author={element.author ? element.author : "Unknown"} 
             date={element.publishedAt} source={element.source.name}/>
             </div>)
            })}

         </div>
        </InfiniteScroll>
        </div>
      {/* </div>
       <div className=" container d-flex justify-content-between">
       <button disabled={this.state.page === 1} className=" btn btn-dark btn-lg" onClick={this.previousClick} > &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.TotalResults/this.props.pageSize)} className=" btn btn-dark btn-lg" onClick={this.nextClick} > Next &rarr;</button>
      </div> */}
        </>
    )
  }
}

export default News
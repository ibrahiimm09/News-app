import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let {title , description , imgUrl , url , author , date, source} = this.props;
    return (
        <div className="card" style={{width: "25rem" , height : '100%',}}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex : '1', left: '80%'}}>{source}</span>
        <img src={imgUrl?imgUrl:"https://cdn.mos.cms.futurecdn.net/PNg4ui4CbESTxrpZVg9zwX-1200-80.jpg"} className="card-img-top" alt="..." style={{height : '150px'}}/>
        <div className="card-body">
          <h5 className="card-title"  style={{cursor : 'pointer'}}>{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-muted">By {author} at {new Date(date).toLocaleString()}</small></p>
          <a href="/anything" className="btn btn-sm btn-dark" onClick={url}>Learn more</a>
        </div>
      </div>
    )
  }
}

export default NewItem
import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let {title , description , imgUrl , url} = this.props;
    return (
        <div className="card" style={{width: "25rem" , height : '100%',}}>
        <img src={imgUrl} className="card-img-top" alt="..." style={{height : '150px'}}/>
        <div className="card-body">
          <h5 className="card-title"  style={{cursor : 'pointer'}}>{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/anything" className="btn btn-sm btn-primary" onClick={url}>Learn more</a>
        </div>
      </div>
    )
  }
}

export default NewItem
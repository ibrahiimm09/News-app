import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="" srcSet=""className='my-4'/>
      </div>
    )
  }
}

export default Spinner
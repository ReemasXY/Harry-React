import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
  render() {
    return (
      <div style={{marginTop: "56px"}}>This is the news component
      <Newsitems/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Item from './Item';

 class Article extends Component {
  render() {
    return (
          <div>
        <h2>Article</h2>
        <hr/>
        <Item/>
        </div>
      
    )
  }
}

export default Article;
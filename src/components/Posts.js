import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post src="https://mode-elle.ca/wp-content/uploads/c9e7e1ec4e7e92f0234290b2c1c05e82.jpg" alt="first"/>
        <Post src="https://www.public-heroes.de/wp-content/uploads/2016/11/model-34.png" alt="second" />
      </div>
    )
  }
} 
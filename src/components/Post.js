import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User src="https://ichef.bbci.co.uk/news/660/cpsprodpb/BF62/production/_100249984_4685fae4-cad6-4e89-ab97-9f261a86b526.jpg" alt="user" name="Anna" min/>

        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
        </div>
      </div>
    ) 
  }
}
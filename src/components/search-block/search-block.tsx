import './search-block.scss';
import React from 'react';
import axios from 'axios';

export class SearchBlock extends React.Component {
  axios = axios.create({
    baseURL: 'reactjs-cdp.herokuapp.com/',
  });

  handleSearch(event: UIEvent) {
    console.log(event);
  }

  render() {
    return (
      <section className="search-block">
        <div className="search-block__inner">
          <h1 className="search-block__title">FIND YOUR MOVIE</h1>
          <form action="" className="search-block__form" onSubmit={this.handleSearch.bind(this)}>
            <input type="text" placeholder="enter movie title or genre" />
            <button type="submit">Search</button>
          </form>
          <form className="type-switch">
            <span className="type-switch__label">SEARCH BY</span>
            <div className="type-switch__buttons">
              <label htmlFor="title">
                TITLE
                <input type="radio" name="search-type" id="title" checked />
              </label>
              <label htmlFor="genre">
                GENRE
                <input type="radio" name="search-type" id="genre" />
              </label>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      article: "",
    };
  }

  componentDidMount() {
    // const url = 'https://sutaba-mac.site/scrapy-s2-settings-and-items/';
    // const url = 'http://howtonode.org/really-simple-file-uploads';
    // const url = 'https://ameblo.jp/nakagawa-shoko/';
    
    // var scrape = require("ascrape");

    // scrape(url, (err, article, meta) => {
      

    //   console.error(err);
    //   console.error(article);
    //   console.error(meta);
      
    //   console.log(article.title);
    //   console.log(article.content);

    //   console.log(article.content.text());

    //   this.setState({
    //     article: article.content.text(),
    //   });
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>{this.state.article}</div>
      </div>
    );
  }
}

export default App;

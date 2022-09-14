import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar, { DEFAULT_SEARCH } from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "GH1S9kCmaUIaqWK9DS"
    }

    this.search(DEFAULT_SEARCH);
  }

  search = (query) => {
    giphy('v05KWpruU33SZBqg0uqvJ4jxQGkB0DQ6').search({
      q: query,
      rating: 'g',
      limit: 10,
    }, (error, result) => {
        this.setState({
          gifs: result.data
        });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;

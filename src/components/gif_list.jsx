import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  renderList = (props) => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />);
  };

  render () {
    return (
      <div className="gif-list">
        {this.renderList(this.props)}
      </div>
    );
  }
}

export default GifList;

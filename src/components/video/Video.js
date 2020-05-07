import React from 'react';
import SearchBar from './../searchbar/SearchBar';

class Video extends React.Component {
  state = { keyWord: '' };

  render() {
    return (
      <div>
        <SearchBar labelForText="Video" />
      </div>
    );
  }
}

export default Video;

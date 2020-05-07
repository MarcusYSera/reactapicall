import React from 'react';
import SearchBar from './../searchbar/SearchBar';
import SearchList from './VideoList';

class Video extends React.Component {
  state = { keyWord: '' };

  render() {
    return (
      <div>
        <SearchBar labelForText="Video" />
        <VideoList />
      </div>
    );
  }
}

export default Video;

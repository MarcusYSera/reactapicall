import React from 'react';

class Video extends React.Component {
  state = { keyWord: '' };

  render() {
    return (
      <div>
        <form>
          <label>Video Search</label>
          <input></input>
        </form>
      </div>
    );
  }
}

export default Video;

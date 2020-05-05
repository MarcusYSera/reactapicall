import React from 'react';

class Video extends React.Component {
  state = { keyWord: '' };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Video Search</label>
            <input />
          </div>
        </form>
      </div>
    );
  }
}

export default Video;

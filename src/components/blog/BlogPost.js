import React from 'react';
import faker from 'faker';

const BlogPost = props => {
  return (
    <div>
      <a href="/" className="imate">
        <img alt="user" src={faker.image.avatar()} />
      </a>
    </div>
  )
}

export default BlogPost;
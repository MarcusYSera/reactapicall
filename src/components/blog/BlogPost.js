import React from 'react';
import faker from 'faker';

const BlogPost = (props) => {
  return (
    <div className="">
      <a href="/" className="image">
        <img alt="user" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="">
          {props.author}
        </a>
        <div className="">
          <span>{props.timeAgo}</span>
        </div>
        <div className="body">Body of post</div>
      </div>
    </div>
  );
};

export default BlogPost;

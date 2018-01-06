import React from 'react';
import PropTypes from 'prop-types';

import post from './Post.css'

const Post = props => (
  <article>
    <h2 className={post.title}>{props.post.title}</h2>
    <p className={post.body}>{props.post.body}</p>
  </article>
);


Post.propTypes = {

};

export default Post;

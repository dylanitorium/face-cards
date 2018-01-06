import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

import list from './PostList.css';

const PostList = props => (
  <ul className={list.list}>
    {
        props.currentPosts.length ? (
        props.currentPosts.map(post =>
          <li key={post.id} className={list.item}>
            <Post post={post} />
          </li>
        )
      ) : (
        <p className={list.placeholder}>
          Click a card to view five of their posts.
        </p>
      )
    }
  </ul>
);


PostList.propTypes = {

};

export default PostList;

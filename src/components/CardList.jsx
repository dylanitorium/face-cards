import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import list from './CardList.css';

const CardList = props => (
  <ul className={list.list}>
    {
      props.users.length ? (
        props.users.map(user =>
          <li key={user.id} className={list.item}>
            <Card {...props} user={user}  />
          </li>
        )
      ) : (
        null
      )
    }
  </ul>
);

CardList.propTypes = {};

export default CardList;

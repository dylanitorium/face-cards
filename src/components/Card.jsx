import React from 'react';
import PropTypes from 'prop-types';
import card from './Card.css';

const Card = props =>  (
  <div onClick={() => props.onCardClick(props.user.id)} className={props.user.id === props.currentUserId ? `${card.card} ${card.active}`  : card.card}>
    <img className={card.avatar} src={`https://api.adorable.io/avatars/150/${props.user.email}.png`}/>
    <div className={card.content}>
      <div className={card.quote}>
        "{props.user.company.catchPhrase}"
      </div>
      <div className={card.details}>
        <div className={card.name}>
          {props.user.name}
        </div>
        <div className={card.email}>
          {props.user.email}
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {};

export default Card;

import React from 'react';
import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={classes.Card}>
      <a href='/'>
        <div className={classes.CardHeader}>
            <img src={props.src} alt={props.alt} />
        </div>
      </a>

      <div className={classes.CardFooter}>
        <h2>{props.title}</h2>
        <p>Entry Free:<span>&nbsp;{props.price}</span></p>
      </div>
      
    </div>
  )
}

export default Card

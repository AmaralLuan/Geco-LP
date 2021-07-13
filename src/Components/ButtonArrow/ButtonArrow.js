import React from 'react'
import classes from './ButtonArrow.module.css';

const ButtonArrow = (props) => {
  return (
    <button className={classes.ButtonArrow}>
      {props.children}
    </button>
  )
}

export default ButtonArrow

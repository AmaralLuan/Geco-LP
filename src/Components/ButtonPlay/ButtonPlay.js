import React from 'react'
import classes from './ButtonPlay.module.css';

import { FaPlay } from 'react-icons/fa'

const ButtonPlay = (props) => {
  return (
    <button className={classes.ButtonPlay}>
      <FaPlay />
    </button>
  )
}

export default ButtonPlay

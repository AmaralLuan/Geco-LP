import React from 'react';
import classes from './Grid.module.css';
import brand01 from '../../../assets/brand01.png';
import brand02 from '../../../assets/brand02.png';
import brand03 from '../../../assets/brand03.png';
import brand04 from '../../../assets/brand04.png';

function Grid() {
  return (
    <div className={classes.Grid}>
      <div className={classes.GridRow}>
        <img src={brand01} alt='01' />
        <img src={brand02} alt='01' />
        <img src={brand03} alt='01' />
        <img src={brand04} alt='01' />
      </div>
    </div>
  )
}

export default Grid

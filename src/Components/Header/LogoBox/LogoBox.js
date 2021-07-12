import React from 'react'
import classes from './LogoBox.module.css';
import Logo from '../../../assets/logo_two.png';

function LogoBox() {
  return (
    <div className={classes.LogoBox}>
      <img src={Logo} alt='' />
    </div>
  )
}

export default LogoBox

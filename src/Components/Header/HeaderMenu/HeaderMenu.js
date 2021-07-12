import React from 'react';
import classes from './HeaderMenu.module.css';

function HeaderMenu() {
  return (
    <div className={classes.HeaderMenu}>
      <ul>
        <li>Home</li>
        <li>Pages</li>
        <li>Overview</li>
        <li>Community</li>
        <li>Store</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default HeaderMenu

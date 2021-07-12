import React from 'react'
import HeaderMenu from './HeaderMenu/HeaderMenu';
import LogoBox from './LogoBox/LogoBox';
import classes from './Header.module.css';
import SearchButton from './SearchButton/SearchButton';

function Header() {
  return (
    <div className={classes.Header}>
      <LogoBox />
      <HeaderMenu />
      <SearchButton />
    </div>
  )
}

export default Header

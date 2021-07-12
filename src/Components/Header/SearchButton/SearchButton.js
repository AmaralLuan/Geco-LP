import React from 'react'
import { FiSearch } from 'react-icons/fi';
import classes from './SearchButton.module.css';

function SearchButton() {
  return (
    <div className={classes.SearchButton}>
      <FiSearch />
    </div>
  )
}

export default SearchButton

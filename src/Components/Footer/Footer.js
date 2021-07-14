import React from 'react'
import classes from './Footer.module.css'
import Logo from '../../assets/logo.png';
import { MdLocationOn, IoMailOpen, FaPhone } from 'react-icons/all';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterGrid1}>
        <img src={Logo} alt='Logo' />
        <ul>
          <li>
            <p>Gemas marketplace the relase etras thats sheets continig passag.</p>
          </li>

          <li>
            <MdLocationOn />
            <p>
              Address : PO Box W75 Street lan West new queens
            </p>
          </li>

          <li>
            <IoMailOpen />
            <p>
              Email : info@exemple.com
            </p>
          </li>

          <li>
            <FaPhone />
            <p>
              Phone : +24 1245 654 235
            </p>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

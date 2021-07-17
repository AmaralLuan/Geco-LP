import React from 'react'
import classes from './Footer.module.css'
import Logo from '../../assets/logo.png';
import { MdLocationOn, IoMailOpen, FaPhone } from 'react-icons/all';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Container}>
        <div className={classes.div1}>
          <img src={Logo} alt='Logo' />

          <p>
            <MdLocationOn />
            <span>Address : PO Box W75St, queens</span>
          </p>

          <p>
            <IoMailOpen />
            <span>Email : info@exemple.com</span>
          </p>

          <p>
            <FaPhone />
            <span> Phone : +24 1245 654 235</span>
          </p>
        </div>

        <div className={classes.div1}>
          <h1>Products</h1>

          <p>
            Graphics
          </p>

          <p>
            Backgrounds
          </p>

          <p>
            Fonts
          </p>
        </div>

        <div className={classes.div1}>
          <h1>Need Help?</h1>

          <p>
            Terms and Conditions
          </p>

          <p>
            Privacy Policy
          </p>

          <p>
            Refund Policy
          </p>
        </div>

        <div className={classes.div1}>
          <h1>
            Follow Us

            <span>&nbsp;</span>
          </h1>

          <p>
            Graphics
          </p>

          <p>
            Backgrounds
          </p>

          <p>
            Fonts
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

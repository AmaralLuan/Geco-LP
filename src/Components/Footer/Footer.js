import React from 'react'
import classes from './Footer.module.css'
import Logo from '../../assets/logo.png';
import { MdLocationOn, IoMailOpen, FaPhone } from 'react-icons/all';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div>
          <ul>
            <li>
              <img src={Logo} alt='Logo' />
            </li>
            
            <li>
              <p>Gemas marketplace the relase etras thats sheets continig passag.</p>
            </li>

            <li>
              <div>
                <MdLocationOn />
                <p>
                  Address : PO Box W75 Street lan West new queens
                </p>
              </div>  
            </li>

            <li>
              <div>
                <IoMailOpen />
                <p>
                  Email : info@exemple.com
                </p>
              </div>  
            </li>

            <li>
              <div>
                <FaPhone />
                <p>
                  Phone : +24 1245 654 235
                </p>
              </div>  
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h2>Products</h2>
            </li>
            
            <li>
              <p>Photos</p>
            </li>

            <li>
              <div>
                
                <p>
                  Backgrounds
                </p>
              </div>  
            </li>

            <li>
              <div>
                
                <p>
                  Fonts
                </p>
              </div>  
            </li>

            <li>
              <div>
                
                <p>
                  Music
                </p>
              </div>  
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer

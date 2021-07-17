import React from 'react';
import classes from './Home.module.css';
import heroImg from '../../../assets/hero-img.png';
import Button from '../../Button/Button';

function Home() {
  return (
    <section className={classes.Home}>
      <div className={classes.heroBox}>
        <div className={classes.heroBoxText}>
            <h3>World Gaming</h3>
            <h1>Create <span className={classes.ManageWord}>Manage</span> Matches</h1>
            <p>Find technology or people to work with you for digital projects
              in public sector and Find an individual specialist develope researchment.
            </p>

            <Button >Read More</Button>
        </div>

        <div className={classes.heroBoxImg}>
          <img src={heroImg} alt='hero-img' />
        </div>
      </div>
    </section>
  )
}

export default Home

import React from 'react';
import Card from '../../Card/Card';
import classes from './Releases.module.css';

import zombie from '../../../assets/zombie.jpg'
import ori from '../../../assets/ori.jpg'
import cyberpunk from '../../../assets/cyberpunk.jpg'
import ButtonArrow from '../../ButtonArrow/ButtonArrow';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Realeases = () => {
  return (
    <section className={classes.Releases}>
      <div className={classes.ReleasesContainer}>
        <header>
          <div>
            <span>Latest Releases</span>
            <h2>Create and <span>Manage</span></h2>
          </div>

          <div className={classes.ButtonArrowBox}>
            <ButtonArrow>
              <AiOutlineLeft />
            </ButtonArrow>

            <ButtonArrow>
              <AiOutlineRight />
            </ButtonArrow>
          </div>
        </header>

        <main>
        <Card 
          src={zombie}
          alt='Zombie'
          title='World of Warcraft'
          price='Free'
          />

          <Card 
          src={ori}
          alt='ori'
          title='Ori and The Blind Forest'
          price='$50'
          />

          <Card 
          src={cyberpunk}
          alt='cyberpunk'
          title='Cyberpunk 2077'
          price='We pay you $10!'
          />
        </main>

        <footer>
          <h2>Watch Live <span>Matches</span></h2>
        </footer>
      </div>
    </section>
  )
}

export default Realeases

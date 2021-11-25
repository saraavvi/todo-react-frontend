import React from 'react';
import classes from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className="centered">
      <div className={classes['about-container']}>
        <h2>
          Manage all your tasks &amp; <br></br> ideas in one place. 💡
        </h2>
      </div>
    </div>
  );
}

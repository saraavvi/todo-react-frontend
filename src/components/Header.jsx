import React from 'react';
import classes from './Header.module.css';
import ModalButton from './ModalButton';
import SignupForm from './SignupForm';

export default function Header() {
  return (
    <header className={classes['header']}>
      <h1>header</h1>
      <ModalButton buttonText={'Log In'}>
        <p>Login form</p>
      </ModalButton>
      <ModalButton buttonText={'Sign Up'}>
        <SignupForm />
      </ModalButton>
    </header>
  );
}

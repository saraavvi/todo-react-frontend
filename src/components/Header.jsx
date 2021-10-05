import React, { useState } from 'react';
import classes from './Header.module.css';
import LoginForm from './LoginForm';
import ModalButton from './ModalButton';
import SignupForm from './SignupForm';

export default function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <header className={classes['header']}>
      <h1>header</h1>
      <ModalButton buttonText={'Log In'} showModal={showLoginModal} setShowModal={setShowLoginModal}>
        <LoginForm setShowModal={setShowLoginModal} />
      </ModalButton>
      <ModalButton buttonText={'Sign Up'} showModal={showSignupModal} setShowModal={setShowSignupModal}>
        <SignupForm setShowModal={setShowSignupModal} />
      </ModalButton>
    </header>
  );
}

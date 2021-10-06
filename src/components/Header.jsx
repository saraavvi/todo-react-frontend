import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

import classes from './Header.module.css';
import LoginForm from './LoginForm';
import ModalButton from './ModalButton';
import SignupForm from './SignupForm';

export default function Header() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  function handleLogOut() {
    localStorage.removeItem('jwt');
    setUser(null);
    history.push('/');
  }

  return (
    <header className={classes['header']}>
      <h1>header</h1>
      {user !== null ? (
        <>
          <span>Logged in as {user.name}</span>
          <button onClick={handleLogOut}>Log Out</button>
        </>
      ) : (
        <>
          <ModalButton
            buttonText={'Log In'}
            showModal={showLoginModal}
            setShowModal={setShowLoginModal}
          >
            <LoginForm setShowModal={setShowLoginModal} />
          </ModalButton>
          <ModalButton
            buttonText={'Sign Up'}
            showModal={showSignupModal}
            setShowModal={setShowSignupModal}
          >
            <SignupForm setShowModal={setShowSignupModal} />
          </ModalButton>
        </>
      )}
    </header>
  );
}

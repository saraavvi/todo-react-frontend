import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { ListContext } from '../../contexts/ListContext';

import classes from './Header.module.css';
import LoginForm from '../LoginForm';
import ModalButton from '../ModalButton';
import SignupForm from '../SignupForm';

export default function Header() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { setLists } = useContext(ListContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    setUser(null);
    setLists(null);
    history.push('/');
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Glennifer's TODO</div>
      <nav className={classes.nav}>
        <ul>
          {user !== null ? (
            <>
              <li>
                <span>Logged in as {user.name}</span>
              </li>
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <ModalButton
                  buttonText={'Log In'}
                  showModal={showLoginModal}
                  setShowModal={setShowLoginModal}
                >
                  <LoginForm setShowModal={setShowLoginModal} />
                </ModalButton>
              </li>
              <li>
                <ModalButton
                  buttonText={'Sign Up'}
                  showModal={showSignupModal}
                  setShowModal={setShowSignupModal}
                >
                  <SignupForm setShowModal={setShowSignupModal} />
                </ModalButton>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

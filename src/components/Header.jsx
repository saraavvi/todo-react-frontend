import React from "react";
import classes from "./Header.module.css";
import ModalButton from './ModalButton';

export default function Header() {
  return (
    <header className={classes["header"]}>
      <h1>header</h1>
      <ModalButton buttonText={'Log In'}><p>Login form</p></ModalButton>
      <ModalButton buttonText={'Sign Up'}><p>Sign form</p></ModalButton>
    </header>
  );
}

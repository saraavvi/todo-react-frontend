import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes["header"]}>
      <h1>header</h1>
      <button>Log in</button>
      <button>Sign up</button>
    </header>
  );
}

import React from 'react';
import classes from './Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <img
        src="https://www.phpro.be/uploads/media/sulu-100x100/00/440-react%404x.png?v=2-0"
        alt="logo"/>
    </header>
  )
}


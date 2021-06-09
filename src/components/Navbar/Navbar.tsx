import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { Friends } from '../../redux/store'

type NavbarPropsData = {
  sideBarData: Array<Friends>
}

export function Navbar (props: NavbarPropsData) {
  let friends = props.sideBarData.map((item, i) => {
    return (
      <li key={i}>
        <span>{item.name}</span>
        <img src={item.avatar} alt='user avatar' />
      </li>
    )
  })

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/News' activeClassName={classes.activeLink}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/Music' activeClassName={classes.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/Settings' activeClassName={classes.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={classes.item}>
        <span>Friends</span>
        <div>
          <span>{friends}</span>
        </div>
      </div>
    </nav>
  )
}

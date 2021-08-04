import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

type HeaderPropsType = {
  login: string | null
  isAuth: boolean
  logoutTC: () => void
}

export function Header(props: HeaderPropsType) {
  return (
    <header className={classes.header}>
      <img
        src='https://www.phpro.be/uploads/media/sulu-100x100/00/440-react%404x.png?v=2-0'
        alt='logo'
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            <div>{props.login}</div>
            <div>
              <button onClick={props.logoutTC}>Log out</button>
            </div>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}

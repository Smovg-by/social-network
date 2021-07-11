import { UserType } from '../../redux/usersReducer'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user_ico.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { followUsers, unFollowUsers } from '../../api/api'

type UsersPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (page: number) => void
  users: Array<UserType>
  follow: (id: number) => void
  unfollow: (id: number) => void
}

export let Users = (props: UsersPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(page => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(page)
              }}
              className={
                props.currentPage === page
                  ? styles.selectedPage
                  : styles.notSelectedPage
              }
            >
              {' '}
              {page}{' '}
            </span>
          )
        })}
      </div>
      {props.users.map(u => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    className={styles.userPhoto}
                    alt={'users avatar'}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() =>
                      // this.props.toggleIsFetching(true)
                      unFollowUsers(u.id).then(response => {
                        if (response.resultCode === 0) {
                          props.unfollow(u.id)
                        }
                        // this.props.toggleIsFetching(false)
                      })
                    }
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      // this.props.toggleIsFetching(true)
                      followUsers(u.id).then(response => {
                        if (response.resultCode === 0) {
                          props.follow(u.id)
                        }
                        // this.props.toggleIsFetching(false)
                      })
                    }
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span>
            </span>
          </div>
        )
      })}
    </div>
  )
}

import { UserType } from '../../redux/usersReducer'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user_ico.jpg'
import { NavLink } from 'react-router-dom'


type UsersPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isFetching: boolean
  users: Array<UserType>
  followingInProgress: Array<number>
  onPageChanged: (page: number) => void
  unFollowThunkCreator: (userId: number) => void
  followThunkCreator: (userId: number) => void
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
            <span key={page}
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
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {
                      props.unFollowThunkCreator(u.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {
                      props.followThunkCreator(u.id)
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{`NAME: ${u.name}`}</div>
                <div>{`STATUS: ${u.status}`}</div>
                <div>{`ID: ${u.id}`}</div>
              </span>
              <hr />
            </span>
          </div>
        )
      })}
    </div>
  )
}

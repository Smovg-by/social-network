import axios from 'axios'
import styles from './Users.module.css'
// import { Usersthis.propsType } from './UsersContainer'
import usePhoto from '../../assets/images/user_ico.jpg'
import React from 'react'
import { UserType } from '../../redux/usersReducer'

type UsersPropsType = {
  users: Array<UserType>
  setUsers: (items: Array<UserType>) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
}

export class Users extends React.Component<UsersPropsType> {
  constructor (props: UsersPropsType) {
    super(props)

    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render () {
    return (
      <div>
        {this.props.users.map(u => {
          return (
            <div key={u.id}>
              <span>
                <div>
                  <img
                    src={u.photos.small !== null ? u.photos.small : usePhoto}
                    className={styles.userPhoto}
                  />
                </div>
                <div>
                  {u.followed ? (
                    <button onClick={() => this.props.unfollow(u.id)}>
                      Unfollow
                    </button>
                  ) : (
                    <button onClick={() => this.props.follow(u.id)}>
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
}

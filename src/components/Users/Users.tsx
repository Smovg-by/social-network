import axios from 'axios'
import styles from './Users.module.css'
// import { Usersthis.propsType } from './UsersContainer'
import usePhoto from '../../assets/images/user_ico.jpg'
import React from 'react'
import { UserType } from '../../redux/usersReducer'

type UsersPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setUsers: (items: Array<UserType>) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {
  // constructor (props: UsersPropsType) {
  //   super(props)
  // }

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (page: number) => {

    this.props.setCurrentPage(page)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {
            pages.map((page) => {
              return <span onClick={() => { this.onPageChanged(page) }} className={this.props.currentPage === page ? styles.selectedPage : styles.notSelectedPage}>   {page}   </span>
            })
          }

        </div>
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

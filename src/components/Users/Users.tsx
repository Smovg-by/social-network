import axios from 'axios'
import styles from './Users.module.css'
import { UsersPropsType } from './UsersContainer'
import usePhoto from '../../assets/images/user_ico.jpg'

export const Users = (props: UsersPropsType) => {
  // BLL
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items)
      })
  }

  //   props.setUsers([
  //     {
  //       id: 1,
  //       photoUrl:
  //         'https://www.vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg',
  //       followed: false,
  //       fullName: 'Stan',
  //       status: 'I am a boss',
  //       location: { city: 'Minsk', country: 'Belarus' }
  //     },
  //     {
  //       id: 2,
  //       photoUrl:
  //         'https://www.vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg',
  //       followed: true,
  //       fullName: 'John',
  //       status: 'I am Stan',
  //       location: { city: 'Moscow', country: 'Russia' }
  //     },
  //     {
  //       id: 3,
  //       photoUrl:
  //         'https://www.vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg',
  //       followed: true,
  //       fullName: 'Michael',
  //       status: 'I am Michael',
  //       location: { city: 'Kiev', country: 'Ukraine' }
  //     },
  //     {
  //       id: 4,
  //       photoUrl:
  //         'https://www.vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg',
  //       followed: false,
  //       fullName: 'Eric',
  //       status: 'I am Eric',
  //       location: { city: 'Boston', country: 'USA' }
  //     }
  //   ])
  // }

  // UI
  return (
    <div>
      {props.users.map(u => {
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
                  <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => props.follow(u.id)}>Follow</button>
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

import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfoType } from '../../redux/profileReducer'
import { Redirect } from 'react-router-dom'

type ProfilePropsType = {
  profile: ProfileInfoType | null

}

export function Profile(props: ProfilePropsType) {



  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

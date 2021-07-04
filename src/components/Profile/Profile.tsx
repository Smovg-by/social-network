import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfoType } from '../../redux/profileReducer'

type ProfilePropsType = {
  profile: ProfileInfoType
}

export function Profile(props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

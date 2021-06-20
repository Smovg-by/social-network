import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo'
import { ActionType } from '../../redux/store'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'

export type ProfilePropsType = {
  postsData: Array<PostElementType>
  newPostText: string
  dispatch: (action: ActionType) => void
}

type PostElementType = {
  id: number
  message: string
}

export function Profile (props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
      // postsData={props.postsData}
      // newPostText={props.newPostText}
      // dispatch={props.dispatch}
      />
    </div>
  )
}

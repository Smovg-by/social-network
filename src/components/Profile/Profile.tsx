import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo'
import { ActionType } from '../../redux/store'

export type ProfilePropsType = {
  postsData: Array<PostElementType>
  newPostText: string
  dispatch: (action: ActionType) => void
  // заменили отдельные методы на dispatch
  // addPost: (postMessage: AddPostActionType) => void
  // updatePostText: (newText: ChangeNewTextActionType) => void
}

type PostElementType = {
  id: number
  message: string
}

export function Profile (props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.postsData}
        newPostText={props.newPostText}
        dispatch={props.dispatch}
        // заменили отдельные методы на dispatch
        // updatePostText={props.updatePostText}
        // addPost={props.addPost}
      />
    </div>
  )
}

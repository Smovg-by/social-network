import { connect } from 'react-redux'
import { ActionType, addPostAC, Posts, updatePostTextAC } from '../../../redux/profileReducer'

import { MyPosts } from './MyPosts'
import { AppStateType } from '../../../redux/redux-store'
// data types
type MapStatePropsType = {
  newPostText: string
  postsData: Array<Posts>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    newPostText: state.profilePage.newPostText,
    postsData: state.profilePage.posts
  }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
  return {
    updateNewPostText: (newText: string) => {
      dispatch(updatePostTextAC(newText))
    },
    addPost: (newText: string) => {
      dispatch(addPostAC(newText))
    }
  }
}

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)

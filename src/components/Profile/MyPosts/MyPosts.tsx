import React from 'react'
import { ActionType, addPostAC, updatePostTextAC } from '../../../redux/state'
import classes from './MyPosts.module.css'
import { Post } from './Posts/Post'

export type MyPostsPropsType = {
  postsData: Array<PostElementType>
  newPostText: string
  dispatch: (action: ActionType) => void
  // заменили отдельные методы на dispatch
  // updatePostText: (newText: ChangeNewTextActionType) => void
  // addPost: (postMessage: AddPostActionType) => void
}

export type PostElementType = {
  id: number
  message: string
}

//
// -----MyPosts component start
//
export function MyPosts (props: MyPostsPropsType) {
  //---BLL
  let postsElements = props.postsData.map(item => {
    return <Post message={item.message} />
  })

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    let text = props.newPostText //? значит, что в этом поле может быть Null
    if (text) {
      // заменили отдельные методы на dispatch
      // props.addPost(text)
      props.dispatch(addPostAC(text))
    }
  }

  //---UI
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            // TODO вынести функцию из JSX (e: ChangeEvent<HTMLTextAreaElement> )
            onChange={e => {
              let newText = e.currentTarget.value
              props.dispatch(updatePostTextAC(newText))
            }}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  )
}

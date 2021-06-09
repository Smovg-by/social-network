import React from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Posts/Post'

export type MyPostsPropsType = {
  postsData: Array<PostElementType>
  newPostText: string
  updateNewPostText: (newText: string) => void
  addPost: (newText: string) => void
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
  let postsElements = props.postsData.map((item, i) => {
    return <Post key={i} message={item.message} />
  })

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    let newText = props.newPostText
    if (newText) {
      props.addPost(newText)
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
              props.updateNewPostText(newText)
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

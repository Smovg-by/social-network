import React from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Posts/Post'
import { AddPostType } from '../../../redux/state'

export type MyPostsPropsType = {
  posts: Array<PostElementType>
  addPost: AddPostType
}

export type PostElementType = {
  id: number
  message: string
}

export function MyPosts (props: MyPostsPropsType) {
  let postsElements = props.posts.map(item => {
    return <Post message={item.message} />
  })

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    debugger
    let text = newPostElement.current?.value //? значит, что в этом поле моежт быть Null
    if (text) {
      // check if text exists (no undefined). Without this snippet type error is caused
      props.addPost(text)
    }
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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

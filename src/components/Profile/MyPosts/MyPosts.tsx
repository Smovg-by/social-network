import React from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Posts/Post'
import { AddPostType, updatePostTextType } from '../../../redux/state'
import { textChangeRangeNewSpan } from 'typescript'

export type MyPostsPropsType = {
  posts: Array<PostElementType>
  addPost: AddPostType
  newPostText: string
  updatePostText: updatePostTextType
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
  let postsElements = props.posts.map(item => {
    return <Post message={item.message} />
  })

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    let text = props.newPostText //? значит, что в этом поле может быть Null
    if (text) {
      props.addPost(text)
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
              props.updatePostText(e.currentTarget.value)
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

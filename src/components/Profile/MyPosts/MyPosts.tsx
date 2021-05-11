import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Posts/Post';

export type MyPostsPropsType = {
  posts: Array<PostElementType>
}

export type PostElementType = {
  id: number
  message: string
}

export function MyPosts(props: MyPostsPropsType) {

  let postsElements = props.posts.map((item)=> {
    return (<Post message={item.message}/>)
  })

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea>Input your thoughts here...</textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}
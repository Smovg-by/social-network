import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Posts/Post';

export function MyPosts() {

  const postsData = [
    {id: 1, message: "Hi! How are you?"},
    {id: 2, message: "It is my first post"},
  ]

  const postsElements = postsData.map((item)=> {
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
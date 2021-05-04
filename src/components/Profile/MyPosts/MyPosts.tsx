import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Posts/Post';

export function MyPosts() {
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
        <Post message="Hi! How are you?"/>
        <Post message="It is my first post"/>
      </div>
    </div>
  )
}
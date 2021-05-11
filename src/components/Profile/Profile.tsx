import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';


type MyPostsPropsType = {
  postsData: Array<PostElementType>
}

type PostElementType = {
  id: number
  message: string
}

export function Profile(props: MyPostsPropsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.postsData}/>
    </div>
  )
}
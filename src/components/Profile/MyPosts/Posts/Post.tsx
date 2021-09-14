import React from 'react';
import classes from './Post.module.css';

type PostProps = {
  message: string;
}

export function Post(props: PostProps) {
  return (
    <div className={classes.item}>
      <img
        src="http://primrep.ru/wp-content/uploads/2016/01/avatar-320x240.jpg"
        alt="Avatar Face"/>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}
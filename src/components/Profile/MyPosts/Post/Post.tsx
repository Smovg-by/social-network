import React from 'react';
import classes from './Post.module.css';

export function Post() {
  return (
    <div className={classes.item}>
      <img
        src="http://primrep.ru/wp-content/uploads/2016/01/avatar-320x240.jpg"/>
      Post123
      <div>
        <span>like</span>
      </div>
    </div>
  )
}
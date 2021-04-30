import React from 'react';
import classes from './Profile.module.css';

export function Profile() {
  return (
    <div className="content">
      <div>
        <img
          src="https://i.siteapi.org/no2IMQtVA-Jko-HOxCRaQpEC3FE=/fit-in/900x1000/center/top/filters:format(png)/5045b586a05f134.s.siteapi.org/img/d35c0d1ac7c8dd12e1e4146f14df612b9c31a4a3.jpg"
          alt="nature"/>
      </div>
      <div>Ava + description</div>
      <div>My posts
        <div>New post</div>
        <div className={classes.posts}>
          <div className={classes.item}>Post1</div>
          <div className={classes.item}>Post2</div>
        </div>
      </div>
    </div>
  )
}
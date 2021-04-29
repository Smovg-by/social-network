import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://www.phpro.be/uploads/media/sulu-100x100/00/440-react%404x.png?v=2-0"
          alt="logo"/>
      </header>
      <nav className="nav">
        <div><a href="#">Profile</a></div>
        <div><a href="#">Messages</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Settings</a></div>
      </nav>
      <div className="content">

        <div>
          <img
            src="https://i.siteapi.org/no2IMQtVA-Jko-HOxCRaQpEC3FE=/fit-in/900x1000/center/top/filters:format(png)/5045b586a05f134.s.siteapi.org/img/d35c0d1ac7c8dd12e1e4146f14df612b9c31a4a3.jpg"
            alt="nature"/>
        </div>
        <div>Ava + description</div>
        <div>My posts
          <div>New post</div>
          <div>
            <div>Post1</div>
            <div>Post2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, state} from './redux/state';

//addPost("WoW Samurai");

ReactDOM.render(
  <React.StrictMode>
    {/*<App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>*/}
    <App stateData={state} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

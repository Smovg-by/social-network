import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogsDataType = {
  id: number
  name: string
}

export type MessagesDataType = {
  id: number
  message: string
}

export type PostsDataType = {
  id: number
  message: string
}

export const dialogsData = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Valera'},
];

export const messagesData = [
  {id: 1, message: 'Hello!'},
  {id: 2, message: 'How is yor ITkamasutra?'},
  {id: 3, message: 'Yo!'},
]

export const postsData = [
  {id: 1, message: "Hi! How are you?"},
  {id: 2, message: "It is my first post"},
  {id: 3, message: "BlaBla"},
  {id: 4, message: "Dada"},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

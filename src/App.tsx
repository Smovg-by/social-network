import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

export type AppPropsType = {
  dialogsData: Array<dialogsDataType>
  messagesData: Array<messagesDataType>
}

export type dialogsDataType = {
  id: number
  name: string
}

export type messagesDataType = {
  id: number
  message: string
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        {/*<Profile/>*/}
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
          <Route path="/profile" render={() => <Profile/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/Settings" render={() => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

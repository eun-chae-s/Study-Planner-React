import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LogIn from './App';
import Today from './routes/today';
import Tomorrow from './routes/tomorrow';
import Month from './routes/month';
import Setting from './routes/setting';
import CreateAccout from './routes/create';
import reportWebVitals from './reportWebVitals';
import firebase from './utils/firebase';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogIn ></LogIn>}></Route>
      <Route path="today" element={<Today ></Today>}></Route>
      <Route path="create-new-account" element={<CreateAccout />}></Route>
      <Route path="tomorrow" element={<Tomorrow></Tomorrow>}></Route>
      <Route path="month" element={<Month />}></Route>
      <Route path="setting" element={<Setting />}></Route>
    </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

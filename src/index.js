import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import App from './App';
import Links  from './Links';

import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" children={<App/>}></Route>
            <Route exact path="/links" children={<Links/>}></Route>
        </Routes>
    </BrowserRouter>
    , document.getElementById('root'))
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Newincident from './pages/Newincident';


export default function  Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Logon }/>
                <Route path="/Register" component = { Register }/>
                <Route path="/Profile" component= { Profile }/>
                <Route path="/incidents/new" component= { Newincident }/>
            </Switch>
        </BrowserRouter>
    )
}

import React from 'react'
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native'


import Login from './screens/Login'
import Signup from './screens/Signup'
import Home from './screens/Home'

function Routes() {
    return (
        <NativeRouter>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>
            </Switch>
        </NativeRouter>
    )
}

export default Routes

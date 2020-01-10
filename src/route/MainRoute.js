import React from 'react'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'

import {Provider} from 'unistore/react'
import {store, actions} from '../global/store'

import Home from '../pages/Home'
import Profile from '../pages/profile'
import Login from '../pages/Login';
import FoursquareCategory from '../pages/axiosFS'

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/profile' component={Profile} />]}
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/listfs' component={FoursquareCategory} /> 
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoute
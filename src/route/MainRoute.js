import React from 'react'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'

import {Provider} from 'unistore/react'
import {store, actions} from '../global/store_bimon'

import Home from '../pages/Home'
import Profile from '../pages/profile'
import Login from '../pages/Login';
import infoPage from '../pages/infoPage'
import NotFound from '../pages/NotFound'

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/profile' component={Profile} />]}
                    <Route exact path='/login' component={Login} /> 
                    <Route exact path='/info' component={infoPage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoute
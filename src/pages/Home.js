import React from 'react'
import Header from '../components/Header'
import HomePageComponent from '../components/HomePageComponent';

import {withRouter} from 'react-router-dom'
import {store, actions} from '../global/store'
import { connect } from "unistore/react";

class Home extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <HomePageComponent />
            </React.Fragment>
        )
    }
}

export default connect("", actions)(withRouter(Home));
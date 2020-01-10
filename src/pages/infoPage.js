import React from 'react'
import Header from '../components/Header'
import HomePageComponent from '../components/HomePageComponent';

import {withRouter} from 'react-router-dom'
import {store, actions} from '../global/store'
import { connect } from "unistore/react";
import InputUser from '../components/InputUser';

class InfoPage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <HomePageComponent />
                <InputUser />
            </React.Fragment>
        )
    }
}

export default connect("userCredential", actions)(withRouter(InfoPage));
import React from 'react';

import {withRouter} from 'react-router-dom';
import {store, actions} from '../global/store';
import { connect } from "unistore/react";

import '../styles/bootstrap.min.css';
import '../styles/main.css';

class NotFound extends React.Component{
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2 col-sm-12'></div>
                    <div className='col-md-8 col-sm-12 not-found-page'>
                        <h1>Maaf, halaman yang kamu cari tidak ditemukan<br /></h1>
                        <h1>:(</h1>
                    </div>
                    <div className='col-md-2 col-sm-12'></div>
                </div>
            </div>
        )
    }
}

export default connect("", actions)(withRouter(NotFound));
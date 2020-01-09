import React from 'react'
import Header from '../components/Header'

import {Redirect, withRouter} from 'react-router-dom'
import {store, actions} from '../global/store'
import { connect } from "unistore/react";

class Profile extends React.Component{

    render(){
        if (this.props.userCredential.isLogin !== true) {
            return <Redirect to={{ pathname: "/signin" }} />;
        }
        else { 
            return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <Header />
                <div className="row py-5 px-4">
                    <div className="col-xl-4 col-md-6 col-sm-10 mx-auto">

                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 bg-dark">
                            <div className="media align-items-end profile-header" style={{transform: "translateY(6rem)"}}>
                                <div className="profile mr-3">
                                    <img src={this.props.userCredential.profileImage} alt="..." width="130" className="rounded mb-2 img-thumbnail"/>
                                    <button type="button" className="btn btn-dark btn-sm btn-block">Edit profile</button>
                                </div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-0">{this.props.userCredential.fullName}</h4>
                                    <p className="small mb-4">@{this.props.userCredential.username}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">241</h5>
                                    <small className="text-muted">
                                    <i className="fa fa-map-marker mr-1"></i>Cities</small>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">84K</h5>
                                    <small className="text-muted">
                                    <i className="fa fa-user-circle-o mr-1"></i>Followers</small>
                                </li>
                            </ul>
                        </div>

                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h6 className="mb-0">{this.props.userCredential.bio}</h6>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        )
        }
    }
}

export default connect("userCredential", actions)(withRouter(Profile));
import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../global/store";
import Axios from 'axios';

export class ListFoursquare extends React.Component {
    
    render() {
        
        return (
        <div class="container-fluid">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="row">
                <div class="col-12 mt-3">
                    <div class="card">
                        <div class="card-horizontal">
                            <div class="img-square-wrapper">
                                <img class="" src={this.props.photos} alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{this.props.name}</h4>
                                <p class="card-text">{this.props.address}</p>
                                <p class="card-text" style={{fontWeight: "bolder"}}><i class="fa fa-star"></i>  {this.props.rating} / 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
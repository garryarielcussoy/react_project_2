import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import {withRouter, Link} from 'react-router-dom'
import {store, actions} from '../global/store'
import { connect } from "unistore/react";

class InputUser extends React.Component{
    getScoreAndImage = async () => {
        console.warn("Check props near", this.props.near)
        await this.props.storeGetCityImage(this.props.near);
        this.props.storeGetCityScore(this.props.near);
        this.props.requestFoursquare(this.props.categoryId);
    }

    functionToHandleCategoryChange = async(category) =>{
        if (this.props.cityNameToSearch !==''&& category!==''){
            await store.setState({categoryToSearch: category});
            //jalankan function axios foursquer utk request data by category
        }
    }

    render(){
        // console.log("Nilai CategoryId XXXX ", this.props.categoryId);
        return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2 col-sm-1'></div>
                <div className='col-md-8 col-sm-10 container-for-input'>
                    <div className='d-flex justify-content-center'>
                        <form className='input-user-form form-inline' onSubmit={this.props.handleOnSubmit}>
                            <div className='form-group input-container'>
                                <label for='near'></label>
                                <input type='text' onChange={(e) => this.props.handleOnChange1(e)} className='near' id='near' name='near' placeholder='Nama Kota'></input>
                            </div>
                            <div className='form-group input-container'>
                                <label for='categoryId'></label>
                                <select onChange={(e) => this.props.handleOnChange2(e)} name='categoryId' className='categoryId' id='categoryID'>
                                    <option name={this.props.fourSquareRequirement.university}>Universitas</option>
                                    <option name={this.props.fourSquareRequirement.sportFacility}>Tempat Olahraga</option>
                                    <option name={this.props.fourSquareRequirement.hospital}>Rumah Sakit</option>
                                    <option name={this.props.fourSquareRequirement.tempatIbadah}>Tempat Ibadah</option>
                                    <option name={this.props.fourSquareRequirement.mall}>Mall</option>
                                    <option >Data Statistik</option>
                                </select>
                            </div>
                            <button className='btn-lg btn-primary search-button' onClick={this.getScoreAndImage}>Cari</button>
                        </form>
                    </div>
                </div>
                <div className='col-md-2 col-sm-1'></div>
            </div>
        </div>
        )
    }
}

export default connect("userCredential, fourSquareRequirement, cityNameToSearch, near, categoryID, categoryId", actions)(withRouter(InputUser));
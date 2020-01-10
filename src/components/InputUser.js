import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import {withRouter, Link} from 'react-router-dom'
import {store, actions} from '../global/store'
import { connect } from "unistore/react";

class InputUser extends React.Component{
    handleButtonClick = async (cityName) => {
        await this.props.storeGetCityImage(cityName);
        this.props.storeGetCityScore(cityName);
    }

    functionToHandleCategoryChange = async(category) =>{
        if (this.props.cityNameToSearch !==''&& category!==''){
            await store.setState({categoryToSearch: category});
            //jalankan function axios foursquer utk request data by category
        }
    }

    render(){
        return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2 col-sm-1'></div>
                <div className='col-md-8 col-sm-10 container-for-input'>
                    <div className='d-flex justify-content-center'>
                        <form className='input-user-form form-inline' onSubmit={this.props.handleOnSubmit}>
                            <div className='form-group input-container'>
                                <label for='near'></label>
                                <input type='text' onChange={(e) => this.props.handleOnChange(e)} className='near' id='near' name='near' placeholder='Nama Kota'></input>
                            </div>
                            <div className='form-group input-container'>
                                <label for='categoryID'></label>
                                <select onChange={(e) => this.props.handleOnChange(e)} name='categoryID' className='categoryID' id='categoryID'>
                                    <option value={this.props.fourSquareRequirement.university}>Universitas</option>
                                    <option value={this.props.fourSquareRequirement.sportFacility}>Tempat Olahraga</option>
                                    <option value={this.props.fourSquareRequirement.hospital}>Rumah Sakit</option>
                                    <option value={this.props.fourSquareRequirement.tempatIbadah}>Tempat Ibadah</option>
                                    <option value={this.props.fourSquareRequirement.mall}>Mall</option>
                                    <option>Data Statistik</option>
                                </select>
                            </div>
                            <button className='btn-lg btn-primary search-button' onClick={(e) => this.props.handleInputUser(e)}>Cari</button>
                        </form>
                    </div>
                </div>
                <div className='col-md-2 col-sm-1'></div>
            </div>
        </div>
        )
    }
}

export default connect("userCredential, fourSquareRequirement, cityNameToSearch", actions)(withRouter(InputUser));
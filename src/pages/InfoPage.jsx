import React from 'react';
import Header from '../components/Header';
import CitySummary from '../components/CitySummary';
import CityScore from '../components/CityScore';

import {store, actions} from '../global/store_bimon';

import {withRouter} from 'react-router-dom';
import { connect } from "unistore/react";


// const InfoPage = props =>{
class InfoPage extends React.Component{

    handleClick = async (cityName) =>{
        await this.props.storeGetCityImage(cityName);
        this.props.storeGetCityScore(cityName);
    }
    render(){
        return (
            <div>
                {/* <Header /> */}
                <button onClick = { (e) => {this.handleClick('jakarta')}}>CityScore</button>
                <CitySummary />
                <CityScore />

            </div>

        );
    }
}

// export default InfoPage;
export default connect("", actions)(withRouter(InfoPage));

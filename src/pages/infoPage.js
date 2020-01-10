import React from 'react'
import Header from '../components/Header'
import HomePageComponent from '../components/HomePageComponent';
import Axios from 'axios';

import {withRouter} from 'react-router-dom'
import {store, actions} from '../global/store'
import { connect } from "unistore/react";
import InputUser from '../components/InputUser';
import CitySummary from '../components/CitySummary';
import CityScore from '../components/CityScore';
import ListFourSquare from '../components/infoFoursquare'

class InfoPage extends React.Component{
    hasil = []; 

    render(){
        const listInfoDetail = this.props.listInfo.map((item, key) => {
            return (
                <ListFourSquare
                name={item.name}
                address={item.location.address}
                photos= "http://via.placeholder.com/300x180"
                rating= '8.2'
                />
            );
            });
        
         
        console.log(this.props.categoryId);

        if (this.props.categoryId.toLowerCase() === "data statistik" ){
            console.log("masuk if");
            this.hasil = (<React.Fragment>
                        <Header />
                        <HomePageComponent />
                        <InputUser />
                        <CitySummary />
                        <CityScore />
                        
                    </React.Fragment>
                );
        }else{
            console.log("masuk else");
            this.hasil = (<React.Fragment>
                        <Header />
                        <HomePageComponent />
                        <InputUser />
                        <CitySummary />
                        {listInfoDetail}
                    </React.Fragment>
        );
        }
            
        

        return (

            <div>
                {this.hasil}
            </div>
            
        );
    }
}

export default connect("userCredential, fourSquareRequirement, isLoading, city, categoryId, listInfo", actions)(withRouter(InfoPage));
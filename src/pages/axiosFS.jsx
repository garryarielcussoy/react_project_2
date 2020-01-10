import React from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, actions } from "../global/store";
import { ListFoursquare } from "../components/infoFoursquare"

class FoursquareCategory extends React.Component {
    requestFoursquare = async (category) => {
        // binding this
        const self = store;
        await Axios
            .get("https://api.foursquare.com/v2/venues/search?categoryId="+category+"&client_id="
            +this.props.fourSquareRequirement.clientId+"&client_secret="
            +this.props.fourSquareRequirement.clientSecret+"&v=20200901"+"&near=malang"+"&limit=5")
            .then(function(response){
                self.setState({ listInfo: response.data.response.venues, isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
    }

    componentDidMount = async () => {
        await this.requestFoursquare("4f4528bc4b90abdf24c9de85");
    };

    render() {
        const listInfoDetail = this.props.listInfo.map((item, key) => {
            return (
                <ListFoursquare
                name={item.name}
                address={item.location.address}
                photos= "http://via.placeholder.com/300x180"
                rating= '8.2'
                />
              );
            });
    
        console.warn("cek list info", this.props.listInfo)
        return (
            <div className="container-fluid Movie-Category">
            <div className="row">
               { listInfoDetail } 
            </div>
        </div>
        );
    }
}
export default connect(
    "isLoading, fourSquareRequirement, listInfo, resultFoursquare",
    actions
  )(withRouter(FoursquareCategory));
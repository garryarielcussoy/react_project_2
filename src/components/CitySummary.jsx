import React from 'react';
import '../global/store_bimon';
import '../styles/bootstrap.min.css';
import '../styles/CitySummary.css';

import {withRouter} from 'react-router-dom';
// import {store, actions} from '../global/store';
import {store, actions} from '../global/store_bimon';

import { connect } from "unistore/react";

const CitySummary = props => {
    // console.log(props.resultTeleportScore.categories);
    // console.log(props.resultTeleportScore.summary);
    console.log("isi resultTeleportPhotos", props.resultTeleportPhotos);
    // console.log(props.resultTeleportPhotos.photos[0].image.mobile);

    if (props.resultTeleportPhotos.photos.length>0){
        const cityPhotoUrl = props.resultTeleportPhotos.photos[0].image.mobile;
        const cleanText = props.resultTeleportScore.summary.replace(/<\/?[^>]+(>|$)/g, "");
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="city-photo">
                            <img src={cityPhotoUrl} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {cleanText}
                    </div>

                </div>
                        

            </div>
        );
    }else{
        return (
            <div>

            </div>
        );
    }



    // const cityPhotoUrl = props.resultTeleportPhotos.photos[0].image.mobile;
    // const cleanText = props.resultTeleportScore.summary.replace(/<\/?[^>]+(>|$)/g, "");
    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-4">
    //                 <div className="city-photo">
    //                     <img src={cityPhotoUrl} alt=""/>
    //                 </div>
    //             </div>
    //             <div className="col-md-8">
    //                 {cleanText}
    //             </div>

    //         </div>
                    

    //     </div>
    // );
}


export default connect("resultTeleportScore, resultTeleportPhotos", actions)(withRouter(CitySummary));

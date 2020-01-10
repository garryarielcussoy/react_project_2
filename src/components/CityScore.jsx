import React from 'react';
import '../global/store_bimon';
import '../styles/bootstrap.min.css';
import '../styles/CitySummary.css';
import '../styles/CityScore.css';

import {withRouter} from 'react-router-dom';
import {store, actions} from '../global/store_bimon';
import { connect } from "unistore/react";

const CityScore = props => {

    // console.log(props.resultTeleportScore.categories);


    if (props.resultTeleportScore.categories!==''){
        let overallScoreDec = props.resultTeleportScore.teleport_city_score/60*5;
        let overallScore = Math.floor (overallScoreDec);
        overallScore = overallScore.toFixed(1);

        let theStar = [];

        for (let i=0; i<overallScore;i++){
            theStar.push(<span><i className="active icon-star"></i></span>);
        }

        for (let i=0; i< 5-overallScore;i++){
            theStar.push(<span><i className="icon-star"></i></span>);
        }


        const cityStat = props.resultTeleportScore.categories.map( (item, index) =>{
            const percentage = item.score_out_of_10/10*100;
            return (
                <div className="bar-container">
                    {item.name}
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{'width': percentage.toString()+'%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                
            )
        });

    

        return (
            <div className="container">
                <div className="inner">
                    <div className="rating">
                        <span className="rating-num">{overallScore}</span>
                        <div className="rating-stars">
                            {theStar}

                            
                        </div>

                        <div className="overall-score">
                            {/* <i className="icon-user"></i> 1,014,004 total */}
                            Overall Score
                        </div>
                    </div>
                
                    <div>
                        {cityStat}
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
}


export default connect("resultTeleportScore", actions)(withRouter(CityScore));

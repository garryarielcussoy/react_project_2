import React from 'react';
import Header from '../components/Header';

import {withRouter} from 'react-router-dom';
import {store, actions} from '../global/store';
import { connect } from "unistore/react";

import '../styles/bootstrap.min.css';
import '../styles/Login.css';
import axios from 'axios'

class Login extends React.Component{

    // handleFormSubmit(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
        
    //     fetch('/api/form-submit-url', {
    //       method: 'POST',
    //       body: data,
    //     });
    // }
    IsRememberState = false;
    handleIsRememberState(el){
        // console.log(el.target.checked)
        this.IsRememberState = el.target.checked;
    }

    storeHandleLogin = async(isRemembered) => {
        let data = {
            username: this.props.username,
            password: this.props.password
        }
        const self = this
        console.warn("CHECK DATA", data)
        axios
            .post('https://react-project.free.beeceptor.com/data', data)
            .then(async function(response){
                await console.warn("CHECK RESPONSE", response.data)
                await store.setState({userCredential: {...store.state, fullName: response.data.fullName, bio: response.data.bio, profileImage: response.data.profileImage, isRemembered: isRemembered, email: response.data.email, userName: response.data.username, apiKey: response.data.apiKey, isLogin: true}})
                console.warn("CHECK PROPS AFTER SETSTATE", self.props.userCredential)
            })
            .catch(function(response){
                console.warn('TEST ERROR')
            })
        
        // store.setState({
        //     userCredential: {
        //         userName: "bimon", 
        //         email: "bimon@alterra.id",
        //         apiKey: "1234567890",
        //         isLogin: true,
        //         isRemembered: isRemembered
        //     }
        // })


        this.props.history.push('/info')
    }

    render(){
        console.log("nilai user Credential", this.props.userCredential);
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <form className="form-signin" onSubmit={e => e.preventDefault()}>       
                        <h2 className="form-signin-heading">Please login</h2>
                        <input type="text" className="form-control" name="username" placeholder="Username or Email Address" required="" autoFocus="" onChange={(e) => this.props.handleOnChange(e)} />
                        <input type="password" className="form-control" name="password" placeholder="Password" required="" onChange={(e) => this.props.handleOnChange(e)} />      
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" onClick={e => this.handleIsRememberState(e)}/> Remember me
                        </label>
                        {/* {e => this.props.SearchClick(e)} */}
                        <button className="btn btn-lg btn-primary btn-block" onClick={ e => this.storeHandleLogin(this.IsRememberState)} > Login </button>   
                    </form>
                </div>
            </div>

        );
    }
}

export default connect("userCredential, username, password", actions)(withRouter(Login));
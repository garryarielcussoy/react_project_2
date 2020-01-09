import React from 'react';
import Header from '../components/Header';

import {withRouter} from 'react-router-dom';
import {store, actions} from '../global/store';
import { connect } from "unistore/react";

import '../styles/bootstrap.min.css';
import '../styles/Login.css';

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

    render(){
        console.log("nilai user Credential", this.props.userCredential);
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <form className="form-signin" onSubmit={e => e.preventDefault()}>       
                        <h2 className="form-signin-heading">Please login</h2>
                        <input type="text" className="form-control" name="username" placeholder="Username or Email Address" required="" autoFocus="" />
                        <input type="password" className="form-control" name="password" placeholder="Password" required=""/>      
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" onClick={e => this.handleIsRememberState(e)}/> Remember me
                        </label>
                        {/* {e => this.props.SearchClick(e)} */}
                        <button className="btn btn-lg btn-primary btn-block" onClick={ e => this.props.storeHandleLogin(this.IsRememberState)} > Login </button>   
                    </form>
                </div>
            </div>

        );
    }
}

export default connect("userCredential", actions)(withRouter(Login));
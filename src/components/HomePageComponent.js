import React from 'react'
import Header from '../components/Header'

import {withRouter} from 'react-router-dom'
import {store, actions} from '../global/store'
import { connect } from "unistore/react";

class HomePageComponent extends React.Component{
    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2 col-sm-1'></div>
                    <div className='col-md-8 col-sm-10 info-kota-information'>
                        {this.props.userCredential.isLogin === false ?
                        <p className='information-content'>
                        Selamat Datang di INFO KOTA. Melalui aplikasi ini, kamu bisa caritau banyak informasi penting
                        seputar suatu kota, mulai dari rumah sakit, universitas, sampai tingkat biaya hidupnya!
                        Untuk bisa menikmati aplikasi ini, kamu cukup login terlebih dahulu, simpel bukan? &#x1F31D;
                        </p>:
                        <p className='information-content'>
                        Selamat Datang di INFO KOTA. Untuk mencari informasi yang kamu butuhkan tentang suatu kota
                        silahkan masukkan nama kota ke input sebelah kiri, dan spesifikasinya di sebelah kanan &#x1F31D;
                        </p>
                        }
                        
                    </div>
                    <div className='col-md-2 col-sm-1'></div>
                </div>
            </div>
        )
    }
}

export default connect("userCredential", actions)(withRouter(HomePageComponent))
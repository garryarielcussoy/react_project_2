import createStore from "unistore";
import Axios from 'axios';

const initState = {
    userCredential : {
        fullName: "Setyo Ramdhoni",
        username: "setyoyo07",
        password: "",
        isLogin: true,
        email: "",
        profileImage: "https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg",
        bio : "Ini short bio description"
    }
};

export const store = createStore(initState);

export const actions= store => ({
});

import createStore from "unistore";
import axios from 'axios';

const allState = {
    user_credential: {
        fullNname: '',
        userNname: '',
        email: '',
        bio: '',
        apiKey: '',
        profileImage: '',
        isLogin: false,
        isRemembered: false
    }
};


export const store = createStore(allState);

export const actions = store => ({

    // handleIsRememberState: (state, el) =>{
    //     // console.log(el.target.checked);
    //     // { someProperty: { ...this.state.someProperty, flag: false} }
    //     store.setState({user_credential: {...store.state, isRemembered: el.target.checked}});
    // },


    storeHandleLogin: async(state, isRemembered) => {
        store.setState({
            user_credential: {
                user_name: "bimon", 
                email: "bimon@alterra.id",
                api_key: "1234567890",
                is_login: true,
                isRemembered: isRemembered
            }
        });

        // console.log("masuk sini BOSS");
        // console.log("nilai state IsRemembered ", isRemembered);

        // await axios
        // .post("https://bimon.free.beeceptor.com/auth", "")
        // .then(function (response) {
        //     if (response.data.hasOwnProperty("api_key")) {
        //         console.log("nilai api_key", response.data.api_key);

        //         store.setState({
        //             user_credential: {
        //                 user_name: response.data.name, 
        //                 email: response.data.email,
        //                 api_key: response.data.api_key,
        //                 is_login: true,
        //                 isRemembered: isRemembered
        //             }
        //         });
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    },

});



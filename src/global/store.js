import createStore from "unistore";
import axios from 'axios';

const allState = {
    userCredential: {
        fullName: '',
        userName: '',
        email: '',
        bio: '',
        apiKey: '',
        profileImage: '',
        isLogin: false,
        isRemembered: false
    },
    resultTeleportScore: {

    },
    fourSquareRequirement: {
        clientId: 'SVNLQVD0ST2L1E5JE5PU0S0Z2MIVPOI15DEEWFB41EDRXBTZ',
        clientSecret: '004QUQHQLHNYEZK3LY0N3IC3E0LQ34HU5WUYAEDIPWMNEALH',
        v: '20190901',
        near: 'malang',
        limit: 5,
        categoryId: {
            university: '4bf58dd8d48988d1ae941735',
            sportFacility: '4f4528bc4b90abdf24c9de85',
            hospital: '4bf58dd8d48988d196941735',
            tempatIbadah: '4bf58dd8d48988d131941735',
            mall: '4bf58dd8d48988d1fd941735'
        }
    },

    resultFoursquare: {
        id: '',
        name: '',
        address: '',
        photos: '',
        rating: ''
    }
};

export const store = createStore(allState);

export const actions = store => ({

    handleIsRememberState: (state, el) =>{
        // console.log(el.target.checked);
        // { someProperty: { ...this.state.someProperty, flag: false} }
        store.setState({userCredential: {...store.state, isRemembered: el.target.checked}});
    },

    storeHandleLogin: async(state, isRemembered) => {
        store.setState({
            userCredential: {
                userName: "bimon", 
                email: "bimon@alterra.id",
                apiKey: "1234567890",
                isLogin: true,
                isRemembered: isRemembered
            }
        })
    },

    handleLogout: (state, event) => {
        store.setState({userCredential: {...store.state, isLogin: false}})
    }
})
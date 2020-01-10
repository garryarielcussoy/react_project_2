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
    cityNameToSearch:'',
    categoryToSearch:'',
    resultTeleportScore: {
        categories:'',
        summary:''
    },
    resultTeleportPhotos:{
        photos: []
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
    },

    near: '',
    categoryId: '',
    username: '',
    password: ''
};

export const store = createStore(allState);

export const actions = store => ({

    handleIsRememberState: (state, el) =>{
        // console.log(el.target.checked);
        // { someProperty: { ...this.state.someProperty, flag: false} }
        store.setState({userCredential: {...store.state, isRemembered: el.target.checked}});
    },

    handleLogout: (state, event) => {
        alert("Sukses Logout")
        store.setState({userCredential: {...store.state, isLogin: false}})
    },

    handleInputUser: (state, event) => {
        console.warn("CHECK INPUT USER")
        const self = this
        const categoryId = this.props.categoryId
        const near = this.props.near
        console.warn("INPUT USER CONST", categoryId, near)
    },

    handleOnSubmit: (state, event) => {
        event.preventDefault()
        console.warn("CHECK ON SUBMIT", event.target)
    },

    handleOnChange: (state, event) => {
        console.warn("CHECK CHANGE", event.target.value)
        store.setState({[event.target.name]: event.target.value})
    },

    storeGetCityScore: async (state, cityName) => {
        await axios
        .get(`https://api.teleport.org/api/urban_areas/slug:${cityName.toLowerCase()}/scores/`)
        .then(function(response){
            if (response.data.hasOwnProperty('categories')){
                store.setState({resultTeleportScore: response.data});
            }
        })
        .catch(function(error){
            console.log(error);
        });
    },

    storeGetCityImage: async (state, cityName) => {
        await axios
        .get(`https://api.teleport.org/api/urban_areas/slug:${cityName.toLowerCase()}/images/`)
        .then(function(response){
            if (response.data.hasOwnProperty('photos')){
                store.setState({resultTeleportPhotos: response.data});
            }
        })
        .catch(function(error){
            console.log(error);
        });
    },
    storeSetState: async (state, categoryName) =>{
        if (categoryName!==''){
            await store.setState({categoryToSearch: categoryName});
        }
    }


})


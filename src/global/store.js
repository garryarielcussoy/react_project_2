import createStore from "unistore";
import axios from 'axios';
import Axios from 'axios';

const allState = {
    userCredential: {
        fullName: '',
        userName: '',
        email: '',
        bio: 'LoremIpsum',
        apiKey: '',
        profileImage: 'https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg',
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
        clientId: 'XSOTXRGJ42N13RWOU0S1LTTLQRTLNKESN0YAIOI4AX2QBAJW',
        clientSecret: '4LXEAECJPWXWPV1D3LI51WE4QQQXVU0BYCR2PMQJE5QRZLZH',
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

    listInfo: [],
    near: '',
    categoryId: 'Universitas',
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
        const categoryId = state.categoryId
        const near = state.near
        console.warn("INPUT USER CONST", categoryId, near)        
    },

    handleOnSubmit: (state, event) => {
        event.preventDefault()
        console.warn("CHECK ON SUBMIT", event.target)
    },

    handleOnChange1: (state, event) => {
        console.warn("CHECK CHANGE", event.target.value)
        store.setState({[event.target.name]: event.target.value})
    },

    handleOnChange2: async(state, event) => {
        // console.warn("check nilai [event.target.name] XXX ", [event.target.name])
        // console.warn("CHECK CHANGE xxxx", event.target.value)
        await store.setState({[event.target.name]: event.target.value})

        // console.log("Nilai CategoryId XXXX ", state.categoryId);
    },

    storeGetCityScore: async (state, cityName) => {
        const fixCityName = cityName.replace(" ", "-");
        await axios
        .get(`https://api.teleport.org/api/urban_areas/slug:${fixCityName.toLowerCase()}/scores/`)
        .then(function(response){
            if (response.data.hasOwnProperty('categories')){
                store.setState({resultTeleportScore: response.data});
            }else{
                store.setState({resultTeleportScore: {categories:'', summary:''}});
            }
        })
        .catch(function(error){
            console.log(error);
        });
    },

    storeGetCityImage: async (state, cityName) => {
        // console.warn("Cstate near from store", state.near)
        const fixCityName = cityName.replace(" ", "-");

        await axios
        .get(`https://api.teleport.org/api/urban_areas/slug:${fixCityName.toLowerCase()}/images/`)
        .then(function(response){
            if (response.data.hasOwnProperty('photos')){
                store.setState({resultTeleportPhotos: response.data});
            }else{
                store.setState({resultTeleportPhotos:{photos: []}});
                    
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
    },

    storeHandleLogin: async(state, isRemembered) => {
    
        // console.log("masuk sini BOSS");
        // console.log("nilai state IsRemembered ", isRemembered);

        await axios
        // .post("https://setyor.free.beeceptor.com/auth", "")
        .post("https://react-project.free.beeceptor.com/data","")
        .then(function (response) {
            if (response.data.hasOwnProperty("api_key")) {
                console.log("nilai api_key", response.data.api_key);
               store.setState({
                   userCredential: {
                    fullName: "Garry Ariel",
                    userName: response.data.name,
                    email: response.data.email,
                    bio: 'LoremIpsum',
                    apiKey: response.data.api_key,
                    profileImage: 'https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg',
                    isLogin: true,
                    isRemembered: false
                   }})
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    requestFoursquare: async (state, category, event) => {
        // binding this
        const self = store;
        let kategori = "xxx";

        if (state.categoryId.toLowerCase() == "universitas"){
            kategori=state.fourSquareRequirement.categoryId.university
            console.log('univ')
        } else if (state.categoryId.toLowerCase() == "tempat olahraga"){
            kategori=state.fourSquareRequirement.categoryId.sportFacility;
            console.log('sport')

        } else if (state.categoryId.toLowerCase() == "rumah sakit"){
            kategori=state.fourSquareRequirement.categoryId.hospital;
            console.log('rs')

        } else if (state.categoryId.toLowerCase() == "tempat ibadah"){
            kategori=state.fourSquareRequirement.categoryId.tempatIbadah;
            console.log('masjid')

        } else if (state.categoryId.toLowerCase() == "mall"){
            kategori = state.fourSquareRequirement.categoryId.mall;
            console.log('mall')

        }

        // console.warn("nilai state category id", state.categoryId);
        // console.warn("nilai state category id", kategori);

        await Axios
            .get("https://api.foursquare.com/v2/venues/search?categoryId="+kategori+"&client_id="
            +allState.fourSquareRequirement.clientId+"&client_secret="
            +allState.fourSquareRequirement.clientSecret+"&v=20200901"+"&near="+state.near+"&limit=5")
            .then(function(response){
                // console.warn("YEAAAAAAAAAAAAY")
                self.setState({ listInfo: response.data.response.venues, isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                console.warn("ERROR :(", kategori)
                self.setState({isLoading: false});
                // console.log(error)
            })
    }

})


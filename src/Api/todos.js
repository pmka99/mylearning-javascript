import axios from "axios";

const intance = axios.create({
    baseURL:'https://weighty-disk-322313-default-rtdb.firebaseio.com'
})

intance.interceptors.response.use(function(response){
    return response;
},function(err){
    return Promise.reject(err);
})

intance.interceptors.request.use(function(config){
    return config
},function(err){
    return Promise.reject(err)
})
export default intance;
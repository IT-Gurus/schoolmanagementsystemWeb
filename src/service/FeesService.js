import axios from "axios";

const apiClient = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
});

export default{
    getFees(){
        return apiClient.get('/todos');
    },
    getFeesById(id){
        return apiClient.get('/events/' + id);
    }
}
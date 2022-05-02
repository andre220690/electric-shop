import axios from 'axios'
import config from '../config.json'

export default class PostService{
    static async getAll(){
        const response = await axios.get(config.api+'api/products/all',{});
        return response;
    }
    static async getId(id){
        const response = await axios.get(config.api+'api/products/id/'+id,{})
        return response;
    }
    static async getSearch(search){
        const response = await axios.get(config.api+'api/products/search/'+search,{})
        return response;
    }
    static async getInfo(id){
        const response = await axios.get(config.api+'api/products/info/'+id,{})
        return response;
    }
    static async getCategory(){
        const response = await axios.get(config.api+'api/products/allcategory',{})
        return response;
    }
    static async getCatalogId(id){
        const response = await axios.get(config.api+'api/products/category/'+id,{})
        return response;
    }
    static async getAnalog(id){
        const response = await axios.get(config.api+'api/products/analog/'+id,{})
        return response;
    }
    static async getComplect(id){
        const response = await axios.get(config.api+'api/products/complect/'+id,{})
        return response;
    }
    static async postOrder(order){
        console.log(order);
        await axios.post(config.api+'api/products/order',order);
    }

}
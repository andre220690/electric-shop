import PostService from "../API/PostService";

export const useApi = (cbSetProd, cbSetFiltManuf) => {

    const toJSON = (list)=>{
        var result = [];
        list.forEach((item)=>{
            result.push(JSON.parse(item));
        })
        return result;
    }

    const getSearch = async (search)=>{
        const response = await PostService.getSearch(search);
        var result = toJSON(response.data);
        cbSetProd(result);
        cbSetFiltManuf(manuf(result));
    }
    const getAll = async () => {
        const response = await PostService.getAll();
        var result = toJSON(response.data);
        cbSetProd(result);   
        cbSetFiltManuf(manuf(result));
    }
    const getInfo = async (id) =>{
        const response = await PostService.getInfo(id);
        const result = response.data;
        return result;
    }
    const getCategory = async ()=>{
        const response = await PostService.getCategory();
        const result = response.data;
        return result;
    }
    const getCatalogId = async (id)=>{
        const response = await PostService.getCatalogId(id);
        const result = toJSON(response.data);
        cbSetProd(result);
        cbSetFiltManuf(manuf(result));
    }
    const getAnalog = async (id)=>{
        const response = await PostService.getAnalog(id);
        const result = toJSON(response.data);
        cbSetProd(result);
        cbSetFiltManuf(manuf(result));
    }
    const getComplect = async (id)=>{
        const response = await PostService.getComplect(id);
        const result = toJSON(response.data);
        cbSetProd(result);
        cbSetFiltManuf(manuf(result));
    }
    const postOrder = async(order)=>{
        await PostService.postOrder(order);
    }

    const manuf = function(list){
        var result = [];
        list.forEach((obj)=>{
            if(obj.Manufacture!=null && !result.includes(obj.Manufacture)){
                result.push(obj.Manufacture);
            }
        })
        return result;
    }

    return [getAll, getSearch, getInfo, getCategory, getCatalogId, getAnalog, getComplect]
}
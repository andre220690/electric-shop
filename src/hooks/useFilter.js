export const useFilter = (products, setProducts)=>{

    const availabilityFilter = ()=>{
        var result=[];
        products.forEach((obj)=>{
            if(obj.Availability===true){
                result.push(obj);
            }
        })
        setProducts(result);
    }

    const manifactureFilter = (list)=>{
        var result=[];
        products.forEach((obj)=>{
            if(obj.Manufacture!=null && list.includes(obj.Manufacture)){
                result.push(obj);
            }
        })
        setProducts(result);    
    }


    return [availabilityFilter, manifactureFilter]
}
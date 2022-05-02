import React,{useState, useEffect} from 'react'
import cl from './SubCatalog.module.css'

const SubCatalog = ({item, getCatalogId}) => {
    const [name, setName] = useState({});

    useEffect(()=>{
        setName(JSON.parse(item));
      },[])

    const getProducts = ()=>{
        getCatalogId(name.subId);
    }

    
  return (
    <div className={cl.element} onClick={getProducts}>{name.subName}</div>
  )
}

export default SubCatalog
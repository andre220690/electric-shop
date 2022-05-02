import cl from './Catalog.module.css';
import React, {useEffect, useState} from 'react';
import ShowCatalog from './ShowCatalog';

const Catalog = ({getCategory, getCatalogId}) => {
    const [isShow, setIsShow] = useState(false);
    const [category, setCategory] = useState([]);

    const showCatalog = ()=>{
        isShow? setIsShow(false) : setIsShow(true);
    }

    useEffect(async ()=>{
        const param = await getCategory();
        setCategory(param);
    },[])

  return (
        <div className={cl.catalogBtn} onClick={showCatalog}>Каталог
            {isShow
            ?(<div className={cl.categoryWord}>
                {category.map((item, i)=>
                <ShowCatalog getCatalogId={getCatalogId} item={item} key={i}/>
            )}
            </div>)
            :<div></div>
            }
      </div>    
  )
}

export default Catalog
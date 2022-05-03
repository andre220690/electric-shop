import React,{useEffect, useState} from 'react'
import SubCatalog from './SubCatalog';
import cl from './ShowCatalog.module.css'

const ShowCatalog = ({item, getCatalogId}) => {
  const [name, setName] = useState({});
  const [isShow, setIsShow] = useState(false);

  useEffect(()=>{
    setName(JSON.parse(item));
  },[])

  const showTrue = ()=>{
    setIsShow(true);
  }
  const showFalse = ()=>{
    setIsShow(false);
  }

  return (
    <div className={cl.category} onMouseEnter={showTrue} onMouseLeave={showFalse}>        
        {name.category}
        {isShow
        ?(<div className={cl.subWord}>
          {name.subCategory.map((sub, i)=>
            <SubCatalog getCatalogId={getCatalogId} item={sub} key={i}/>
          )}
        </div>
        )
        :<div/>
        }
    </div>
  )
}

export default ShowCatalog
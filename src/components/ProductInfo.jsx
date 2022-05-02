import React, { useEffect, useState} from 'react';
import st from './ProductInfo.module.css'
import config from '../config.json'


const ProductInfo = ({Id, setShowInfo, getInfo}) => {
  const [info, setInfo] = useState({});
  const [view, setView] = useState(false);


  useEffect(async () => {
    const param = await getInfo(Id);
    setInfo(param);
    setView(true);
  },[])

  const closeInfo = ()=>{
    setShowInfo(false);
  } 
    
  return (
    <div className={st.outSide} onClick={closeInfo}>
      <div className={st.prodInfo} onClick={(e)=>e.stopPropagation()}>
        <div className={st.textBox}>
          <div className={st.name}>
            <span>Название: </span>{info.Name}
          </div>
          <p>
            Характеристики
          </p>
          {view
          ?info.Parameters.map((index, key)=>
            <div key={key}>{index}</div>
          )
          :<div></div>
          }
          <p>Описание</p>
          <div>
            {info.Discription}
          </div>
        </div>
        <div className={st.imgBox}>
          <img className={st.img} src={config.api + info.Image} />
        </div>          
      </div>
    </div>
  )
}

export default ProductInfo
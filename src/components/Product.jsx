import React,{useEffect, useState} from 'react'
import config from '../config.json'
import './Product.css'
import ProductInfo from './ProductInfo';
import basketPNG from '../img/basketBuy.png'

const Product = (prop) => {
    const [showInfo,setShowInfo] = useState(false);
    const [obj, setObj] = useState(0);
    const [buyCount, setBuyCount] = useState('');
    const addInfo=()=>{
        setShowInfo(true);    
    }

    useEffect(()=>{
        setObj(prop.item);
      },[])

    const handlerChange = (event)=>{
        setBuyCount(event.target.value);
    }

    const setBasket = ()=>{
        if(buyCount>0){
            const result = {'id' : obj.Id, 'name': obj.Name, 'count' : buyCount, price : obj.Price};
            if(localStorage.length>0){
                var basket = JSON.parse(localStorage.getItem('basket'));                
                basket.push(result);            
                localStorage.setItem('basket', JSON.stringify(basket));
            }
            else{
                localStorage.setItem('basket', JSON.stringify([result]));
            }       
        }
        prop.setIsSumm(false);
        setBuyCount('');
    }

  return (
    <div className='prod-product'>
        <img className='prod-prod-img' src={config.api + obj.Image} onClick={addInfo}/>
        <div className='prod-prod-name'>{obj.Name}</div>
        <div className='prod-art-btn-bar'>
            <div className='prod-art'>арт. {obj.Articul}</div>
            {obj.AnalogId!=null
                ?<div className='prod-analog-complect'>
                    <svg className='MySvgIconComplect' onClick={()=> prop.getAnalog(obj.AnalogId)} focusable="true" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z">
                        </path>
                    </svg>
                </div>
                :<div/>
            }
            {obj.isComplect
                ?<div className='prod-analog-complect'>                 
                    <svg className='MySvgIconComplect' onClick={()=> prop.getComplect(obj.Id)} focusable="true" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z">
                        </path>
                    </svg>
                </div>
                :<div/>
            }
        </div>
        <div className='prod-availability-count-buy'>
            {obj.Availability
                ?<div className='prod-availability' style={{color: 'green'}}>В наличии</div>
                :<div className='prod-availability' style={{color: 'red'}}>Отсутствует</div>
            }
            <div className='prod-price'>{obj.Price}</div>
            <input type='number' className='prod-inp-count' value={buyCount} onChange={handlerChange}/>
            <div className='prod-buy' onClick={setBasket}><img className='img-basket' src={basketPNG}/></div>
        </div>
        {showInfo
            ?<ProductInfo Id={obj.Id} setShowInfo={setShowInfo} getInfo={prop.getInfo}/>
            : <div></div>
        }
            
    </div>
  )

}

export default Product
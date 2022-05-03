import React, { useEffect, useState } from 'react'
import ButtonBasket from '../../UI/ButtonBasket';
import Basket from './Basket'
import cl from './Basket.module.css'

const BasketInfo = ({setIsSumm, isSumm}) => {
    const [summ, setSumm] = useState(0);
    const [basket, setBasket] = useState([]);
    const [showBasket, isShowBasket] = useState(false);

    useEffect(()=>{
        if(localStorage.length>0){
            var arr = JSON.parse(localStorage.getItem('basket'));
            var summ = 0;
            setBasket(arr);
            arr.forEach(element => {
                var result = summ + (Number(element.count)*Number(element.price));
                setSumm(result.toFixed(2));
            });
        }
        setIsSumm(true);    
        
    },[isSumm]);

  return (
    <div className={cl.basket}>
        <div className={cl.summ}>В корзине: {summ}</div>
        <ButtonBasket click={()=> isShowBasket(true)}/>
        {showBasket
        ?<Basket isShowBasket={isShowBasket} item={basket} setItem={setBasket}/>
        :<div/>
        }        
    </div>
  )
}

export default BasketInfo
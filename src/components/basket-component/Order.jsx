import React, { useState } from 'react'
import PostService from '../../API/PostService'
import cl from './Basket.module.css'


const Order = ({item, closeBasket}) => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    const postOrder = async ()=>{
        var order = {
            name: name,
            mail: mail,
            phone:phone,
            products: item
        }
        //await PostService.postOrder(JSON.stringify(order));
        await PostService.postOrder(order);

    }

  return (
    <div className={cl.postForm}>
        <h1 className={cl.contactForm}>
            Контактные данные
        </h1>
        <div>
            <div>
                <div>Имя</div>
                <input className={cl.inputForm} value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div>
                <div>Почта</div>
                <input className={cl.inputForm} value={mail} onChange={(e)=>setMail(e.target.value)}></input>
            </div>
            <div>
                <div>Номер телефона</div>
                <input className={cl.inputForm} value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            </div>
        </div>
        <div>
            <button className={cl.setOrder} onClick={postOrder}>Оформить заказ</button>
        </div>
    </div>
  )
}

export default Order
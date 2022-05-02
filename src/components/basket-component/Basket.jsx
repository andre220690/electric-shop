import cl from './Basket.module.css'
import cross from '../../img/red-cross.png'
import Order from './Order'

const Basket = ({isShowBasket, item, setItem}) => {

  const closeBasket = ()=>{
    isShowBasket(false);
  }
  const handleClose = (e)=>{
    e.stopPropagation();
  }
  const deleteProduct = (id, count)=>{
    if(localStorage.length>0){
      var arr = JSON.parse(localStorage.getItem('basket'));
      var result = [];
      arr.forEach(element => {
        if(element.id!==id)
          result.push(element);
        else if(element.count!==count)
          result.push(element);
      });
      setItem(result);
      localStorage.setItem('basket', JSON.stringify(result));   
    }
  }

  return(
    <div className={cl.outSide} onClick={closeBasket}>
      <div className={cl.basketView} onClick={handleClose}>
        <h1 className={cl.h1}>Товары в вашей корзине</h1>
        <table className={cl.table}>
          <thead>
            <tr className={cl.row}>
              <th>Название</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Сумма</th>
              <th></th>   
            </tr>
          </thead>
          <tbody>          
            {item
            ?item.map((prod, index)=>(
              <tr key={index}>
                <td>{prod.name}</td>
                <td>{prod.count}</td>
                <td>{prod.price}</td>
                <td>{(Number(prod.count)*Number(prod.price)).toFixed(2)}</td>
                <td><div onClick={()=>deleteProduct(prod.id, prod.count)}><img className={cl.crossImg} src={cross}/></div></td>
              </tr>
            ))
            :<div/>
            }
          </tbody>
        </table>
        <Order item={item} closeBasket={closeBasket}/>
      </div>
    </div>
  )
}

export default Basket
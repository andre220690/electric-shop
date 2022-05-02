import React, {useEffect, useState} from 'react'
import "./styles/App.css"
import config from './config.json'
import { useApi } from './hooks/useApi';
import { useFilter } from './hooks/useFilter';
import Product from './components/Product';
import Filters from './components/Filters';
import Catalog from './components/catalog-component/Catalog';
import BasketInfo from './components/basket-component/BasketInfo';

function App() {

  const [products, setProducts] = useState([]);
  const [filtersManuf, setFiltersManuf] = useState();
  const [isSumm, setIsSumm] = useState(true);

  const[getAll, getSearch, getInfo, getCategory, getCatalogId, getAnalog, getComplect] = useApi(setProducts, setFiltersManuf);

  const[availabilityFilter, manifactureFilter] = useFilter(products, setProducts);

  useEffect(()=>{
    getAll();
    
  },[])

  const search=()=>{
    var search_find = document.getElementsByClassName('search')[0].value;
    if(search_find){
      getSearch(search_find);
    }else{
      getAll();
    }
  } 

  return (
    <div className="App">
      <div className="header">
        <img src={config.logo} className="header-info" id="logo"/>
          <div className="contacts header-info">
          Контакты: {config.contacts.phone} {config.contacts.email}
          </div>
          <BasketInfo setIsSumm={setIsSumm} isSumm={isSumm}/>
      </div>
      <div className='find-bar'>
        <Catalog className='catalog' getCategory={getCategory} getCatalogId={getCatalogId}/>       
        <input className='search'/>
        <button className='btn-search' onClick={search}>Поиск</button>
      </div>
      <div className='navigations'>
        <div className='filters'>
          {filtersManuf
          ?<Filters manifactureFilter={manifactureFilter} availabilityFilter={availabilityFilter} getAll={getAll} manufactures={filtersManuf}/>
          : <div>LOADING</div>
          }
        </div>
        <div className='products-list'>
          {products.map((item)=>
            <Product key={item.Id} item={item} getInfo={getInfo} getAnalog={getAnalog} getComplect={getComplect} setIsSumm={setIsSumm}/>
          )}
        </div>
      </div>

    </div>
  );
}

export default App;

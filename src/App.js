import React, {useEffect, useState} from 'react'
import "./styles/App.css"
import config from './config.json'
import { useApi } from './hooks/useApi';
import { useFilter } from './hooks/useFilter';
import Product from './components/Product';
import Filters from './components/Filters';
import Catalog from './components/catalog-component/Catalog';
import BasketInfo from './components/basket-component/BasketInfo';
import ButtonSearth from './UI/ButtonSearth';
import InputSearth from './UI/InputSearth';

function App() {

  const [products, setProducts] = useState([]);
  const [filtersManuf, setFiltersManuf] = useState();
  const [isSumm, setIsSumm] = useState(true);
  const [fieldSearth, setFieldSearth] = useState();

  const[getAll, getSearch, getInfo, getCategory, getCatalogId, getAnalog, getComplect] = useApi(setProducts, setFiltersManuf);

  const[availabilityFilter, manifactureFilter] = useFilter(products, setProducts);

  useEffect(()=>{
    getAll();
    
  },[])

  const search=()=>{
    if(fieldSearth){
      getSearch(fieldSearth);
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
        <Catalog getCategory={getCategory} getCatalogId={getCatalogId}/>       
        <InputSearth fieldSearth={fieldSearth} setFieldSearth={setFieldSearth}/>
        <ButtonSearth className='btn-search' searth={search}/>
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

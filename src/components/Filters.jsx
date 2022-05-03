import React,{useState} from 'react'
import ButtonGreen from '../UI/ButtonGreen';
import './Filters.css'

const Filters = (props) => {
    const [arr, setArr] = useState([]);

    const handleChange = item => {

        if (arr.includes(item)) {
            setArr([...arr.filter(value => value !== item)])
        } else {
            setArr([...arr, item])
        }
    }

    const checkManuf = ()=>{

        if(document.getElementById('check-avialibility').checked){
            props.availabilityFilter();
        }

        if(arr.length){
            props.manifactureFilter(arr);
        }
    }
    
  return (
    <div className='f-filter'>
        <div className='f-filter-label'>Фильтры</div>
        <div className='f-check-avialibility'>
            <input type='checkbox' className='f-check' id='check-avialibility' value='В наличии'/>
            <div className='avialibility'>В наличии</div>
        </div>
        
        <div className='f-manufactures'>
            <div className='f-filter-label'>Фильтр по производителю</div>
            {props.manufactures.map((item)=>
                <div className='f-manuf-visivle' key={item} >
                    <input className='f-check f-check-manuf' type='checkbox' id={'filter_'+item} value={item} onClick={() => handleChange(item)}/>
                    <div className='f-manuf-name'>{item}</div>
                </div>                
            )}
        </div>

        <div className='f-button-bar'>
            <ButtonGreen value={'Показать'} click={checkManuf}/>
            <ButtonGreen value={'Сбросить'} click={props.getAll}/>
        </div>
    </div>
  )
}

export default Filters
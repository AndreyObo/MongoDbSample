import React,{ useRef, useState} from "react";
import './style.css'


const Item = (props) => {
    const ref = useRef(null)
    const [sel, setSel] = useState(false)
    const [style, setStyle] = useState('table__item')

    const click =() => {
       props.ItemClick(ref, props.Id)
    }


 return (
    <>
       <div ref={ref} onClick={()=>click()} className={style}>
            <div className='first_col'>{props.mail}</div>
            <div className='second_col'>{props.name}</div>
        </div>
    </>
 );
}

export default Item
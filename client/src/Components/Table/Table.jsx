import React, {useEffect, useState} from "react";
import Item from './Item'
import './style.css'

const Table = (props) => {
   //const [rows, setRows] = useState([])
   const [sel, setSel] = useState(null)

//    useEffect(()=>{
//     if(props.Rows) {
//         const arr =[]
//         for(let item of props.Rows) {
//             arr.push({mail:item.mail, name:item.name})
//         }
//         setRows(arr)
//         console.log('table')
//         console.log(props.Rows)
//     }
//    },[])

   const ItemClick =(ref, id) => {

    props.ItemClick(id)
    if(sel && sel.current) {
        sel.current.className='table__item'
        
    }
        ref.current.className='table__selitem'
        setSel(ref)
   }

 return (
    <div className='table'>
        {
            props.Rows.map(item=> <Item key={item._id} ItemClick={(r, id)=>ItemClick(r, id)} Id={item._id} mail={item.mail} name={item.name}/> )
        }
    </div>
 );
}

export default Table
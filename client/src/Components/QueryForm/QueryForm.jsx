import Table from '../Table/Table'
import { useEffect, useRef, useState } from 'react';
import {GetAllQuery, DeleteOne, CreateQuery} from '../../http/QueryBP'
import Wdetails from './Modal/Wdetails'
import './style.css'

const QueryForm =() => {
  const name_r = useRef(null)
  const mail_r = useRef(null)

  const [items, setItems] = useState([])
  const [sel, setSel] = useState(null)
  const [squery, setSquery] = useState(null)
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bval, setBval] = useState(false)
  const [comment, setComment] = useState('')

  const [modal, setModal] = useState(false)

  useEffect(()=> {
    FetchAllQuery()
    console.log(items)
  },[])

   const FetchAllQuery =  async () => {
    const all = await GetAllQuery()
    setItems(all)
   }

   const DelClick =async () => {
   
    if(sel) { 
         const res = await DeleteOne(sel)
         console.log(res)
         setSel(null)
         FetchAllQuery()
    }
    else {
        alert("Запрос не выбран")
    }
   }

   const AddClick = async () => {
    if(name == '') {
        name_r.current.focus()
        return
    }
    if(email == '') {
        mail_r.current.focus()
        return
    }

    let res = await CreateQuery(name, email, bval, comment)
    setSel(null)
    FetchAllQuery()
   }

   const ItemClick =(id) => {
     setSel(id)
   }

   const DetailsClick = () => {
     if(sel) {
       
        for(let qr of items) {
          if(qr._id == sel) {
            setSquery(qr)
            setModal(true)
            return
          }
        }
    }
    else {
        alert("Заявка не выбрана")
    }
   }

    return (
        <div className='querypage'>
             {modal ? <Wdetails Query={squery} OnClose={()=>setModal(false)}/> : <div/> }
             <h2 className='querypage__title'>Оформить заявку</h2>
             <div className='querypage__inputlable'>Имя</div>
             <input ref={name_r} onChange={(e)=>setName(e.target.value)} value={name} className='querypage__textinput' type='text'></input>
             <div className='querypage__inputlable'>E-mail</div>
             <input ref={mail_r} onChange={(e)=>setEmail(e.target.value)} value={email} className='querypage__textinput' type='text'></input>

             <div className='querypage__chekboxblock'>
                <input onChange={(e)=>setBval(e.target.checked)} checked={bval} type="checkbox" id="scales" name="scales"></input>
                 <label for="scales">Согласие на рассылку</label>
              </div>
            <div className='querypage__inputlable'>Описание</div>
             <input onChange={(e)=>setComment(e.target.value)} value={comment} className='querypage__textinput querypage__textinput_margin' type='text'></input>
             <button onClick={()=>AddClick()} className='querypage__button'>Добавить</button>

             <div className='querypage__caption'>Список заявок</div>
             <div className='querypage__tablewrap'>
                <Table ItemClick={(id)=>ItemClick(id)} Rows={items}/>
             </div>
             <div className='querypage__row'>
             <button  onClick={()=>DetailsClick()} className='querypage__button'>Просмотр заявки</button>
             <button onClick={()=>DelClick()} className='querypage__button'>Удалить</button>
             </div>
        </div>
    );
}

export default QueryForm
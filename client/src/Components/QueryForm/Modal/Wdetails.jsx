import './style.css'
import '../style.css'
import { useEffect, useState } from 'react';
import {AddComment, GetComments} from '../../../http/QueryBP'

const WDetails =(props) => {
    const [comment,setComment] = useState('')
    const [list, setList] = useState([])

    useEffect(()=> {
        document.body.style.overflow = 'hidden';
        FetchComments()
        return ()=> {
            document.body.style.overflow = 'unset'; 
        }
    },[])

    const FetchComments = async ()=> {
        const cm = await GetComments(props.Query._id)
        setList(cm)
    }

    const CreateComment = () => {
        PushComment()
        setList([...list, {text:comment}])
    }

    const PushComment = async () => {
        const res = await AddComment(props.Query._id, comment)
    }

    return(
        <div className='ModalWindowWrap'>
            <div className='ModalContent'>
                <h3 className='titlerow'>Подробности заказа</h3>
                <div className='row'>
                    <b>Имя:&nbsp;</b> {props.Query.name}
                </div>
                <div className='row'>
                    <b>Email:&nbsp;</b> {props.Query.mail}
                </div>
                <div className='row'>
                    <b>Согласен на рассылку:&nbsp;</b> {props.Query.PDataValidation ? <span> Да</span> : <span> Нет</span>}
                </div>
                <div className='row'>
                    <b>Описание:&nbsp;</b> {props.Query.body}
                </div>
                <div className='row'>
                   <b>Коментарии к заявке</b>
                </div>
                <div className='comment_row'>
                <input onChange={(e)=>setComment(e.target.value)} value={comment} className='querypage__textinput' type='text'></input>
                <button onClick={()=>CreateComment()} className='querypage__button'>Ok</button>  
                </div>
                <div className='comment_window'>
                    {list.map(item=><div className='comment_window__item'>{item.text}</div> )}
                </div>
                <div className='button_row'>
                   <button onClick={()=>props.OnClose()} className='querypage__button'>Закрыть</button>  
                </div>
            </div>
        </div>
    );
}

export default WDetails
import React, {useEffect, useState} from 'react';
import './style.css'

const Slider =(props) => {
    const [pos, setPos] = useState(0)
    const [mark, setMark] = useState([])
    const [round, setRound] = useState([])

    useEffect(()=> {
        if(props.Items) {
            setMark(props.Items[0])
        }
        const arr = new Array(props.Items.length)
        for(let i=0; i <=arr.length-1; i++) {
            arr[i] = false
        }
        arr[0] = true
        setRound(arr)
        console.log(arr)
    },[])

    const FovardClick =() => {
        if(pos + 1  <= props.Items.length-1) {
            setMark(props.Items[pos+1])
            setPos(pos +1 )
            let n_rount = round
            n_rount[pos] = false
            n_rount[pos+1] = true
            setRound(n_rount)
        }
    }
    const BackClick =() => {
        if(pos - 1  >= 0) {
            setMark(props.Items[pos-1])
            setPos(pos - 1 )
            let n_rount = round
            n_rount[pos] = false
            n_rount[pos-1] = true
            setRound(n_rount)
        }
    }

    return(
        <div className='slider'>
            <h1 className='slider__title'>{mark.Title}</h1>
            <div className='slider__markrow'>
                {round.map(item=> 
                    item ? <div className='slider__mark slider__mark_select'></div> : <div className='slider__mark slider__mark_unselect'></div>
                )}
                {/* <div className='slider__mark slider__mark_select'></div>
                <div className='slider__mark slider__mark_unselect'></div>
                <div className='slider__mark slider__mark_unselect'></div> */}
                
            </div>
            <span className='slider__text'>{mark.Body}</span>
                <div className='slider__buttonrow'>
                    <div onClick={()=>BackClick()} className='slider__button slider__button_margin'>{'\<'}</div>
                    <div onClick={()=>FovardClick()} className='slider__button slider__button_margin'>{'\>'}</div>
            </div>
        </div>
    );
}

export default Slider
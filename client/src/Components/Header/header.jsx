import './style.css'
import logo from './img/logo_agis.png'
import Slider from '../Slider/Slider'
import CarsItems from './slider_text.json'
import {Link} from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

const Header =()=> {
    const Bmain = useRef(null)
    const Bquery = useRef(null)
    const [sel, setSel] = useState()

    useEffect(()=> {
        setSel(Bmain)
    },[])

    const BClick =(rf)=> {
        if(sel) {
            sel.current.className='header__button_unselect'
        }
        rf.current.className='header__button'
        setSel(rf)
    }
    return (
        <div className='header'>
            <div className='header__navpanel'>
                <span>Информация с сайта <a href='https://agis.kz/' target="_blank">https://agis.kz/</a></span>
                <div className='header__buttonrow'>
                    <Link  to="/" relative="path">
                       <button ref={Bmain} onClick={()=>BClick(Bmain)} className='header__button'>Главная</button>
                    </Link>
                    <Link  to="/queryform" relative="path">
                    <button ref={Bquery} onClick={()=>BClick(Bquery)} className='header__button_unselect'>Оформить заявку</button>
                    </Link>
                </div>
            </div>
            <Slider Items={CarsItems.Items}/>
        </div>
    );
}

export default Header
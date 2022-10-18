import React from 'react';
import Card from './Card';
import Footer from '../Footer/footer'

import wtr from './img/wtr.jpg'
import gas from './img/gas.jpg'
import home from './img/home.jpg'
import lamp from './img/lamp.jpeg'
import mch from './img/mch.jpg'
import rain from './img/rain.jpg'
import tec from './img/tec.jpg'
import ts from './img/ts.jpg'
import water_out from './img/water_out.jpg'

import './style.css'

const Main =() => {
    return(
        <div className='mainpage'>
                <h2 className='mainpage__title'>Программный продукт «АГИС»</h2>
                <div className='mainpage__cardrow'>
                    <Card Title="Водоснабжение" Imgpath={wtr} Text="Забор и очистка воды, распределение и учет потребителям. 
                    Снижение потерь и аварийности, увеличение начислений. Снижение потерь от 20% до 40%, 
                    Увеличение начисление на 20-50% Снижение аварийности до 50%"/>
                    <Card Title="Водоотведение" Imgpath={water_out} Text="Сбор и очистка сточных вод, Снижение аварийности на сетях. Плановые и предупредительные работы. 
                    Полный контроль и управление насосными станциями, снижение аварийности на 30%. 
                    Моделирование новых сетей"/>
                    <Card Title="Электричество" Imgpath={lamp} Text="Распределительные сети, ТП, РП. Эффективный поиск потерь на нижней стороне (0,4кВ), анализ нагрузки по зонам.
                    Снижение потерь на 2-15%, снижение аварийности до 10%, увеличение начисление до 25%,"/>
                </div>
                <div className='mainpage__cardrow'>
                    <Card Title="Теловые сети" Imgpath={ts} Text="Зонирование тепловых сетей, расчет и выявление причин потерь тепла, сокращение потерь от 10 до 40%. 
                    Снижение аварийности на сетях. Плановые и предупредительные работы"/>
                    <Card Title="Тепловые станции" Imgpath={tec} Text="Контроль и автоматизированное управление режимами работ на тепловых станциях. 
                    Анализ работы котельного и насосного оборудования. Снижение простоев в работе"/>
                    <Card Title="Котельные" Imgpath={mch} Text="Перевод районных котельных в автоматическое 
                    управление с дистанционным выставлением режимов работы. Контроль и мониторинг расхода топлива и электроэнергии"/>
                </div>
                
        </div>
    );
}

export default Main
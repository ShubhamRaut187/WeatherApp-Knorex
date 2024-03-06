import React from 'react';
import './ComponentStyles/TimeCard.css'
function TimeCard({item}) {
    return (
        <div className='time_card'>
            <div className='time_card_head'>
                <h3>{item.dt_txt.split(' ')[1]}</h3>
                <p>Temp:{item.main.temp}&nbsp;°C</p>
            </div>
            <div className='time_card_icon'>
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
            </div>
        </div>
    );
}

export default TimeCard;
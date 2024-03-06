import React from 'react';
import './ComponentStyles/TodayWeatherCard.css'
function TodayWeatherCard({info}) {
    return (
        <div className='today_weather_card'>
           <div className='today_weather_card_head'>
                <h1>Todays Weather at {info.name}</h1>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} alt="" />
                </div>
           </div>
           <div className='today_weather_card_info'>
                <p>Weather{info.weather[0].main}</p>
                <p>Temperature:{info.main.temp}&nbsp;°C</p>
                <p>Max Temperature:{info.main.temp_max}&nbsp;°C</p>
                <p>Min Temperature:{info.main.temp_min}&nbsp;°C</p>
           </div>
        </div>
    );
}

export default TodayWeatherCard;
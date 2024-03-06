import React from 'react';
import TimeCard from './TimeCard';
import './ComponentStyles/WeatherForecastCard.css'
function WeatherForecastCard({start,end,WeatherForecast}) {
    // console.log(WeatherForecast,start);
    let newInfo = WeatherForecast.slice(start,end+1);
    // console.log(newInfo)
    return (
        <div className='weather_forecast_card'>
            <div className='weather_forecast_head'>
                <h2>Weather on {WeatherForecast[start].dt_txt.split(' ')[0]}</h2>
            </div>
            <div className='time_card_parent'>
               {
                newInfo.map((elem,index)=>{
                    return <TimeCard key={index} item={elem}/>
                })
               }
            </div>
        </div>
    );
}

export default WeatherForecastCard;
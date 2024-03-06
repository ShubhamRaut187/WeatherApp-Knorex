import React,{useState} from 'react';

// Components
import WeatherForecastCard from '../Components/WeatherForecastCard';
import TodayWeatherCard from '../Components/TodayWeatherCard';

// CSS
import './PageStyles/Home.css'
import WeatherAnimation from '../Images/WeatherAnimation.gif'

function Home(props) {
    let [Weather,SetWeather] = useState(null);
    let [WeatherForecast,SetWeatherForcast] = useState(null);
    
    // Functions to get date
    const dateCheck = (dateString) => {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); 
        const targetDate = new Date(dateString);
        const threeDaysLater = new Date();
        threeDaysLater.setDate(currentDate.getDate() + 3); 
        return targetDate > currentDate && targetDate <= threeDaysLater;
    }
    
    const compareDates = (data) => {
        let threeDaysweather = data.filter((elem)=>{
            let weatherdate = elem.dt_txt.split(' ')[0];
            const dateParts = weatherdate.split('-');
            const formattedDate = new Date(`${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`);
            return dateCheck(formattedDate);
        })
        return threeDaysweather;
    }

    // Function to get weather data from api
    const handleChange = async(city) => {
        if(!city){
            SetWeather(null)
            SetWeatherForcast(null)
            return alert('Select a city');
        }
        try {
            let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=df5a4e7cc584fa987c99dbc8af622fe5`);
            let response = await result.json();
            // console.log('Current Weather',response);
            SetWeather(response)

            let resultforecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=df5a4e7cc584fa987c99dbc8af622fe5`);
            let responseforcast = await resultforecast.json();
            // console.log('Forecast Weather',responseforcast.list);
            let threeDayforecast = compareDates(responseforcast.list);
            // console.log('Three day forecast',threeDayforecast);
            SetWeatherForcast(threeDayforecast)

        } catch (error) {
            console.log('Error while getting forecast and weather data',error);
        }
    }
    
    
    return (
        <div>
            <div className='home_main'>
                <div className='home_div_one'>
                    <img src={WeatherAnimation} alt="weather" />
                </div>
                <div className='home_div_two'>
                    <div className='home_head_div'>
                        <h1>Knorex Weather App</h1>
                        <p>The Knorex Weather App, built using the OpenWeather API and React, offers users a simple yet effective way to check the current weather and forecasts for the next three days. With its clean design and fast performance, users can quickly access accurate weather information without any unnecessary clutter. Powered by React, the app provides a responsive and intuitive user experience.</p>
                    </div>
                    <div className='select_city_div'>
                    <h3>Select Your City</h3>
                    <select id="city_dropdown" onChange={(e)=>{handleChange(e.target.value)}}>
                            <option value="">Select City</option>
                            <option value="Ho Chi Minh">Ho Chi Minh</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Kuala Lumpur">Kuala Lumpur</option>
                            <option value="Tokyo">Tokyo</option>
                            <option value="Athens">Athens</option>
                        </select>
                    </div>
                    <div className='today_result_main'>
                        {
                            !Weather ? <></> : <TodayWeatherCard info={Weather}/>
                        }
                    </div>
                </div>
            </div>
            {
                 WeatherForecast ?  <div className='weather_forecast_main'>
                <WeatherForecastCard start={0} end={7} WeatherForecast={WeatherForecast}/>
                <WeatherForecastCard start={8} end={15} WeatherForecast={WeatherForecast} />
                <WeatherForecastCard start={16} end={23} WeatherForecast={WeatherForecast}/>
            </div> : <></>
            }
        </div>
    );
}
export default Home;
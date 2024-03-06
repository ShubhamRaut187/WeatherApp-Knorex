import React from 'react';
import './PageStyles/Home.css'
function Home(props) {
    return (
        <div className='home_main'>
            <div className='home_div_one'>
                <img src="https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif" alt="weather" />
            </div>
            <div className='home_div_two'>
                <div className='home_head_div'>
                    <h1>Knorex Weather App</h1>
                    <p>The Knorex Weather App, built using the OpenWeather API and React, offers users a simple yet effective way to check the current weather and forecasts for the next three days. With its clean design and fast performance, users can quickly access accurate weather information without any unnecessary clutter. Powered by React, the app provides a responsive and intuitive user experience, ensuring that users can easily navigate and find the information they need. Whether you're planning your outdoor activities or simply staying informed about the weather, the Knorex Weather App has you covered.</p>
                </div>
                <div className='select_city_div'>
                    <div>
                        <h3>Select Your City</h3>
                    </div>
                    <div>
                        <select id="city_dropdown">
                            <option value="">Select City</option>
                            <option value="Ho Chi Minh">Ho Chi Minh</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Kuala Lumpur">Kuala Lumpur</option>
                            <option value="Tokyo">Tokyo</option>
                            <option value="Athens">Athens</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
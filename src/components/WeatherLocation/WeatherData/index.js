import React from  'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
//el uso de constantes permiten identificar más rápido los errores
import {
    SUNNY,
    /*FOG,
    RAIN,
    CLOUD,
    CLOUDY,
    SNOW,
    WINDY*/
}from '../../../constants/weathers'
import './styles.css';

const WeatherData = () => (

    <div className="weatherDataCont">
        <WeatherTemperature 
        temperature={20} 
        weatherState={SUNNY}
        />
        <WeatherExtraInfo humidity={'10%'} wind={'10 m/s'} ></WeatherExtraInfo>
    </div>

);

export default WeatherData;
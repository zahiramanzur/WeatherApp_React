import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUNNY,
    FOG,
    RAIN,
    CLOUD,
    CLOUDY,
    SNOW,
    WINDY
}from '../../../constants/weathers'
import './styles.css';

//diccionario de iconos según el estado del clima
const icons = {
    [SUNNY]:"day-sunny",
    [FOG]:"day-fog",
    [RAIN]:"rain",
    [CLOUD]:"cloud",
    [CLOUDY]:"day-cloudy",
    [SNOW]:"snow",
    [WINDY]:"day-windy"
};

//función para traer un ícono según el estado del clima
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x"
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name="day-sunny" size="2x" />
}


const WeatherTemperature = ({temperature , weatherState}) => (

    <div className="weatherTemperatureCont">
        
        {
            getWeatherIcon(weatherState)//entre llaves porque se añade codigo js, el código llama a una función
        }
        
        <span className="temperature">{`${temperature}` }</span>
        <span className="temperatureType">{` C°`}</span>
        
    </div>

);
//con proptypes defino el tipo de dato de los parámetros
WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
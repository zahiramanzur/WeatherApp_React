import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity , wind}) => (
    /*(humidity)para colocar strings para q se muestren en pantalla utilizar(``)*/
    ///template string (wind)
    <div className="weatherExtraInfoCont">
        <span className="humidity">{`Humedad: ${humidity}`}</span> 
        <span className="line">{ ` - `}</span>
        <span className="wind">{`Viento: ${wind} `}</span>
    </div>

);

WeatherExtraInfo.propType = {
    wind: PropTypes.number.isRequired,
    humidity: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;

import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity , wind}) => (
    /*(humidity)para colocar strings para q se muestren en pantalla utilizar(``)*/
    ///template string (wind)
    <div>
        <span>{`${humidity}  - `}</span>
        <span>{`${wind} viento`}</span>
    </div>

);

WeatherExtraInfo.propType = {
    wind: PropTypes.number.isRequired,
    humidity: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;

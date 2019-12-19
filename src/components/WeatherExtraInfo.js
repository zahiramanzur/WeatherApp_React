import React from 'react';

const WeatherExtraInfo = ({humidity , wind}) => (
    /*(humidity)para colocar strings para q se muestren en pantalla utilizar(``)*/
    ///template string (wind)
    <div>
        <span>{humidity + " " + "-"}</span>
        <span>{`${wind} viento`}</span>
    </div>

);

export default WeatherExtraInfo;

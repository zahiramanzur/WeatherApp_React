import React from 'react';

const WeatherExtraInfo = ({humidity},{wind}) => (

    <div>
        <h1>{humidity}</h1>
        <h2>{wind}</h2>
    </div>

);

export default WeatherExtraInfo;

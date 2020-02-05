import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => (

    <div>
        <h1>
            {city}
        </h1>
    </div>

);

Location.propTypes = {
    city: PropTypes.string.isRequired, //ptsr y tab para autocompletar
};


export default Location;
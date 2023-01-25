import React, { useState } from 'react';
import PropTypes from 'prop-types';

const funcion_greeting = (props) =>{
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setage] = useState(23)

    const cumpleaños = () => {
        //Actualizamos el State
        setage(age + 1);
    }

    return(
        <div>
            <h1>
                HOLA {props.name} Hola Cristhian desde componente funcional
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick={cumpleaños}>
                    Cumplir años
                </button>
            </div> 
        </div>
    );
};

funcion_greeting.propTypes = {
    name: PropTypes.string

};

export default funcion_greeting;


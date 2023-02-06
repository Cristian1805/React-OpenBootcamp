import React, {useState} from 'react';


//Definiendo stilos con constantes


//Aplicar estilos si el usuario esta logueado
const loggetStyle = {
    color: 'white'
}; 


//De lo contrario
const unloggetStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyles = (props) => {


    //Generamos un estado para el componente

    const [logged, setLogged] = useState(false);





    return (
        <div style={ logged ? loggetStyle : unloggetStyle}>

        {logged ? (<p>Hola, {props.name}</p>) : (<p>Porfavor logueate</p>)}
        
        <button onClick={() => {
            console.log('Boton pulsado');
            setLogged(!logged);
        }}>
            {logged ? 'Log out' : 'Log in'}
        </button>
            
        </div>
    );
}

export default GreetingStyles;

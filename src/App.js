import logo from './logo.svg';
import './App.css';
// import Clock from './components/pure/Clock';
import TaskListComponent from './components/containers/task_list';
//import funcion_greeting from './components/pure/funcion_greeting';
//import Funcion_greeting from './components/pure/funcion_greeting';
//import TaskListComponent from './components/containers/task_list';
// import Ejemplo1 from './hooks/Ejemplo 1';
//import Ejemplo2 from './hooks/Ejemplo2'; 
//import GreetingStyles from './components/pure/greetingStyles';
//import MiComponenteConContexto from './hooks/Ejemplo3';


function App() {
  return ( 
    <div className="App">
       {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* Componente propio Greeting.js*/ }
        {/* <Greeting></Greeting> */}
        {/* <funcion_greeting name ="Cristhian"></funcion_greeting> */}
        {/* <funcion_greeting name="Cristhian"></funcion_greeting> */}
        {/* <TaskListComponent></TaskListComponent> */}
        
        {/* EJEMPLOS SOBRE EL USO DE LOS HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2>
        {/*<MiComponenteConContexto> </MiComponenteConContexto>*/}
        {/*<GreetingStyles name="Hola Cristhian"> </GreetingStyles>*/}

        {/* {<Clock> </Clock>} */}
        {/* </header> */}

        <TaskListComponent></TaskListComponent>
    </div>
  );
}


export default App;

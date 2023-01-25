import logo from './logo.svg';
import './App.css';
//import funcion_greeting from './components/pure/funcion_greeting';
import Funcion_greeting from './components/pure/funcion_greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Componente propio Greeting.js*/ }
        {/* <Greeting></Greeting> */}
        {/* <funcion_greeting name ="Cristhian"></funcion_greeting> */}

        <funcion_greeting name="Cristhian"></funcion_greeting>

        
      </header>
    </div>
  );
}

export default App;

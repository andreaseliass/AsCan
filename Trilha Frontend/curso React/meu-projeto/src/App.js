import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      < Frase />
      < HelloWorld />
      < SayMyName nome="Andrea" />
      <Pessoa 
      nome="Rodrigo" 
      idade="28" 
      profissao="Programador"
      foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;

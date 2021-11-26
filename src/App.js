import Titulo from './componentes/Titulo';
import Repositorios from "./componentes/Repositorios"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Titulo title= "Meu Segundo Projeto React do Zero"/>
        <Repositorios/> 
        
      </header>
    </div>
  );
}

export default App;

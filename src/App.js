import logo from './logo.svg';
import './App.css';
import Player from './component/Header/Player';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <div>
      <Header></Header>
      </div>
      <div>
      <Player></Player>  
      </div>
      
    </div>
  );
}

export default App;

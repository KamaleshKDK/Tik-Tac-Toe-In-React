import logo from './logo.svg';
import './App.css';
import Tiktactoe from './Tiktactoe';

function App() {
  return (
    <div className='container'>
      <div className='col-lg-10'>
        <div className="App">
          <h1 className='head'>Tik-Tac-Toe</h1>
          <Tiktactoe />
        </div>
      </div>

    </div>
  );
}

export default App;

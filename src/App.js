
import './App.css';
import Guns from './components/Guns/Guns';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='main-container'>
      <div>
      <Header></Header>
      </div>
      <div>
        <Guns></Guns>
      </div>
    </div>
  );
}

export default App;

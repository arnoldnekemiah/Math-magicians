import './App.css';
import Calculator from './components/Calculator';
import FetchApi from './components/apiUse';

function App() {
  return (
    <div className="app">
      <Calculator />
      <FetchApi />
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <MainNavbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <MainNavbar/>
          <Hero/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

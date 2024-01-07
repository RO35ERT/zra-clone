import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Links from './components/Links';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <MainNavbar/>
          <Hero/>
          <Links/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

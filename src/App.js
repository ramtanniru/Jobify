import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Jobs from './pages/Jobs';
import About from './pages/About';
import Stepper from './components/Stepper';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Jobs' element={<Jobs/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

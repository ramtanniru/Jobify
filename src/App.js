import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Jobs from './pages/Jobs';
import About from './pages/About';
import Stepper from './components/Stepper';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './components/nav';
import Footer from './components/footer';
import Header_2 from './components/Signed_nav';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Header_2/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Jobs' element={<Jobs/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes >
    <Route path='/' element={<Navigation/>}/>
    <Route index element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Menu' element={<Menu/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;

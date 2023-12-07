import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Welcomepage from './components/Welcomepage'
import FoodSearchPage from './components/FoodSearchPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Pagenotfound from './pages/Pagenotfound';


function App(){
  return(
    <div>
          <Routes>
            <Route path='/' element={<Welcomepage/>}/> 
            <Route path ='/FoodSearchPage' element={<FoodSearchPage/>}></Route>
            <Route path = '/About' element={<About/>}></Route>
            <Route path = '/Contact' element={<Contact/>}></Route>
            <Route path = '/Register' element={<Register/>}></Route>
            {/* when an incorrect URL is given, link routes to Pagenotfound page. */}
            <Route path = '*' element={<Pagenotfound/>}></Route>
          </Routes>
        
    </div>
  );
}

export default App;

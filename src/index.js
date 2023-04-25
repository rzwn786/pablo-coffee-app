import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './component/about'
import Menu from './component/menu';
import Contact from './component/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>

);



import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start/Start';
import Registration from './pages/Registration/Registration';
import Services from './pages/Services/Services';
import Aud136 from './pages/Classrooms/aud136';
import Aud138 from './pages/Classrooms/aud138';
import Aud144 from './pages/Classrooms/aud144';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<Registration />} />
        <Route path='/services' element={<Services />} />
        <Route path='/136classroom' element={<Aud136 />} />
        <Route path='/138classroom' element={<Aud138 />} />
        <Route path='/144classroom' element={<Aud144 />} />
      </Routes>
    </div>
  );
}

export default App;

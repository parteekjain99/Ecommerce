
// import React,{useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter,  Route ,Routes } from 'react-router-dom';


import Getdata from './getdata/Getdata';
import Edit from './edit/Edit';
import { useState } from 'react';

function App() {
  
  // const [user ,setUser] = useState()

  return (
    <BrowserRouter>
     <Routes>
   
     <Route path='/' element={<Getdata/>}/>
     <Route path='/user/:id' element={<Edit/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
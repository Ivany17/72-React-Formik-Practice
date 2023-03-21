import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header" 
import SignInPage from './components/pages/SignInPage';

function App(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<h1>signup</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
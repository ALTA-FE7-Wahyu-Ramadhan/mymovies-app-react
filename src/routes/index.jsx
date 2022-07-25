//folder routes ini dibuat untuk menampung routingannya
import React, { useState, useEffect, useMemo } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeContext } from '../utils/context';

import HomePage from '../pages/HomePage';
import DetailMovie from '../pages/DetailMovie';
import MyFavorite from '../pages/MyFavorite';
import TestPage from '../pages/TestPage';

const App =()=> {
  const [theme, setTheme] = useState ('light');

  const background = useMemo(()=> ({theme, setTheme}),[theme])

  useEffect (()=>{
    if (theme==='dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[theme]);

    return (
      <ThemeContext.Provider value={background}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="detail/:movie_id" element={<DetailMovie/>} />
        <Route path="favorites" element={<MyFavorite/>} />
        <Route path="test" element={<TestPage/>} />
        {/* jika menuju halaman yang salah */}
        <Route path="*" element={<div>404 Error Not Found</div>} />
      </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
    )
}

export default App
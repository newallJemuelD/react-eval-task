import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';
import AskQuery from './pages/support/ask_query/askQuery';
import QueryList from './pages/support/query_list_page/queryList';
import CardPage from './pages/home/cardPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/ask_query" element={<AskQuery/>} />
      <Route path="/query_list" element={<QueryList />} />
      <Route path="/card_page" element={<CardPage />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
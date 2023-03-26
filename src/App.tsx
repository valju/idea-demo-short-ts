//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoryListView from './views/CategoryListView';
import CategoryDetailsView from './views/CategoryDetailsView';
import CategoryDeleteConfirmationView from './views/CategoryDeleteConfirmationView';

function App() {
  return (
    <div className="App">
    <nav>
      <span>Extra navbar at top: </span>
      <NavLink to="/">Home</NavLink>
      <span> </span>
      <NavLink to="/category">Categories</NavLink>
    </nav>
    <Routes>
      <Route path="/category" element={<CategoryListView />} />
      <Route path="/category/:categoryId" element={<CategoryDetailsView />} />
      <Route path="/category/delete/:categoryId" element={<CategoryDeleteConfirmationView history={undefined} />} />
      <Route path="/" element={<HomeView />} />
    </Routes>
  </div> 
  );
}

export default App;

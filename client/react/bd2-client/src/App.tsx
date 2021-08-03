import React from 'react';
import './index.css';
import Sidebar from './components/sidebar/Sidebar';
import DBDetail from './pages/DBDetail';

export default function App() {
  return (
    <div className="bg-white flex">
      
      <Sidebar />

      <div className="w-full">
        <DBDetail />
      </div>
      
    </div>
  )
}
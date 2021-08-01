import React from 'react';
import '../../index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

interface Props {
}

export default function Sidebar(props: Props) {
  return (
    <div className="flex flex-col w-96 h-screen bg-gray-800">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
// src/components/Main.tsx
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Imagen from '../components/imangen/Imagen';

const Main: React.FC = () => {
  return <div>
    <Navbar/>
    <Imagen/>
  </div>;
}

export default Main;

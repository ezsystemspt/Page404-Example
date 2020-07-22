import React from 'react';
import './scss/app.scss';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <>
      <NavBar />
      <div className='main-content'></div>
    </>
  );
}

import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Today } from './components/today';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>React webová aplikace</h1>
      </header>
      <main>
        <p>
        <Today day="16" month="02" year="2023"/> 
        </p>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);

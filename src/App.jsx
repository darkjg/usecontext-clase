// App.js
import React from 'react';
import { LenguageProvider } from './LanguageContext';
import LanguajeSelector from './LanguageSelector';
const App = () => {
  return (
    <LenguageProvider>
      <div>
        <h1>Lenguaje selector</h1>
        <LanguajeSelector></LanguajeSelector>
      </div>
    </LenguageProvider>
  );
};

export default App;

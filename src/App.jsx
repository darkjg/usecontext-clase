// App.js
import React from 'react';
import { LenguageProvider } from './LanguageContext';
import LanguajeSelector from './LanguageSelector';
import Greeting from './Greeting';
const App = () => {
  return (
    <LenguageProvider>
      <div>
        <h1>Lenguaje selector</h1>
        <LanguajeSelector></LanguajeSelector>
        <Greeting></Greeting>
      </div>
    </LenguageProvider>
  );
};

export default App;

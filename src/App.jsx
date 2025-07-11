import React from 'react';
import GreetingHeader from './components/GreetingHeader';
import CardGrid from './components/CardGrid';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#C7E9F7] via-[#D7C8FF] to-[#FDFBFF] flex flex-col items-center">
      <GreetingHeader />
      <CardGrid allowReplay={false} />
    </div>
  );
}

export default App;

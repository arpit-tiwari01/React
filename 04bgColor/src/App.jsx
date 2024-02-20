import { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setColor] = useState("olive");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="w-screen h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => handleColorChange('Red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500">Red</button>
          <button onClick={() => handleColorChange('Blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500">Blue</button>
          <button onClick={() => handleColorChange('Green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500">Green</button>
          <button onClick={() => handleColorChange('Yellow')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500">Yellow</button>
          <button onClick={() => handleColorChange('Purple')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500">Purple</button>
          <button onClick={() => handleColorChange('Pink')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-500">Pink</button>
          <button onClick={() => handleColorChange('Indigo')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-indigo-500">Indigo</button>
        </div>
      </div>
    </div>
  );
};

export default App;

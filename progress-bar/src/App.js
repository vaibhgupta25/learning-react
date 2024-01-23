import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './conponents/ProgressBar';

function App() {
  const [value, setValue] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setValue((value) => value + 1)
    }, 100)
  },[])
  return (
    <div className="App container mx-10 my-5 flex flex-col items-center w-full " >
      Progress bar
      <ProgressBar value={value} />
    </div>
  );
}

export default App;

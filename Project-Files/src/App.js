import { useState } from 'react';
import './App.css';
import Header from './Components/Header'
import MainPanel from './Components/MainPanel'
import SideBar from './Components/SideBar';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedS, setIsClickedS] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  }
  const handleButtonClickS = () => {
    setIsClickedS(!isClickedS);
  }
  return (
    <div className="bg-gray-200 bg-opacity-40 min-h-screen font-sans overflow-y-hidden">
      <Header onButtonClick={handleButtonClick} onButtonClickS={handleButtonClickS}/>
      <main className='flex'>
      <SideBar isClicked={isClicked} />
      <MainPanel isClicked={isClickedS} />
      </main>
    </div>
  );
}

export default App;

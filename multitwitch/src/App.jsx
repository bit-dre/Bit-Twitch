import { useState } from 'react'
import './App.css'
import Dyframe from './components/DyFrame.jsx';

function App() {
  const streamOptions = {
    height: '480',
    width: '940',
    theme: 'dark',
    autoplay: true,
  };  
  return (
    <div className='App'>
      <h1>Stream Embed Test</h1>
      <Dyframe streamID='lacy' options={streamOptions}></Dyframe>
    </div>
  )
}

export default App

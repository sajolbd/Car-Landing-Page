import { useEffect, useState } from 'react'
import './App.css'

import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  let heroData = [
    {
      text1: 'Dive into',
      text2: 'What you love'
    },
    {
      text1: 'Indulge',
      text2: 'your passions'
    },
    {
      text1: 'Give in to',
      text2: 'your passions'
    }
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false)

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{
        return count === 2? 0:count+1})
    }, 5000);
  }
  )
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} > </Background>
      <Navbar></Navbar>
      <Hero setPlayStatus = {setPlayStatus}
            setHeroCount = {setHeroCount}
            heroCount = {heroCount}
            heroData = {heroData[heroCount]}
            playStatus = {playStatus}
      
      ></Hero>
    </div>
     
  )
}

export default App

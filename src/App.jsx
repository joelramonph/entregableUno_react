
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/ QuoteBox'
import quotes from './json/quotes.json'
import colors from './utils/colors'

function App() {
  

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }
  const quotesRandom = getRandomElement(quotes)
  const colorsRandom = getRandomElement(colors)

  const [randomQuotes, setRandomQuotes] = useState(quotesRandom)
  const [randomColors,setRandomColors] = useState(colorsRandom)
   const objStyle ={
   backgroundColor: randomColors
 }

 const getRandomAll = () => {
  const quotesRandom = getRandomElement(quotes)
  const colorsRandom = getRandomElement(colors)

  setRandomQuotes(quotesRandom)
  setRandomColors(colorsRandom)
 }
  
  return (
    <div className="App" style={objStyle}>
      <div className='main-container'>
      <QuoteBox randomQuotes = {randomQuotes} randomColors = {randomColors} getRandomAll = {getRandomAll}/>
         

      </div>
      
       
    </div>
  )
}

export default App

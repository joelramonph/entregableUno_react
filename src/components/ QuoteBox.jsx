
import React from 'react'

const  QuoteBox = ({randomQuotes, randomColors, getRandomAll}) => {
 
console.log(randomQuotes, randomColors)

const objectStyle = {
  color: randomColors
}

const objectBtnStyle = {
 backgroundColor: randomColors
}
  return (
    <div className='countainer-quote' style={objectStyle}>
        <div className='countainer-text-quote'>
            <p className='text-quote'> <b className='quote'>"</b>{randomQuotes.quote}</p>
            <p className='autor-quote'>--{randomQuotes.author}</p>
            
        </div>
        <button onClick={getRandomAll} className='quote-btn' style={objectBtnStyle}>&#62;</button>
          
     </div>
  )
}

export default  QuoteBox
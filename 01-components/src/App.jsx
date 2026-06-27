import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
  <div>
    <div className='card'>
      <h1>Kunal Bagul</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt quam, omnis minus, facere, voluptatum beatae veritatis expedita cum aut aperiam ex soluta doloremque molestias eius excepturi deleniti maiores officia?</p>
    </div>
    {Card()}
  </div>
  )
}

export default App

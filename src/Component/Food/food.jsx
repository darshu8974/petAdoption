import React from 'react'
import './food.css'
import Navbar from '../Navbar/navbar'
import Cards5 from '../Cards/cards5'



export default function Food() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>FOOD items!</h1>
      <br></br>
      
      <div className='titt2'>
         <Cards5></Cards5>
         <br></br>
      </div>   
          
    </div>
  )
}

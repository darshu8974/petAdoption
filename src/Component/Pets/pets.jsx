import React from 'react'
import './pets.css'
import Navbar from '../Navbar/navbar'
import Cards1 from '../Cards/card1'
import Cards2 from '../Cards/cards2'
import Cards3 from '../Cards/cards3'


export default function Pets() {
  return (
    <div >
      <Navbar></Navbar>
      <h1>Available pets</h1>
      <br></br>
      
      <div className='titt12'>
         <Cards1></Cards1>
         <br></br>
      </div>   
       
      <div className='titt12'>
         <Cards2></Cards2>
         <br></br>
      </div>   
      
      <div className='titt12'>
         <Cards3></Cards3>
         <br></br>
      </div>   
    
    </div>
  )
}

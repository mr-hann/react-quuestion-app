import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import '../components/thanks.css';

const Thanks = () => {

  const navigation= useNavigate();

  let score=localStorage.score;
let curentuser=localStorage.id;


let sendData=async()=>{
  try{
  let response= await fetch(`http://localhost:8000/students/${curentuser}`,{
    method:'PATCH',
    header:{
      'Content-Type':'application/json'
    },
    
    body:JSON.stringify({"score":score}),
  });
  return navigation('/');
}catch(error){
  console.error(error);
}
}

  return (
    <div className='center'>
      
      <div className='text'>
        <h1>Thank you and have a nice day</h1>
        <h3>your result will be given to you by your teacher</h3>
      </div>

      <div>
        <button className='send-data' onClick={sendData}>finish</button>
      </div>
    </div>
  )
}

export default Thanks
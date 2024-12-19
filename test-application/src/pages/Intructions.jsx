import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../components/intructions.css'

const Intructions = () => {
  //console.log(localStorage.getItem('id'));
  const navigate= useNavigate();
  let gonext=()=>{
    return navigate('/Questions')
  }
  return (
    <div className='center-text'>
      <h1>Intructions</h1>
        <div className='intruction-text'>
          <h2>read the intructions before proceeding with the questions</h2>
          <ul>
            <li>Anwser all questions.</li>
            <li>Click the finished button after you have submited your anwsers, else you would not have a result.</li>
            <li>Think of your anwsers first before sellecting an option, you cannot change your option.</li>
          </ul>
          <h2>Good luck</h2>
          
          <button className='btn-in' onClick={gonext}>next</button>
        </div>
    
    </div>
  )
}

export default Intructions
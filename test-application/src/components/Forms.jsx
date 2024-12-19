import React from 'react'
import './Forms.css'
import { useState } from 'react'
import {data, useNavigate} from 'react-router-dom'

const Forms = ({addstudent}) => {



  let [SchClass , setSchClass]= useState('jss1');
  let [studentname , setStudentname] = useState('');

  let navigate= useNavigate();

// this function should add the username to the db
  let addname=(e)=>{
    setStudentname(e.target.value);
  };

  // this function should add the class to the db
  let addclass=(e)=>{
    setSchClass(e.target.value);
  };
  //Math.floor(Math.random() * 100)
let id= `${new Date().getHours()}${ new Date().getMinutes()}${Math.floor(Math.random() * 10000)}${new Date().getMilliseconds()}`;

  let submit=()=>{
    // regular expressions for form validATION
    let later= '/^[a-zA-Z ]+$';
    if(later==studentname||studentname.length>5){

    let newStudent={
      id:id,
      name:studentname,
      class:SchClass,
      score:""
    }
    
    addstudent(newStudent);
    if(typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      localStorage.setItem("id", newStudent.id);
  } else {
      // Sorry! No Web Storage support..
      console.log('not sopported');
  }

    return navigate('/intructions')
}else{
  alert('enter a value that is more than four charaters');
  return;
}

  }


  return (
    <div className='form-box'>
      <div className='name-section'>
        <label htmlFor="name">Enter your name:</label>
          <input 
          type='text' 
          id='name' 
          value={studentname}
          className='name-input' 
          placeholder='enter your full name' 
          onChange={addname}/>
      </div>
 
    <div className='class-section'>
      <label htmlFor="class">Enter your class:</label>
            <select id="class"
             name="class" 
             value={SchClass}
             className='sellect-field' 
             onChange={addclass}>
                <option value="jss 1">jss 1</option>
                <option value="jss 2">jss 2</option>
                <option value="jss 3">jss 3</option>
            </select>
    </div>
        <button className='btn' onClick={submit}>submit</button>
    </div>
  )
}

export default Forms
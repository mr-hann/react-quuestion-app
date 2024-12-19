import React from 'react';
import BTJ3 from '../BTJ3.json';
import './question.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Questionsection = () => {

let [options,setOptions]=useState([]);
let navigate= useNavigate();

let stdans=[];
let Mainans=[];
let score=0;

BTJ3.map((a)=>Mainans.push({
  id:a.id,
  ans:a.ans.toLowerCase()}));

let mark=(e)=>{
  e.preventDefault();
  stdans=[...options];

 
  

 Mainans.sort((a, b)=>{return a.id - b.id});
 stdans.sort((a, b)=>{return a.id - b.id});


//stdans.push({'id':maths.rand*10,'ans':0});
if(Mainans.length-1 !=stdans.length){
  
 Mainans.map((ans,i)=>{
  
  stdans.push({'id':Math.floor(Math.random() * 100 +1),'ans':0});
 
      if(ans.ans==stdans[i].ans){
        score+=1;
      }else{
        score+=0;
    };
 
})
localStorage.setItem("score", score);
}
  return navigate('/Thanks');
}


  return (
    
    <div className='question-section'>
        <form> 
          <ol> 
            {BTJ3.map((q) => (
              <li key={q.id} className='questions'><p>{q.question}</p>
                <ol className='alp'>
                  {q.options.map((o,i)=>(
                   //i is an ittration in an arry while the o is the options in that array
                   <label className='options'><li key={i} ><input type="radio" name={q.id} value={o?o:''}
                    onChange={()=>(setOptions([...options,{
                      //adding the checked options in an array with an id
                      id:q.id,
                      ans:o.toLowerCase()
                    }]))}
                    /><span>{o}</span></li></label>
                  )) }
                </ol>
              </li>
          
            ))}    
               
          </ol>
            <button className='submit-btn' onClick={mark}>submit</button>
        </form>
    </div>
  )
}

export default Questionsection
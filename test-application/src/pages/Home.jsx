import React from 'react'
import Footer from '../components/footer'
import Forms from '../components/Forms'
import '../index.css'

const Home = () => {

  let addnewStudent= async(studentinfo)=>{
    try{
    let response= await fetch('http://localhost:8000/students',{
      method:'POST',
      header:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(studentinfo)
    });
   return;
  } catch(error){
    console.error(error);
    
  }

}

  return (
    <div>
    <Forms addstudent={addnewStudent}/>
    <Footer/>
   </div>
  )
}

export default Home
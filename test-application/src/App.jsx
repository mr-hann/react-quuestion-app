import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home';
import Questions from './pages/Questions';
import Thanks from './pages/Thanks';
import Intructions from './pages/Intructions';



function App() {


  const router= createBrowserRouter(
    createRoutesFromElements (
      <>
        <Route index element={<Home />} />
        <Route path='/Intructions' element={<Intructions/>} />
        <Route path='/Questions' element={<Questions/>} />
        <Route path='/Thanks' element={<Thanks/>} />
      </>
    
  )
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App

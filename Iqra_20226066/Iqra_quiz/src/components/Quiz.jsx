import React from 'react'
import './Quiz.css';

import {useNavigate} from 'react-router-dom';

export const Quiz = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
     <button onClick={()=>{
        navigate('/cards/science');
        localStorage.setItem("topic","science")
      }}
     >Science</button>
     <button onClick={()=>{
        navigate('/cards/popculture');
        localStorage.setItem("topic","popculture")
      }}
     >Pop Culture</button>
     <button onClick={()=>{
        navigate('/cards/mythology');
        localStorage.setItem("topic","mythology")
      }}
     >Mythology</button>
      
    </div>
  )
}
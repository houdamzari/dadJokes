import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { fetchJokes } from "../redux/jokesSlice";
import { useSelector } from "react-redux";
import background from '../assets/background.svg'
function HomePage(props) {
  const [joke, setJoke] = useState('');
  const dispatch = useDispatch();
  const randomJoke = useSelector(state => state)
  console.log(randomJoke.jokes)
   const btnHandler = ()=>{
    dispatch(fetchJokes());
  }
  
  return (
    <div className="contaier">
      <div className="bg-red-500">kjkhkhkhkhkhkk</div>
      <button onClick={btnHandler} className="relative z-[999] text-black"
      >Random Joke</button>
  <div >
    {randomJoke && (
      <>
        <div className="">{randomJoke.jokes.setup}</div>
        <div>{randomJoke.jokes.punchline}</div>
      </>
    )}
  </div>
</div>
  );
}

export default HomePage;
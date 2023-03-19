import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import { fetchJokes } from "../redux/jokesSlice";
import background from '../assets/background2.svg'
function HomePage(props) {
  const [joke, setJoke] = useState('');
  const dispatch = useDispatch();
  const randomJoke = useSelector(state => state.jokes)
   const btnHandler = ()=>{
     dispatch(fetchJokes());  };
  
  return (
    <div className="flex flex-row justify-between w-screen min-h-screen flex-grow items-center pt-4 " >
      <div className="p-20">
      <button onClick={btnHandler} className="bg-secondary-color text-black p-4 rounded">Random Joke</button>
        <div className="text-white py-10 items-start max-w-[500px] flex flex-col
  gap-8 justify-start">
    {randomJoke && (
      <>
        <div>{randomJoke.setup}</div>
        <div>{randomJoke.punchline}</div>
      </>
    )}
        </div>
      </div>
        <img className="fixed bottom-0 right-0 w-[100%] object-fit max-w-[1000px]" src={background} alt="cover-image" />
</div>
  );
}

export default HomePage;
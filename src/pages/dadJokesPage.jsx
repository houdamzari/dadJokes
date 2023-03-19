import React from 'react';
import Card from '../components/Card/Card'
import { useSelector } from "react-redux";
import { newArr } from "../redux/jokesSlice";
function DadJokesPage(props) {
  const { setup, punchline } = useSelector((state) => state.jokes);
  console.log(newArr);
  return (
    <div className="" >
      <div className="p-20  flex flex-row flex-wrap gap-10 min-h-fit">
        {jokesArr.map(card => (<Card ><div className="border-1 border-black">
        {card.setup }{card.punchline}
        </div></Card>))}

      </div>
</div>
  );
}

export default DadJokesPage;
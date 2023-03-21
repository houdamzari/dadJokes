import React from 'react';
import Card from '../components/Card/Card'
import { useSelector } from "react-redux";
function DadJokesPage(props) {
  const jokesArr = useSelector((state) => state.jokesArr);
  console.log(jokesArr)
  return (
    <div className="" >
      <div className="p-20  flex flex-row flex-wrap gap-10 min-h-fit">
        {jokesArr.map(card => (<Card key={card}><div className="border-1 border-black">
        {card.setup }{card.punchline}
        </div></Card>))}

      </div>
</div>
  );
}

export default DadJokesPage;
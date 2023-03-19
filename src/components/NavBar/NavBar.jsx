import React from 'react';
import { Link } from "react-router-dom";
function NavBar(props) {
  let navArr = [
    { name: 'home',
      path: '/'
    },
    { name: 'dadJokes',
      path: '/dadjokes'
    }
  ]
  return (
    <div>
      <ul>
        {navArr.map(element => <li><Link to={element.path}>{element.name }</Link></li>)}
      </ul>
    </div>
  );
}

export default NavBar;
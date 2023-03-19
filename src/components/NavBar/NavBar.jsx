import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
function NavBar(props) {
  let navArr = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'DadJokes',
      path: '/jokes'
    }
  ]
  return (
    <>
      <ul className="flex flex-row items-center justify-between px-20 text-white">
              <img src={logo} alt="logo" className="justify-self-start self-start" />
        <div className="flex flex-row gap-10 items-center">
        {navArr.map(element => <li><Link to={element.path}>{element.name}</Link></li>)}</div>
      </ul></>

  );
}

export default NavBar;
import React from 'react';
import {Menu} from 'antd'
import Bozzco from "../images/BozzcoLogo.png"
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div >
      <nav>
        <ul className='List'>
        <li>
            <Link to="/"><img className='NavImg' src={Bozzco} alt="Logo"/></Link>
          </li>
          <li>
            <Link to="/" className='links' >Home</Link>
          </li>
          <li>
            <Link to="/About" className='links' >About</Link>
          </li>
          <li>
            <Link to="/Services" className='links' >Services</Link>
          </li>
          <li>
            <Link to="/Contact" className='links' >Contact</Link>
          </li>
          
        </ul>
      </nav>
      
    </div>
  )
}

export default NavigationBar
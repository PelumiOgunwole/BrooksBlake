import React from 'react';
import Breaking_Bad_logo from "../images/Breaking_Bad_logo.png"
const NavigationBar = () => {
  return (
  <div>
      <nav>
          <a> <img src={Breaking_Bad_logo} alt="Breaking Bad Logo"/> </a>
          <a href='#Home'>Home</a>
          <a href='#About'>About</a>
          <a href='# Fame'>Hall of Fame</a>
          <a href='#News'>News</a>
      </nav>

  </div>
  );
};

export default NavigationBar;

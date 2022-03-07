import React from 'react';
import spinner from "../images/spinner.gif"
const Loader = () => {
  return (
  <div className='spinner'>
      <img src={spinner} 
      alt= "Fetching Characters ..."
      />
  </div>

  );
};

export default Loader;

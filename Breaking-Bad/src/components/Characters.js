import React from 'react';
import Loader from "./Loader"


const Characters = ({items,load}) => {


  return load ? (<Loader/>) :(
      
  
  <div className='Grid-Container'>
      
      {items.map((e) =>{
          return (
            
            
                <div className='Image-Card'>
                    <img src={e.img} alt="gallery of charaters" id='img' />
                    <div className='Text-Card'>
                        <h3> Name: {e.name} </h3>
                        <br></br>
                        <p> Occupation: {e.occupation} </p>
                        <br></br>
                        <p> Birthday: {e.birthday}</p>

                    </div>

                </div>
            
          )
      })}
  </div>
  );
};

export default Characters;

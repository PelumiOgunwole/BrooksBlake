import {React,useState} from 'react';




const SearchBar = ({getkeyWord}) => {
    
const [keyWord,setKeyWord]= useState("")

const getChildData = (j)=> {
  // The first function call saves value of keyWord as it changes
  setKeyWord(j)
  // getKeyWord is a function prop that has its definition in searchBar Comp at parent levelo
  getkeyWord(j)
}

  return (
  <div className='inputContainer'>
      <form>
          <input
          type="text"
          placeholder='Search Characters By Name'
          value={keyWord}
          onChange= { (e) => getChildData(e.target.value)}
          >
          </input>
      </form>
  </div>
  );
};

export default SearchBar;

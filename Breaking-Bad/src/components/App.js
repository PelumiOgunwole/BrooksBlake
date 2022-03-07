import axios from 'axios';
import {React, useEffect,useState} from 'react';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import Characters from './Characters';
import Loader from './Loader';


const App = () => {
  const [items, setItems] = useState([])
  const [load,setLoading]= useState(true)
  const [query,setQuery]= useState("")
  const link =`https://www.breakingbadapi.com/api/characters?name=${query}`
  

  useEffect(()=>{
    const fetchItems= async () =>{
      const res=  await axios (link)
      console.log(res.data);
      // Put api data into func setItems to enable frequent updating
      setItems(res.data);
      setLoading(false)
    }
    fetchItems()
    
  },[link,query])
  return (
  <div>
    <NavigationBar/>
    <SearchBar  getkeyWord={(q)=> {setQuery(q)}}/>

    
    <div className='Grid-Container'>
        
        <Characters load={load} items={items} />
    </div>
    
    
  </div>
  );
};

export default App;

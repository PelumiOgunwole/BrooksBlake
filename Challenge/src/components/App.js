
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import {React, useState,useEffect} from 'react'
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact.js"
import About from "./About"
import Services from "./Services"
import ReadNews from "./ReadNews";
import {useParams} from 'react-router-dom'


const App = () => {
  
  const [posts, setPosts] = useState([])
  
  const news= useEffect ( () => {
    const abortCont= new AbortController()
    axios.get(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/`, abortCont.signal)
    .then((res)=>{
      console.log(res.data)
      
      setPosts(res.data)
    })
    .catch((err)=>{console.error(err);})
    return abortCont.abort()
  }, [] )


  return (
    
      <div>
        <NavigationBar/>
        <Routes>

          <Route exact path="/" element={<Home posts={posts} setPosts={setPosts}  />}>
            
          </Route>

          <Route exact path="/Contact" element={<Contact/>}>
            
          </Route>

          <Route exact path="/About" element={<About/>} >
            
          </Route>

          <Route exact path="/Services" element={<Services/>}>
            
          </Route>

          <Route exact path="/ReadNews/:id" element={<ReadNews  />} >
            
          </Route>
        </Routes>
        
          
          
      </div>
    
  )
}

export default App

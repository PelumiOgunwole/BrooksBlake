import React from 'react'
import {Button} from "antd"
import ReadNews from './ReadNews'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Home = ({posts,setPosts}) => {
    
  return (
    
    <div className='main-webcontainer'>
       
        <div className='Container'>
            <div className='newsCards'>
                
                { posts.map((e)=>{
                    return(
                        
                        <div className='News' key={e.id} >
                             <img className='ImageBoards' src= {e.jetpack_featured_media_url} />
                            <div dangerouslySetInnerHTML={{__html: e.title['rendered']}} key={e.id}></div>
                            <Link to={`/ReadNews/${e.id}`}><button className='ReadButton' >Read More</button></Link>
                            
                            
                        </div>
                        
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Home
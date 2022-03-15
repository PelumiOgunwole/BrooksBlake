import React from 'react'
import {Button} from "antd"
import ReadNews from './ReadNews'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Home = ({posts, newNews,setPosts, idvalue, setIdValue}) => {
    const navigate= useNavigate()
    
    const handleClick= (id)=> {

        posts.map((f)=>{
            if (f.id===id){
                console.log(id)
                setIdValue(idvalue)
                navigate('/ReadNews }')
            }
        })
    }
    // Comments to test if commit is done
  return (
    
    <div className='main-webcontainer'>
       
        <div className='Container'>
            <div className='newsCards'>
                
                { posts.map((e)=>{
                    return(
                        
                        <div className='News' key={e.id} >
                            <Link to={`/ReadNews/${e.id}`} ><img className='ImageBoards' src= {e.jetpack_featured_media_url} /></Link>
                            <div dangerouslySetInnerHTML={{__html: e.title['rendered']}} key={e.id}></div>
                            
                            
                        </div>
                        
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Home
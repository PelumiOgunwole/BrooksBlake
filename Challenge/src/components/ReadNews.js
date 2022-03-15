import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DOMPurify from 'dompurify'
import ReactHtmlParser from 'react-html-parser'
import parser from 'html-react-parser'

const ReadNews = () => {
  const {id} = useParams()
  const [singlePageNews, setSinglePageNews]= useState({})
  const [singlePageNewsPosts, setSinglePageNewsPosts]= useState({})
  const listContainer= []
  const [comments, setComments]= useState('')
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [submit, setSubmit]= useState([])
  //const [serverVal,setServerVal]= useState('')
  
  const news= useEffect ( () => {
  
    console.log(id)
    axios.get(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${id}`)
    .then((res)=>{
      
      
      setSinglePageNews(res.data)
      console.log(singlePageNews.data)
    })
    .catch((err)=>{console.error(err);})

    
  }, [id] 
  )
  // Destrucuring the title and content from API data to avoid calling of names
  //const {content:rendered}=singlePageNews
  
  const{title:rendered}=singlePageNews
  
  //console.log(rendered)

  const processSubmit= (event)=>{
    // event.preventDefault() avoids reloading when form is submitted
    event.preventDefault()
    setSubmit(comments,name,email)
    // Empty the form input tags immediately when button is clicked
    setComments("")
    setName("")
    setEmail("")

    /* Note on attempt to post it would return a 401 error which means opportunity is not given
    to add data to the api */ 
    axios.post(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${id}`,
    {comments,name,email})
    .then((res)=>{
      if (res.status===401){
        alert("Sorry, you are not allowed to edit this post");
      }
      setSinglePageNewsPosts(res.data)
      
      alert(`Your name is ${name}`)
      
      
    })
    .catch((err)=>{console.error(err);})
    
    
    // Post user input to the server
    

    
  }
  return (
    <div className='NewsContent'>
        
        <img className='singleNewsImages' src={singlePageNews.jetpack_featured_media_url} ></img>
        {/*  Purposely done to allow api data run before rendering default DOM*/}
        <div className='singleNewsTitles'  key={singlePageNews.id} > 
          {singlePageNews.title && (<div dangerouslySetInnerHTML={{ __html: singlePageNews.title.rendered }}></div> ) }
        </div>

        <div className='singleNewsContents'  key={singlePageNews.id} > 
          {singlePageNews.content && (<div dangerouslySetInnerHTML={{ __html: singlePageNews.content.rendered }}></div> ) }
        </div>
        
        <div className='listOfPosts'>
          <h3> {submit} </h3>
          

        </div>
        <div className='Contact-Form' >
          <form className='Form' onSubmit={processSubmit} >
            <textarea className='textAreaClass' rows='4' cols='55' placeholder=' Make Comments' type='text' value={comments}
             onChange={(e)=>{setComments(e.target.value)}} >
            </textarea>
            
            <div className='inputFlex'>
              <span>
                <label className='Labels'>Name</label>
                <input className='inputItems' type='text' name='Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
              </span>
              
              <span>
                <label className='Labels' inputItems placeholder='Write your Email'>Email</label>
                
                <input className='inputItems' type='text' name='Email' placeholder='Write your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
              </span>
            
            </div>
            <input className='submitButton' type='submit'></input>
            
          </form>
        </div>
        
    </div>
  )
}

export default ReadNews
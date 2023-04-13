import { useEffect, useState } from 'react'
import { Api } from '../services/Api'
import Card from './Card';
import Navbar from './Navbar';
import axios, { AxiosResponse } from "axios";
  

function Main() {
      const[res,setRes]=useState<any[]>([])
     
   useEffect(()=>{
         Api.get('')
  
         .then(data=>  setRes(data.data.articles))
         .catch((err)=>console.log(err))
   },[])

  /*/ const all=res.map((item)=>{
  return(
     <div>
        <h2>{item.author}</h2>
        <h3>{item.description}</h3>
        <img src={item.urlToImage}/>
     </div>
  )
  }) /*/

  return (
    
    <div className="App">
       
         {!res ? <h1>carregando...</h1>: res.map((item)=>
          <Card key={item.id} item={item} />
         ) }
      
      
    </div>
  )
}

export default Main
    
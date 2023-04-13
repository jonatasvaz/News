import styled from"styled-components"


export const Cards=styled.div`
     width:1000px;
    height:400px;
    margin: 50px 180px;
   
    display:flex;
    
    :hover{
      border: 1px solid grey;
    }
  
    div{
    width:50%;
    height:100%;
    background-color:#F0FFFF;
    padding: 15px;
     margin: auto;
     justify-content: center;
   }


  
`

export const Img=styled.img`
width:100%;
height:100%;
border-right: 1px solid black;
  
  
`
export const Title=styled.nav`
width:100%;
 height:40px;
 background-color:#F0FFFF;


 h1{
  font-size:16px;
text-align: center;
background-color:#F0FFFF;
margin: 10px;
font-weight: 700;
 }

 h2{
  font-size: 13px;
  background-color:#F0FFFF;
  margin: 14px;
 }
 p{
  background-color:#F0FFFF;
  margin: 14px;
 }
 footer{
  background-color:#F0FFFF;
  margin: 14px;
 }
`


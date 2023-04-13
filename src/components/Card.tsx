   import { Cards,Img,Title,Text } from "../style/Cards"
  type Props={
     item:any
  }

   function Card({item}:Props){
    console.log(item)
        return(
            <Cards>
                
                <div>
                   <Img src={item.urlToImage} alt={item.author} />
                </div>
                <div>
                    
                     <Title>
                          <h1>{item.title}</h1>
                          <h2>{item.description}</h2>
                          <p>{item.content}</p>
                           <footer>publication date:{item.publishedAt}</footer>

                     </Title>
                 
                </div>
            </Cards>
        )
   }

   export default Card
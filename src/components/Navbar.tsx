 import "./navbar.css"

  function Navbar(){
    return(
      <nav className='nav'>
      <div className='logo'>rick  and  <span>Morty</span> </div>
    
      <div className='rotas'>
          <ul>
              <li  >HOME</li>
              <li  >SOBRE</li>
              <li  >CONTATO</li>
          </ul>
      </div>
  </nav>
  
    )
  }

  export default Navbar
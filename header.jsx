import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle,AiOutlineMenu } from "react-icons/ai";
const Header=({cartitems})=>{

   const [state,setsta]=useState()
   return(
      <>
      
     


 <nav className="">
            <h1 style={{color:'white'}}>Amazon.com</h1>
              <div>
                  <ul id="navbar" className={state?"#navbar active":"#navbar"} >
                  {/* className={this.state.clicked? "#navbar active":"#navbar"} */}

                
                  <Link to="/"><li> <a> Home</a></li></Link>
                  <Link to="/"><li> <a> About us</a></li></Link>
                 <Link to="/Product"><li> <a> Product</a></li></Link>
                 <Link to="/cart"><li><a> Cart </a></li>  </Link>   
                 <Link to="/Login"><li><a> Login </a></li>  </Link>                   
                
                           
                 </ul>
               </div>
               <div id="mobile" >
               <span onClick={()=>setsta(!state) }>{state?<AiFillCloseCircle/> :<AiOutlineMenu/>} </span>
               
               </div>
            </nav>






    
            

      </>
   )
}

export default Header
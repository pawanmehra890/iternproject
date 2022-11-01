import React,{useEffect, useState}   from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from "./header";
import Note from "./notic";
 import Footer from "./footer";
import Loginform from "./login";
import Cartproduct from "./cartproduct";
import Cart from "./cart";
const App=()=>{

 const  [item,setitem]=useState([])

  useEffect(()=>{
   const Api=async()=>{
      let url='https://api.pujakaitem.com/api/products'
      let res=await fetch(url)
      let data=await res.json()
     setitem(data)
   }
   Api()
  },[])




   const [cartitem,setcartitem]=useState([])
    
   
  const additems=(products)=>{
  const Productexit=cartitem.find((item)=>item.id===products.id)
  if(Productexit)
  {
   setcartitem(cartitem.map((item)=>item.id===products.id?{...Productexit,quatntity:Productexit.quatntity+1}:item))
  }
  else
  {
   setcartitem([...cartitem,{...products,quatntity:1}])        
  }



  }

   const remove=(products)=>{
      const Productexit=cartitem.find((item)=>item.id===products.id)
      if(Productexit.quatntity===1)
      {

         
         setcartitem(cartitem.filter((item)=>item.id==!products))
      }
      else
      {
         setcartitem(cartitem.map((item)=>item.id==products.id?{...Productexit,quatntity:Productexit.quatntity-1}:item))
      }
    
     }
    

     const removeifull=(products)=>{
      const Productexit=cartitem.find((item)=>item.id===products.id)
      if(Productexit)
      {
            setcartitem(cartitem.filter((item)=>item.id!==products.id))
      }
      

     }


     const additemmss=(product)=>{
      const Productexit=cartitem.find((item)=>item.id===product.id)
      if(Productexit.quatntity==10)
      {
        alert('please control your self')
          
         
      }
      else
      {
         setcartitem(cartitem.map((item)=>item.id==product.id?{...Productexit,quatntity:Productexit.quatntity+1}:item))
      }

     }
    
   return(
      <>
      
      <Router>

     <Header  />  
     <Note/>
     

         <Routes setcartitem={setcartitem} item={item} additemmss={additemmss} removeifull={removeifull} cartitem={cartitem} remove={remove} additems={additems}   >
            <Route path="/Product"element=<Cartproduct item={item}  cartitem={cartitem}  additems={additems} /> />
               <Route path="/cart"  element={<Cart cartitem={cartitem} additemmss={additemmss} remove={remove} removeifull={removeifull}/>}></Route>
               <Route path="/login"  element={<Loginform cartitem={cartitem} additemmss={additemmss} remove={remove} removeifull={removeifull}/>}></Route>

   </Routes>
<Footer/>
   </Router>





  


      </>
   )
    

}

export default App
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from "./cartproduct";
const Cartproduct=({item,additems})=>{



   return(
      <>
    
   

      <section class="products" id="products">

<h1 class="heading"> latest <span>products</span> </h1>
<div class="box-container">
 {
   item.map((items)=>{
     return(
      <> 
 

    

<div class="box">
   <span class="discount">-10%</span>
   <div class="image">
      <img src={items.image} alt=""/>
      <div class="icons">
         <a href="" class="fas fa-heart"></a>
         <button href="" class="cart-btn" onClick={()=>additems(items)}>Add to cart</button>
         <a href="" class="fas fa-share"></a>
      </div>
   </div>
   <div class="content">
      <h3>{items.name}</h3>
      <div class="price">{items.price}  <span>$1000000000000</span> </div>
   </div>
</div>







   
  
   </>
     )
     
   })
}  
</div>
</section>




     
     
  


    


      </>
   )
}
export default Cartproduct



